define([require],function(e){function t(e){this.selector=e.selector||"body",this.height=e.height||400,this.width=e.width||680,this.margin={top:10,right:20,bottom:12,left:80},this.canvasWidth=this.width-this.margin.left-this.margin.right,this.canvasHeight=this.height-this.margin.top-this.margin.bottom,this.fontSize=e.fontSize||10,this.dataset=e.dataset||[],this.title=e.title||"",this.xScaler=d3.scale.linear().range([0,this.canvasWidth]),this.yScaler=d3.scale.ordinal().rangeRoundBands([0,this.canvasHeight],.2)}function n(e){return d3.svg.axis().scale(e.xScaler).orient("bottom").ticks(5)}return t.prototype.loadAndRender=function(e){var t=this;d3.json(e,function(n,r){return n?(console.error("Can not load data from: "+e),1):(r.forEach(function(e){e.value=+e.value}),r.sort(function(e,t){return e.value>=t.value?-1:1}),void t.render(r))})},t.prototype.render=function(e){var t=this;t.dataset=e,t.xScaler.domain([0,d3.max(e,function(e){return e.value})]),t.yScaler.domain(e.map(function(e){return e.name})),canvas=t.initCanvas(t.selector),canvas.select("g").selectAll(".bar").data(e).enter().append("rect").attr({"class":"bar",x:function(e){return 0},y:function(e){return t.yScaler(e.name)},width:function(e){return t.xScaler(e.value)},height:t.yScaler.rangeBand()}),t.addBarLabels(),t.addBarTitles(),t.addAxisX(),t.addTitle(t.title||"")},t.prototype.initCanvas=function(e){var t=this,n=d3.select(e).append("svg").attr({width:t.width,height:t.height});return n.append("g").attr("transform","translate("+t.margin.left+","+t.margin.top+")"),t.canvas=n,n},t.prototype.addBarLabels=function(){var e=this;e.canvas.select("g").selectAll("text").data(e.dataset).enter().append("text").text(function(e){return e.value}).attr({x:function(t){return e.xScaler(t.value)-e.fontSize*String(t.value).length},y:function(t){return e.yScaler(t.name)+e.yScaler.rangeBand()/1.8},fill:"white"})},t.prototype.addBarTitles=function(){var e=this,t=e.canvas.append("g");t.attr("transform","translate(0, "+e.margin.top+")").selectAll("text").data(e.dataset).enter().append("text").text(function(e){return e.name}).attr({"class":"barTitle",x:function(e){return 0},y:function(t){return e.yScaler(t.name)+e.yScaler.rangeBand()/1.8}})},t.prototype.addAxisX=function(){var e=this;e.canvas.append("g").attr("class","grid").attr("transform","translate("+e.margin.left+","+e.canvasHeight+")").call(n(e).tickSize(-e.canvasHeight+e.margin.top,0,0).tickFormat(function(e){return e}))},t.prototype.addTitle=function(e){var t=this;t.canvas.append("g").attr("class","").append("text").text(e).attr({"class":"plotTitle",x:function(e){return t.width/2},y:function(e){return t.margin.top+5}})},t});