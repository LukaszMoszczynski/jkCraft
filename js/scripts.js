/*$( document ).ready(function() {

});

*/

function initMap() {
  // The location of Uluru
  var jk = {lat: 53.4289036, lng: 14.5448369};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: jk});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: jk, map: map});
}

initMap();