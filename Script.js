const Matsalen = document.querySelector("#Matsalen");
const matsalentooltip = document.querySelector("#matsalentooltip");

Matsalen.addEventListener("mouseenter", function(){
    matsalentooltip.style.display = "block";
});

Matsalen.addEventListener("mouseleave", function() {
    matsalentooltip.style.display = "none";
});


