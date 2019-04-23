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
            // Create the table
            tableCreate.insertAdjacentHTML('afterbegin', '<table id="generatedTable"><tbody><tr><td id="titleRes"></td><td id="unitOutlineRes"></td><td id="textRes"></td></tr></tbody></table>');
            
            // Determine the amount of columns
            var amountOfColumns = document.querySelector('.badge-info').innerHTML;
            amountOfColumns = parseInt(amountOfColumns);
            
            
            
        }
        
        // Add the titles to the table
        function addTitle() {
            let searchFirstCol = document.querySelectorAll("#generatedTable #titleRes");
            

        }
    }
}
