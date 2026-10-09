
/* strukturen är gjord och förklarad till mig av chatgpt aka jag förstår det men inte jag som byggde det */
/*const Matsalen = document.querySelector("#Matsalen"); /*variable som håller ett värde vilket i detta fall är matsalens id */
/*const matsalentooltip = document.querySelector("#matsalentooltip");

Matsalen.addEventListener("mouseenter", function(){ 
    matsalentooltip.style.display = "block";
});

Matsalen.addEventListener("mouseleave", function() {
    matsalentooltip.style.display = "none";
});

Matsalen.addEventListener("click", function(event) {
    event.stopPropagation();

    if (matsalentooltip.style.display === "block") {
        matsalentooltip.style.display = "none";
    } else {
        matsalentooltip.style.display = "block";
    }
});

document.addEventListener("click", function(){
    matsalentooltip.style.display = "none";
});


const Repstudio = document.querySelector("#Repstudio");
const Repstudiotooltip = document.querySelector("#Repstudiotooltip");

Repstudio.addEventListener("mouseenter", function(){
    Repstudiotooltip.style.display = "block";
});

Repstudio.addEventListener("mouseleave", function() {
    Repstudiotooltip.style.display = "none";
});

Repstudio.addEventListener("click", function(event) {
    event.stopPropagation();

    if (Repstudiotooltip.style.display === "block") {
        Repstudiotooltip.style.display = "none";
    } else {
        Repstudiotooltip.style.display = "block";
    }
});

document.addEventListener("click", function(){
    Repstudiotooltip.style.display = "none";
});
*/



/*föränkling för att göra det lättare att ha flera punkter. chatgpt föränklade den förra delen av kod och förklarade den så jag fattar "alla komentarer är mina för att jag ska förstå och kommaihåg */
const places = [ /*skapar en array för att hålla de olika värderna i */
    ["matsalen","matsalentooltip" ],
    ["Repstudio", "Repstudiotooltip"]
];

places.forEach(function(place) { /*foreach loop som går igenom varje array och kör funktionen för dem */
    const area = document.querySelector("#" + place[0]);
    const tooltip = document.querySelector("#" + place[1]);

    area.addEventListener("mouseenter", function(){
        tooltip.style.display = "block"; 
    });

    area.addEventListener("mouseleave", function(){
        tooltip.style.display = "none";
    });

    area.addEventListener("click", function(event){ /*gör så att det blir ett event som körs när man clickar */
        event.stopPropagation(); /*gör så att eventet stnannar vid den klickbara delen och inte aceterar något annat */

        if (tooltip.style.display === "block") {
            tooltip.style.display = "none";
        } else {
            tooltip.style.display = "block";
        }
    });

    document.addEventListener("click", function(){ /*när man klickar åt sidan så försviner tooltippen */
        places.forEach(function(place){
            document.querySelector("#" + place[1]).style.display = "none";
        });
    })
});