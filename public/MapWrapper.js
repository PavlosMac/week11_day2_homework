var MapWrapper = function(container, center, zoom){


  this.googleMap = new google.maps.Map(container,
    {
    center: center,
    zoom: zoom
    }
);
}

MapWrapper.prototype = {

  addMarker: function(coordinates){
    var marker = new google.maps.Marker({
      position: coordinates,
      map: this.googleMap
    })
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      console.log(this);
      this.addMarker(position);
    }.bind(this));
  }

};
