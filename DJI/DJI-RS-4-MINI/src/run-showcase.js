// Função para associar evento de clique aos botões do Showcase
function createButtonSet(categories, spanOrder) {
    for (var i = 0; i < categories.length; i++) {
        (function(category, button) {
            button.addEventListener("click", function () {
                showGallery(category.id, button, category.classShowcase);
            });
        })(categories[i], spanOrder[i]);
    }
}

// Seleciona os botões do Showcase
var buttonsSpan = document.querySelectorAll('.button-container > span');

// Configura os botões do Showcase Videos - Dobra-07
createButtonSet([
    { id: "fraco", classShowcase: "dobra-07" },
    { id: "forte", classShowcase: "dobra-07" }
], buttonsSpan);




document.addEventListener('DOMContentLoaded', function() {
    function createButtonSet(categories, container) {
        container.innerHTML = ''; // Limpa o conteúdo atual do contêiner

        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            var span = document.createElement('span');
            span.classList.add('category-button');
            if (category.active) {
                span.classList.add('active');
            }
            span.textContent = category.text;
            span.addEventListener("click", function () {
                "showGallery('" + category.id + "', this)";
            } // Adiciona o evento onclick
            container.appendChild(span);
        }
    }

    var buttonContainers = document.querySelectorAll('.button-container');

    if (buttonContainers.length > 0) {
        createButtonSet([
            { text: 'Arquitetura', id: 'arquitetura', active: true },
            { text: 'Lagos', id: 'lagos', active: false },
            { text: 'Montanhas', id: 'montanhas', active: false }
        ], buttonContainers[0]);

        createButtonSet([
            { text: 'Vídeos em 4K/60 fps em HDR', id: 'video-4k-hdr', active: true },
            { text: 'Vídeos em 4K/120 fps', id: 'video-120fps', active: false },
            { text: 'Vídeos em HLG & D-Log M de 10 bits', id: 'video-hlg', active: false }
        ], buttonContainers[1]);

        createButtonSet([
            { text: 'RTH sem GPS', id: 'rth-sem-gps', active: true },
            { text: 'RTH noturno', id: 'rth-noturno', active: false }
        ], buttonContainers[2]);
    } else {
        console.error("Nenhum contêiner encontrado!");
    }
});
