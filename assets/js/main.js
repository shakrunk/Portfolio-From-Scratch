// ----- ON LOAD ----- //
document.addEventListener("DOMContentLoaded", function() {
    window.dispatchEvent(new Event('resize'));
});

// ----- FUNCTIONS ----- //
// Menu Button Clicked
function openMenu(menu) {
    // Open the Navbar
    var nav = document.getElementById("navbar");
    nav.classList.toggle("open");
    
    // Change Menu Button Text
    if (nav.classList.contains("open")) {
        document.getElementById("menutitle").innerHTML = "Close";
    } else {
        document.getElementById("menutitle").innerHTML = "Menu";
    }
    
    // Trigger Button Animation
    menu.classList.toggle("change");
}

// ----- LISTENERS ----- //
// We listen to the resize event
window.addEventListener('resize', () => {
    // Get the viewport height and calc 'vh' unit
    let vh = window.innerHeight * 0.01;

    // Set vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Get the height of the mobile nav element
    let svgElement = document.getElementById("mobileNavSVG");
    let totalHeight = svgElement.getBoundingClientRect().height;

    // Set the viewbox of the svg to span the width of the screen and have a height of 55px
    document.getElementById("mobileNavSVG").setAttribute('viewBox',`0 0 ${window.innerWidth} ${totalHeight}`);

    // Set mobile nav properties based on viewport
    let curveHeight = totalHeight - 15; // Stop 15 pixels before the bottom
    let buttonWidth = curveHeight; // make the button a square
    let curveWidth = curveHeight; // 40 pixels
    let betweenWidth = window.innerWidth - (2*buttonWidth) - (2*curveWidth); // Remaining pixels between buttons

    // Create SVG path based on viewport
    document.getElementById("mypath").setAttribute("d",`M 0 0 l ${buttonWidth} 0 c ${curveWidth/2} 0 ${curveWidth/2} ${curveHeight} ${curveWidth} ${curveHeight} l ${betweenWidth} 0 c ${curveWidth/2} 0 ${curveWidth/2} -${curveHeight} ${curveWidth} -${curveHeight} l ${buttonWidth} 0 l 0 ${totalHeight} L 0 ${totalHeight} L 0 0`);
})