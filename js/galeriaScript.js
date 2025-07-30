document.addEventListener('DOMContentLoaded', ()=>{
    const btnHerramientas = document.getElementById("btnHerramientas");
    const btnGaleria = document.getElementById("btnGaleria");
    const herramientas= document.getElementById("Herramientas");
    const galeria= document.getElementById("Galeria");

    galeria.classList.add("visible");
    btnHerramientas.classList.add("visible")
    btnGaleria.classList.remove("visible");


    btnHerramientas.addEventListener('click', ()=>{
        herramientas.classList.add("visible");
        galeria.classList.remove("visible")
        btnHerramientas.classList.remove("visible")
        btnGaleria.classList.add("visible");
    });
    btnGaleria.addEventListener('click', ()=>{
        herramientas.classList.remove("visible");
        galeria.classList.add("visible");
        btnHerramientas.classList.add("visible")
        btnGaleria.classList.remove("visible");
    });

});