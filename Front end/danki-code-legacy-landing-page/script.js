const mapContainerElement = document.getElementById("map")    // pega a div class map.
const endereco = encodeURIComponent(
    "rua geraldo martins oliveira, Ribeira, Cachoeiras de Macacu"
); // codifica a string do endereço no formato URI para usar na API

// função para gerar o mapa dentro da div
// introduz um elemento iframe de mapa pre-configurado da Google Maps Embed API.
function gerarMapa (element, adress){
    element.innerHTML =
    `
    <iframe class="frame"
        width="100%"
        height="440px"
        style="border:0; min-width: 440px"
        loading="lazy"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
        src="https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_EMBED_API_KEY}&q=${adress}">
    </iframe>
    `
}

// Após o carregamento da página chama a função para criar o mapa.
window.onload = gerarMapa(mapContainerElement, endereco);