function getCurrentLocation(){
	navigator.geolocation.getCurrentPosition(function(position){
		document.getElementById('latitude').value = position.coords.latitude;  
		document.getElementById('longitude').value = position.coords.longitude; 
	});	
}

function decodeLocation()
{
  	var latitude = document.getElementById('latitude').value;
	var longitude = document.getElementById('longitude').value;

	getLocationInfo(latitude, longitude, function(locationInfo){
		document.getElementById('country').innerHTML = locationInfo.country;
		document.getElementById('address').innerHTML = locationInfo.address;
		document.getElementById('city').innerHTML = locationInfo.city;
	});		
}


function getLocationInfo(latitude, longitude, callback)
{
	var geocoder;
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(latitude, longitude);

        geocoder.geocode({'latLng': latlng}, function(results, status)
        {
        	if (status == google.maps.GeocoderStatus.OK)
                {
                	if (results[0])
                       	{
                        	var add= results[0].formatted_address ;
                                var  value=add.split(",");

                                count=value.length;
                                country=value[count-1];
                                address=value[count-2];
                                city=value[count-3];
                                callback({ country: country, address: address, city: city  });
                        }                        
                 }
       });
}

function showInfo()
{
	alert('jujj');
}