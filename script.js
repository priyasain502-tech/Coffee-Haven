// Navbar Scroll Effect

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if(window.scrollY > 50){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }

});


// Scroll Reveal Animation

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        let windowHeight = window.innerHeight;
        let revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();