document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.hero-imagen img');
    const total = images.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        images.forEach((img, index) => {
            img.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }, 3000);
});