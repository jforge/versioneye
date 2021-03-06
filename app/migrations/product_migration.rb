class ProductMigration

  def self.export_references(language = 'Java')
    top_10 = Product.where(:language => language).desc(:used_by_count).limit(10)
    top_10.each do |top_1|
      lines = Array.new
      response   = Dependency.references language, top_1.prod_key, 0
      total_entries = response[:count]
      pages = total_entries / 30
      rest = total_entries % 30
      if rest > 0
        pages += 1
      end
      (0..pages).each do |page|
        response = Dependency.references language, top_1.prod_key, page
        products = Product.by_prod_keys language, response[:prod_keys]
        products.each do |prod|
          line = "#{prod.group_id}; #{prod.artifact_id}; #{prod.repositories.first}"
          lines << line
          p line
        end
      end
      filename = "#{top_1.name}.csv"
      File.open(filename, 'w') {|f| f.write(lines.join("\n"))}
    end
  end

  def self.count_versions lang
    versions_count = 0
    count = Product.where(language: lang).count()
    Rails.logger.info "language: #{lang}, count: #{count}"
    pack = 100
    max = count / pack
    (0..max).each do |i|
      skip = i * pack
      products = Product.where(language: 'Java').skip(skip).limit(pack)
      products.each do |product|
        versions_count = versions_count + product.versions.count
      end
    end
    versions_count
  end

  def self.update_name_downcase_global
    products = Product.where(name_downcase: nil)
    products.each do |product|
      product.name_downcase = String.new(product.name.downcase)
      product.save
    end
  end

  def self.parse_release_date_global lang
    Product.where(language: lang).each do |product|
      product.versions.each do |version|
        if version.released_string.nil?
          Rails.logger.info 'empty!'
          next
        end
        version.released_at = DateTime.parse version.released_string
        version.save
        Rails.logger.info "#{version.released_at}"
      end
      product.save
    end
  end

  def self.remove_leading_vs lang
    Product.where(language: lang).each do |product|
      product.versions.each do |version|
        if version.to_s.match(/v[0-9]+\..*/)
          Rails.logger.info "#{version}"
          version.version = version.to_s.gsub('v', '')
          product.save
          Rails.logger.info " -- #{version}"
        end
      end
    end
  end

  def self.count_central_mvn_repo
    count = 0
    Product.where(language: 'Java').each do |product|
      product.repositories.each do |repo|
        if repo.src.eql?('http://search.maven.org/')
          count += 1
          Rails.logger.info "count #{count}"
        end
      end
    end
  end

  def self.remove_bad_links lang
    Product.where(language: lang).each do |product|
      product.http_links.each do |link|
        if link.link.match(/\Ahttp.*/).nil?
          Rails.logger.info "remove #{link.link}"
          link.remove
        end
      end
      product.save
    end
  end

  def self.improve_ruby_links
    Product.where(language: 'Ruby').each do |product|
      Versionlink.where(prod_key: product.prod_key).each do |link|
        unless link.version_id.nil?
          Rails.logger.info "improve link #{product.prod_key} - #{link.link} - #{link.version_id}"
          link.version_id = nil
          link.save
        end
      end
    end
  end

  def self.check_emtpy_release_dates lang
    Product.where(language: lang).each do |product|
      product.versions.each do |version|
        if version.released_string.nil?
          Rails.logger.info "#{product.name} - #{version.to_s} - empty!"
          next
        end
      end
    end
  end

  def self.xml_site_map
    Rails.logger.info "xml_site_map"
    uris = Hash.new
    sitemap_count = 1
    count = Product.count()
    pack = 100
    max = count / pack
    (0..max).each do |i|
      skip = i * pack
      products = Product.all().skip(skip).limit(pack)
      products.each do |product|
        next if product.nil?
        uri = "#{product.language_esc}/#{product.to_param}/#{product.version_to_url_param}"
        modified = DateTime.now.strftime("%Y-%m-%d")
        p "#{modified} - #{uri}"
        uris[uri] = {:uri => uri, :modified => modified}
      end
      if uris.count > 49000
        Rails.logger.info "#{uris.count}"
        Rails.logger.info "sitemap count: #{sitemap_count}"
        write_to_xml(uris, "sitemap-#{sitemap_count}.xml")
        uris = Hash.new
        sitemap_count += 1
      end
    end
    Rails.logger.info "#{uris.count}"
    Rails.logger.info "sitemap count: #{sitemap_count}"
    write_to_xml(uris, "sitemap-#{sitemap_count}.xml")
    return true
  rescue => e
    p e.message
    p e.backtrace.join('\n')
  end

  def self.last_modified product
    product.version_by_number( product.version ).updated_at.strftime("%Y-%m-%d")
  rescue => e
    p e.message
    DateTime.now.strftime("%Y-%m-%d")
  end

  def self.write_to_xml(uris, name)
    Rails.logger.info "write to xml"
    xml = Builder::XmlMarkup.new( :indent => 2 )
    xml.instruct!(:xml, :encoding => "UTF8", :version => "1.0")
    xml.urlset(:xmlns => "http://www.sitemaps.org/schemas/sitemap/0.9") do |urlset|
      uris.each_pair do |key, val|
        urlset.url do |url|
          uri = val[:uri]
          modified = val[:modified]
          url.loc "https://www.versioneye.com/#{uri}"
          url.lastmod modified
        end
      end
    end
    xml_data = xml.target!
    xml_file = File.open(name, "w")
    xml_file.write(xml_data)
    xml_file.close
  end

end
