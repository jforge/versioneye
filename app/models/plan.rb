class Plan
  
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name_id, type: String
  field :name, type: String
  field :price, type: String
  field :private_projects, type: Integer

  def self.create_default_plans
    free = Plan.new
    free.name_id = "02_free"
    free.name = "Free"
    free.price = "0"
    free.private_projects = 0
    free.save

  	plan = Plan.new
  	plan.name_id = "02_personal"
  	plan.name = "Personal"
  	plan.price = "3"
  	plan.private_projects = 5
  	plan.save

  	plan2 = Plan.new
  	plan2.name_id = "02_business_small"
  	plan2.name = "Business - Small"
  	plan2.price = "7"
  	plan2.private_projects = 10
  	plan2.save

  	plan3 = Plan.new
  	plan3.name_id = "02_business_normal"
  	plan3.name = "Business - Normal"
  	plan3.price = "25"
  	plan3.private_projects = 50
  	plan3.save
  end

  def self.current_plans
    Plan.where(name_id: /^02/)
  end
  
end