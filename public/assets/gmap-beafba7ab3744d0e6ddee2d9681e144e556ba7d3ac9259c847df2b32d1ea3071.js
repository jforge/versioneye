function initialize_profile(e){(null==e||""==e)&&(e="Berlin");var t=document.getElementById("map_for_user_profile");geo=new google.maps.Geocoder,null!=t&&geo.geocode({address:e},function(e,n){if(n==google.maps.GeocoderStatus.OK){var r=e[0].geometry.location,i={zoom:5,center:r,mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(t,i);new google.maps.Marker({position:r,map:map})}else alert("Sorry. We are not able to display the location on Google Maps. Maybe you should edit your location.")})}var markers=new Array;