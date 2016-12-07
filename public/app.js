var mainMap;

var init = function() {
 var container = document.querySelector('main-map');
 var center = {lat: 57.5359, lng: -6.2263};
 mainMap = new MapWrapper(container, center, 10);

 var marker = new google.maps.Marker({
   position: this.center,
   map: mainMap,
   title: 'A Good Place to be reborn'
 });

 var contentString = '<h1>This is here, there everywhere </h1>';
 var infowindow = new google.maps.InfoWindow({
   content: contentString
 });


 marker.addListener('click', function() {
   infowindow.open(map, marker);
 });

var newCenter = {lat: 36.2633, lng: 22.9774  }

 var button = document.querySelector('button')
      button.onclick = moveToLocation(newCenter);


function moveToLocation(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    mainMap.panTo(center);
}

}

window.onload = init;
