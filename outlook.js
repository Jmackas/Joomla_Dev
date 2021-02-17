setTimeout(browserZoom, 2000);

function browserZoom() {

    // Add button to main menu
    let mainMenu = document.querySelector(".ms-CommandBar-primaryCommand");

    // Zoom in and out buttons
    mainMenu.insertAdjacentHTML('afterend', '<a href="#" id="large" style="font-size: 14pt;font-weight: bold;">Large</a>&nbsp&nbsp<a href="#" id="normal" style="font-size: 14pt;font-weight: bold;">Normal</a>');

    // Listener to zoom in
    document.getElementById("large").addEventListener("click", large);

    // Listener to zoom in
    document.getElementById("normal").addEventListener("click", normal);

    // Declare variables
    let emailReadMode = document.querySelector(".jgenqigMC4s0jMUDuG-YY + div");
    let emailEditMore = document.querySelector('[aria-label="Message body"]');

    function large() {
        // Check if email is in "reading mode"
        if (emailReadMode !== null) {
            emailReadMode.style.zoom = "150%";

        }

        // Check if email is in "editing mode"
        if (emailEditMore !== null) {
            emailEditMore.style.zoom = "150%";
        }

    }

    function normal() {
                // Check if email is in "reading mode"
        if (emailReadMode !== null) {
            emailReadMode.style.zoom = "100%";

        }

        // Check if email is in "editing mode"
        if (emailEditMore !== null) {
            emailEditMore.style.zoom = "100%";
        }
    }

}

// test
