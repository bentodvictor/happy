// Create map
var map = L.map('mapid').setView([-26.4874358,-49.0979892], 15);

// Create and add Title Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon from map
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
});

// add new photos fields
const addPhotoField = () => {
    //  Get images container
    const container = document.querySelector('#images');
    // pega o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realiza o clone da ultima imagem adicionada
    const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // verifica se campo esta vazio
    if(newfieldContainer.children[0].value === '') {
        return;
    }
    // limpar o campo antes de adicionar no container de imagens
    newfieldContainer.children[0].value = '';
   
    // adiciona o clone ao container de #images 
    container.appendChild(newfieldContainer)
}

// Deletar o campo de adicionar imagem
const deleteField = (event) => {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // limpa valor do campo
        span.parentNode.children[0].value = '';
        return;
    }

    // deletar o campo
    span.parentNode.remove();
}

//  selecionar sim ou nao
const toggleSelect = (event) => {
    // retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    // colocar classe no botao clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"');
    input.value = button.dataset.value;
    
}

// Validação para seleção do mapa
const validateForm = (event) => {
    console.log(event)
    const lat = document.querySelector('[name=lat]').value;
    const lng = document.querySelector('[name=lng]').value;

    if(!lat && !lng)
        event.preventDefault();
}
