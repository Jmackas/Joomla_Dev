document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    // Process event...
  }
}, false);


document.head.insertAdjacentHTML("beforeend", `<style>.cu-comment__body-container {height: 200px;overflow: auto;}</style>`)
/*
setTimeout(commentHeight, 3000);

function commentHeight() {
  let comment = document.querySelectorAll(".cu-comment__body-container");

for (let i = 0; i < comment.length; i++) {
    // Determine the height of all comments
    let commentHeight = comment[i].offsetHeight;

    let commentToIntHeight = parseInt(commentHeight);

    if (commentToIntHeight > 400) {
        console.log("greater than 400");
        comment[i].style.height = "300px";
        comment[i].style.overflow = "auto";
    }

}

} 

*/

