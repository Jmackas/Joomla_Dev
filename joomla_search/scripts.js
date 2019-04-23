extensionInterface();

function extensionInterface() {
    // Fetching function page
    let searchPageCheck = document.getElementById("searchForm");

    // Check if user is on grade page
    if (searchPageCheck !== null) {
        initiateInterface();
    }

    // Get the project in an instance that is safe
    function initiateInterface() {
        console.log("hello");
        //let searchPageCheck = document.querySelectorAll(".body.site.com_search.view-search");
    }
}
