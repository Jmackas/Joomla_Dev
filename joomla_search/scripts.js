extensionInterface();

function extensionInterface() {
    // Fetching search page
    let searchPageCheck = document.getElementById("searchForm");

    // Check if user is on search page
    if (searchPageCheck !== null) {
        // Invoke the relevant functions
        initiateInterface();
        resultsToTables();
    }

    // Get the project in an instance that is safe
    function initiateInterface() {
        // Remove the unecessary search functions
        let searchPageCheck = document.querySelector(".only").remove();

    }

    // Push the results to tables
    function resultsToTables() {
        // Invoke the relevant functions
        addTable();

        // Add initial table
        function addTable() {
            var tableCreate = document.querySelector('.search-results');
            tableCreate.insertAdjacentHTML('afterbegin', '<div id="two">two</div>');
        }
    }
}
