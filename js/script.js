document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.getElementById('btnNo');
    const btnSi = document.getElementById('btnSi');
    const frente = document.getElementById('frente');

    btnNo.addEventListener('click', () => {
        let randomX = Math.floor(Math.random() * 100);
        let randomY = Math.floor(Math.random() * 100);
        btnNo.style.left = randomX + '%';
        btnNo.style.top = randomY + '%';
    })

    btnSi.addEventListener('click', ()=>{
        frente.style.display='flex';
    })
})