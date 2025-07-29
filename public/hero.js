document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const imagenes = document.querySelectorAll('.hero-imagen img');
    const total = imagenes.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        imagenes.forEach((img, index) => {
            img.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }, 3000);
});