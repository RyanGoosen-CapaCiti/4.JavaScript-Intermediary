let DefaultbackgroundColor = '#083b66';
let DefaulttextColor = '#aba104';
let backgroundHighlight = 'white';
let CurrentPageBackground = '#aba104';
let CurrectPageText = "azure";

// Get the name of the current page
var path = window.location.pathname;
var page = path.split("/").pop();
var page = page.split(".").shift();


// Runs on load of a webpage
function pagethatsLoaded(){
document.getElementById(page).style.color = CurrectPageText;
document.getElementById(page).style.background = CurrentPageBackground;
}

// Changes the hover state
function sectionHover(id){
    document.getElementById(id).style.background = backgroundHighlight;
}
function changeBack(id){
    document.getElementById(id).style.color = DefaulttextColor;
    document.getElementById(id).style.background = DefaultbackgroundColor;
}