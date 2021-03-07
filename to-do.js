document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    // Process event...
  }
}, false);

// test
document.head.insertAdjacentHTML("beforeend", `<style>.taskItem-titleWrapper {font-size: 1.5rem;} html .button, html button{font-family: Calibri,Helvetica,sans-serif;}</style>`)



