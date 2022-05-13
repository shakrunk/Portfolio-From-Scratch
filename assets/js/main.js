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

// We listen to the resize event
window.addEventListener('resize', () => {
    // Get the viewport height and calc 'vh' unit
    let vh = window.innerHeight * 0.01; 
    // Set vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})