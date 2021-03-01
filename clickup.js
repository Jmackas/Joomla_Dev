document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    // Process event...
  }
}, false);


document.head.insertAdjacentHTML("beforeend", `<style>.cu-comment__body-container {height: 300px;overflow: auto;}</style>`)


