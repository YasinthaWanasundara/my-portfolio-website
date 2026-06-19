const typed = new Typed(".text",{
    strings:["IT Undergraduate", "Full-Stack Web Developer", "Software engineering Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
    topBtn.style.display="block";
    }else{
    topBtn.style.display="none";
    }
});

topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = (rect.height / 2 - y) / 18;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-12px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});