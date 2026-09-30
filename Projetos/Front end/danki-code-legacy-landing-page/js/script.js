// salva elementos em constantes para reutilizar depois.
const DOC_ELEM = $(document);               // document
const MAP_CONT_ELEM = $("#map")             // div map
const MENU_MOBILE_ELEM = $(".menu-mobile"); // nav menu mobile

// salva o endereço codificado numa constante para facilitar acesso e manutenção
const ADRESS = encodeURIComponent("Ribeira, Cachoeiras de Macacu");

// função auxiliar para gerar o mapa dentro da div
// introduz um elemento iframe de mapa pre-configurado da Google Maps Embed API em um elemento.
function initMap (element, adress){
    element.html(
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
    )
}

// função auxiliar para mostrar ou esconder menu mobile
// 
function toggleMenuMobile (element) {
    let menuMobileList = $(element).find("ul");
    menuMobileList.toggle();
}

// executa código após o carregamento do DOM
// chama a função initMap para gerar o mapa
DOC_ELEM.find(() => {
    initMap(MAP_CONT_ELEM, ADRESS);
})

// verifica se o menu mobile foi clicado e chama a função auxiliar para mostrar ou esconder
MENU_MOBILE_ELEM.on("click", function() {
    toggleMenuMobile(this);
})