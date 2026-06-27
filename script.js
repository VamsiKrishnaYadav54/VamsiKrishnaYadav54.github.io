// ============================
// Scroll Animation
// ============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});


// ============================
// Keyboard Shortcut
// Press D to toggle Dark Mode
// ============================

document.addEventListener("keydown",function(e){

    if(e.key==="d" || e.key==="D"){

        document.body.classList.toggle("dark");

    }

});


// ============================
// Navbar Shadow on Scroll
// ============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>40){

        nav.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

    }

    else{

        nav.style.boxShadow="0 2px 12px rgba(0,0,0,.08)";

    }

});
