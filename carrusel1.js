document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    const textContainer = document.querySelector('.video-text');
    const texts = [
        {  description: "Colecciones", title: "COLECCION PRIMAVERA/VERANO"},
        { description: "Racing" , title: "SCUDERIA FERRARI" },
        { description: "Sports-Cars" , title: "ARRANCA EL MOTOR",}
    ];

    let currentIndex = 0;

    function showImage(index) {
        const translateValue = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
        textContainer.innerHTML = `
            <p>${texts[index].description}</p>
            <h2>${texts[index].title}</h2>
            <button class="discover">DISCOVER &#10095;</button>
        `;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        showImage(currentIndex);
    }, 10000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)
});
