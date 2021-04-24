const mymap = L.map('map').setView([0.7893, 113.9213], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3l1a3VyYmFydSIsImEiOiJja251cjhtenkwZGR2MzBvMzZqMXdhb2Q1In0.b8YhjQg3X8R3w4MO7L6_jQ'
}).addTo(mymap);

// dummy data
let data = [
    {lat: 0.7893, long: 112.9213},
    {lat: 0.7893, long: 113.9213},
    {lat: 0.7893, long: 114.9213},
    {lat: 1.9893, long: 112.9213},
    {lat: 1.9893, long: 113.9213},
    {lat: 1.9893, long: 114.9213},
];

for (let i = 0; i < data.length; i++) {
    const lat = data[i].lat;
    const long = data[i].long;

    const marker = L.marker([lat, long]).bindPopup(`<b>You clicked marker: ${i+1}</b>`);
    mymap.addLayer(marker)
    
}

