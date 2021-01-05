function initMap() {
  // The location of Uluru
  const SkydiveAntwerp = {lat: 51.302219, lng: 4.3886033};
  const SkydiveSpa = {lat: 50.478605,lng: 5.6323166}
  const SkydiveFlanders = {lat: 50.8653888,lng: 4.4377436}
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: SkydiveAntwerp,
  });
  // The marker, positioned at Uluru
  new google.maps.Marker({
    position: SkydiveAntwerp,
    map: map,
    title: "Skydive Antwerp"
  });
  new google.maps.Marker({
    position: SkydiveSpa,
    map: map,
    title: "Skydive Spa"
  });
  new google.maps.Marker({
    position: SkydiveFlanders,
    map: map,
    title: "Skydive Flanders"
  });
}