setTimeout(browserZoom, 3000);

function browserZoom() {
  // Add button to main menu
  let mainMenu = document.querySelector(".ms-CommandBar-primaryCommand");

  // Zoom in and out buttons
  mainMenu.insertAdjacentHTML(
    "afterend",
    '<a href="#" id="larger" style="font-size: 14pt;font-weight: bold;">Larger</a>&nbsp&nbsp<a href="#" id="large" style="font-size: 14pt;font-weight: bold;">Large</a>&nbsp&nbsp<a href="#" id="normal" style="font-size: 14pt;font-weight: bold;">Normal</a>'
  );
  
    // Listener to zoom in
  document.getElementById("larger").addEventListener("click", larger);

  // Listener to zoom in
  document.getElementById("large").addEventListener("click", large);

  // Listener to zoom in
  document.getElementById("normal").addEventListener("click", normal);

  // Declare variables
  let emailReadMode = document.querySelector(".jgenqigMC4s0jMUDuG-YY + div");
  let emailEditMore = document.querySelector('[aria-label="Message body"]');

  function larger() {
    // Check if email is in "reading mode"
    if (emailReadMode !== null) {
      emailReadMode.style.zoom = "200%";
    }

    // Check if email is in "editing mode"
    if (emailEditMore !== null) {
      emailEditMore.style.zoom = "200%";
    }
  }

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
