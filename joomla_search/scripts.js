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
        addTitle()

        // Add initial table
        function addTable() {
            // Determine the amount of columns
            let amountOfRows = document.querySelector('.badge-info').innerHTML;
            amountOfRows = parseInt(amountOfRows);

            let tableCreate = document.querySelector('.search-results');

            // Create the bottom of the table
            tableCreate.insertAdjacentHTML('beforebegin', '<table id="generatedTable"><tbody><tr><td id="titleRes">Title</td><td id="unitOutlineRes">Unit Outline</td><td id="textRes">Description</td></tr></tbody></table>')

            tableRowGenerator();

            function tableRowGenerator() {
                // Identify table
                let table = document.getElementById("generatedTable");

                //Generate rows, and assign ID's
                for (let i = 1; i < amountOfRows; i++) {
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                   // cell1.setAttribute('id', 'titleRes');
                   // cell2.setAttribute('id', 'unitOutlineRes');
                    //cell3.setAttribute('id', 'textRes');
                }
            }
        }

        // Add the titles to the table
        function addTitle() {
            let searchFirstCol = document.querySelectorAll("#generatedTable td:nth-of-type(1)");
            
    

        }
    }
}
