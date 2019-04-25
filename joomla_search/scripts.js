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
        addTitleContent();
        addUnitOutlineContent();
        addDescriptionContent();
        lazyLoadStyles()

        // Add initial table
        function addTable() {
            // Determine the amount of columns
            let amountOfRows = document.querySelector('.badge-info').innerHTML;
            amountOfRows = parseInt(amountOfRows);

            let tableCreate = document.querySelector('.search-results');

            // Create the bottom of the table
            tableCreate.insertAdjacentHTML('beforebegin', '<table id="generatedTable"><tbody><tr><td id="titleRes"></td><td id="unitOutlineRes"></td><td id="textRes"></td></tr></tbody></table>')

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

                // Add the title text into the top row
                let titleCellTitle = document.querySelector("#generatedTable tr td:nth-of-type(1)");
                titleCellTitle.innerHTML = "<strong>Title</strong>";

                // Add the unit outline text into the top row
                let unitOutlineCellTitle = document.querySelector("#generatedTable tr td:nth-of-type(2)");
                unitOutlineCellTitle.innerHTML = "<strong>Unit Outline</strong>";

                // Add the description to the top row of the table
                let descriptionCellTitle = document.querySelector("#generatedTable tr td:nth-of-type(3)");
                descriptionCellTitle.innerHTML = "<strong>Description</strong>";
            }
        }

        // Add the titles to the table
        function addTitleContent() {
            // Select all the columns in the generated table
            let searchCol = document.querySelectorAll("#generatedTable td:nth-of-type(1)");

            // Loop through all the columns, get data, and add it to the new columns
            for (let i = 1; i < searchCol.length; i++) {
                let oldSearchResults = document.querySelectorAll(".result-title");
                // Add the old search results to the new table
                searchCol[i].innerHTML = oldSearchResults[i].innerHTML;

            }
        }

        // Add the unit outlines to the table
        function addUnitOutlineContent() {
            // Select all the columns in the generated table
            let searchCol = document.querySelectorAll("#generatedTable td:nth-of-type(2)");

            // Loop through all the columns, get data, and add it to the new columns
            for (let i = 1; i < searchCol.length; i++) {
                let oldSearchResults = document.querySelectorAll(".result-category");
                // Add the old search results to the new table
                searchCol[i].innerHTML = oldSearchResults[i].innerHTML;
            }
        }

        // Add the unit outlines to the table
        function addDescriptionContent() {
            // Select all the columns in the generated table
            let searchCol = document.querySelectorAll("#generatedTable td:nth-of-type(3)");

            // Loop through all the columns, get data, and add it to the new columns
            for (let i = 1; i < searchCol.length; i++) {
                let oldSearchResults = document.querySelectorAll(".result-text");
                // Add the old search results to the new table
                searchCol[i].innerHTML = oldSearchResults[i].innerHTML;
            }
        }

        // Lazy way of loading styles pertinant to this script only
        function lazyLoadStyles() {

            let entireDoc = document.querySelector('body');
            entireDoc.insertAdjacentHTML('beforebegin', '<style>#generatedTable td {border: 1px solid #e5e5e5;padding: 10px;}</style>');
        }

    }
}
