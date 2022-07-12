// Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const arambha = { lat: 32.695372062339864, lng: -17.062666202540463 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 10,
      center: arambha,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: arambha,
    map: map,
  });
}
