var markers = L.layerGroup([    L.marker([51.5, -0.09]),
    L.marker([51.6, -0.1]),
    L.marker([51.7, -0.11])
]).addTo(map);
document.querySelector('form').addEventListener('change', function() {
    var selectedFilter = document.querySelector('input[name="filter"]:checked').value;
    if (selectedFilter === 'all') {
      markers.addTo(map);
    } else if (selectedFilter === 'london') {
      markers.addTo(map).eachLayer(function(layer) {
        if (layer.getLatLng().lat < 51.5 || layer.getLatLng().lng < -0.2) {
          markers.removeLayer(layer);
        }
      });
    } else if (selectedFilter === 'paris') {
      markers.addTo(map).eachLayer(function(layer) {
        if (layer.getLatLng().lat > 48.9 || layer.getLatLng().lng > 2.5) {
          markers.removeLayer(layer);
        }
      });
    }
  });
  