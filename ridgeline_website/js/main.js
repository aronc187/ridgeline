//initialize map 
function  initMap() {
   //your locatioin
   const loc = {lat: 42.361145, lng: -71.057083};
   //centered map on location
   const map = new google.maps.Map(document.querySelector('.map')
, {
  zoom:14,
  center: loc
});
//marker, positioned at location 
const marker = new google.maps.Marker({postion: loc, map: map})
}

