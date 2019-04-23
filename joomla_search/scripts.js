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
        // Remove the unecessary search functions
        let searchPageCheck = document.querySelector(".only").remove();

    }
}
