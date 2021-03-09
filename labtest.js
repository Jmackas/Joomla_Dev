setTimeout(labInjection, 1000);

function labInjection() {

  console.log("This Works!");
    // Identifier on screen
    let labSelector = document.querySelector("#insertlab");

    // Insert lab Iframe and a button to expand and minimise
    labSelector.insertAdjacentHTML('afterend', '<div id="expandFrame" class="menuBar">Expand</div><div id="minimiseFrame" class="menuBar">Minimise</div><iframe src="https://lab.electromeet.com/LabList" class="lab_interface"></iframe>');

    // Insert generic styles
    document.head.insertAdjacentHTML("beforeend", `<style>iframe.lab_interface{width: 100%;height: 700px;}div#minimiseFrame {display: none;}</style>`)

    document.getElementById("expandFrame").addEventListener("click", expandLabs);

    function expandLabs() {
        document.head.insertAdjacentHTML("beforeend", `<style>iframe.lab_interface{width:100%;height:100%;position:fixed;left:0;top:30px;bottom:0;border:none;z-index:99999;right:0}div.menuBar{z-index:99999;color:#fff;position:fixed;left:0;height:30px;top:0;width:100%;display:flex;justify-content:center;background:rgb(43 62 80);align-items:center}div.menuBar:hover{background:rgb(52 94 134)}div#expandFrame{display:none}div#minimiseFrame{display:flex}</style>`)
        // Insert lab Iframe and a button to expand and minimise
        //  labSelector.insertAdjacentHTML('afterend', '<iframe src="https://lab.electromeet.com/LabList" class="lab_interface"></iframe>');

    }

    document.getElementById("minimiseFrame").addEventListener("click", minimiseLabs);

    function minimiseLabs() {
        document.head.insertAdjacentHTML("beforeend", `<style>iframe.lab_interface{width:100%;height:700px;position:initial;left:initial;top:initial;bottom:initial;border:initial;z-index:initial;right:initial}div.menuBar{z-index:initial;color:initial;position:initial;left:initial;height:initial;top:initial;width:initial;display:initial;justify-content:initial;background:initial;align-items:initial}div.menuBar:hover{background:initial}div#expandFrame{display:initial}div#minimiseFrame{display:none}</style>`)

    }

}
