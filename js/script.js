document.addEventListener('DOMContentLoaded', (event) => {
    new fullpage('#fullpage', {
        autoScrolling:true,
        scrollHorizontally: true,
        anchors: ['home', 'about', 'projects', 'contact'],
        menu: '#menu',
    });

    // Identificadores únicos para as imagens
    var images = [
        document.getElementById('image1'),
        document.getElementById('image2'),
        document.getElementById('image3')
    ];

    var imageIndex = [1, 1, 1]; // Começa com a imagem 1 para cada projeto

    setInterval(function() {
        for (var i = 0; i < images.length; i++) {
            // Atualiza o src da imagem
            images[i].src = "images/screenshots/calculadora" + "/Screen_" + imageIndex[i] + ".png";

            // Incrementa o índice da imagem ou retorna para 1 se for a imagem 6
            imageIndex[i] = imageIndex[i] % 6 + 1;
        }
    }, 1000); // Altera a imagem a cada 1 segundo
});