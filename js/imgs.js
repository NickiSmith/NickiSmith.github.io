//script used to update works img

let hoverimg = document.getElementById("hoverimg");
let birding = document.getElementById("birding");
let biking = document.getElementById("biking");
let turkey = document.getElementById("turkey");
let seals = document.getElementById("seals");


//birding link img update
birding.addEventListener("mouseover", () => {
    hoverimg.style.backgroundImage = 'url("css/birdingThumbnail.jpg")';
});
    
birding.addEventListener("mouseleave", () => {
    hoverimg.style.backgroundImage = null;
});

//biking link img update
biking.addEventListener("mouseover", () => {
    hoverimg.style.backgroundImage = 'url("css/bikeThumbnail.jpg")';
});
    
biking.addEventListener("mouseleave", () => {
    hoverimg.style.backgroundImage = null;
});

//turkey link img update
turkey.addEventListener("mouseover", () => {
    hoverimg.style.backgroundImage = 'url("css/turkeyThumbnail.jpg")';
});
    
turkey.addEventListener("mouseleave", () => {
    hoverimg.style.backgroundImage = null;
});

//seals link img update
seals.addEventListener("mouseover", () => {
    hoverimg.style.backgroundImage = 'url("css/sealTrack.jpg")';
});
    
seals.addEventListener("mouseleave", () => {
    hoverimg.style.backgroundImage = null;
});