document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                //obs.unobserve(entry.target); 
            }else{
                entry.target.classList.remove("visible");
            }
        });
    });

    const divs = document.querySelectorAll(".proyecto-card");
    console.log(divs)
    divs.forEach(div=>{
        observer.observe(div);
    })
})