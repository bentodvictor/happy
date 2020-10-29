// Create map
var map = L.map('mapid').setView([-26.4874358,-49.0979892], 15);

// Create and add Title Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



const addMarker = ({id, name, lat, lng}) => {
    //  create popup overlay
    const popup = L.popup({
        closeButton: false,
        cassName: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="chose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)

    // Create and add map
    L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach(span => {
    const orphanage = {
        name: span.dataset.name,
        id: span.dataset.id,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})
