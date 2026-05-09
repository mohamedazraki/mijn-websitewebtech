let mapP = L.map('map').setView([51.2127, 4.4039], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapP);


let markerIconP1 = L.icon({
  iconUrl: './assets/images/Logo.png',
  iconSize: [120, 60], 
  iconAnchor: [60, 60],
  popupAnchor: [0, -60]
});

L.marker([51.2127, 4.4039], { icon: markerIconP1 }).addTo(mapP);