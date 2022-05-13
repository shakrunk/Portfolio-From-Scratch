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