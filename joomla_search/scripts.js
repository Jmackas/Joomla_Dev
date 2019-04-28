console.clear();

extensionInterface();

function extensionInterface() {
    // Fetching search page
    let searchPageCheck = document.getElementById("searchForm");

    // Check if user is on search page
    if (searchPageCheck !== null) {
        // Invoke the relevant functions
        loadAllResults();
        resultsToTables();
        sortResults();
        lazyLoadStyles();

    }

    // Changes the URL to ensure all results are loaded automatically
    function loadAllResults() {
        let oldPageURL = window.location.href;

        // If else to determine if the URL displays all values
        if (oldPageURL.includes("all&limit=0") == false) {
            let newPageURL = window.location.href;

            // Cut out the part of the URL that needs to be changed
            oldPageURL = oldPageURL.slice(-12);

            // Generate the new URL
            newPageURL = newPageURL.replace(oldPageURL, "all&limit=0");

            // Generate the new page URL
            window.location.replace(newPageURL);
        }

    }

    // Push the results to tables
    function resultsToTables() {
        // Invoke the relevant functions
        addTable();
        addTitleContent();
        addUnitOutlineContent();
        addDescriptionContent();
        addRemoveNodes();
        downloadTableResults();

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
                let titleCellTitle = document.querySelector("#generatedTable tr td:nth-of-type(2)");
                titleCellTitle.innerHTML = "<strong>Title</strong>";

                // Add the unit outline text into the top row
                let unitOutlineCellTitle = document.querySelector("#generatedTable tr td:nth-of-type(1)");
                unitOutlineCellTitle.innerHTML = "<strong>Unit Outline</strong>";

                // Add the description to the top row of the table
                let descriptionCellTitle = document.querySelector("#generatedTable tr td:nth-of-type(3)");
                descriptionCellTitle.innerHTML = "<strong>Description</strong>";

            }
        }

        // Add the unit outlines to the table
        function addUnitOutlineContent() {
            // Select all the columns in the generated table
            let searchCol = document.querySelectorAll("#generatedTable td:nth-of-type(1)");

            // Loop through all the columns, get data, and add it to the new columns
            for (let i = 1; i < searchCol.length; i++) {
                let oldSearchResults = document.querySelectorAll(".result-category");
                // Add the old search results to the new table
                searchCol[i].innerHTML = oldSearchResults[i].innerHTML;
            }
        }

        // Add the titles to the table
        function addTitleContent() {
            // Select all the columns in the generated table
            let searchCol = document.querySelectorAll("#generatedTable td:nth-of-type(2)");

            // Loop through all the columns, get data, and add it to the new columns
            for (let i = 1; i < searchCol.length; i++) {
                let oldSearchResults = document.querySelectorAll(".result-title");
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

        // Removal and Creation of various nodes
        function addRemoveNodes() {
            /*

            Removals

            */
            // Remove the previous search results
            document.querySelector("dl.search-results").remove();
            // Remove the form limit
            document.querySelector(".form-limit").remove();
            // Remove the unecessary search functions
            document.querySelector(".only").remove();
            // Remove the unecessary sort button
            document.querySelector(".ordering-box").remove();

            /*

            Creations

            */
            // Select the generated table
            let tableCreate = document.querySelector('.phrases');

            // Insert the button for downloading the button
            tableCreate.insertAdjacentHTML('afterend', '<button id="downloadTable" class="btn">Download Results</button><br><br>');

            // Insert filter to have unique unit outlines
            tableCreate.insertAdjacentHTML('afterend', '<label class="radio"><input type="radio" id="uniqueUO">Unique Unit Outlines Only</label><br>');

            // Insert HR
            tableCreate.insertAdjacentHTML('afterend', '<hr>');

        }

        // Ability to download the table of results
        function downloadTableResults() {

            // Create the CSV attribute
            function download_csv(csv, filename) {
                let csvFile;
                let downloadLink;

                // CSV FILE
                csvFile = new Blob([csv],{
                    type: "text/csv"
                });

                // Download link
                downloadLink = document.createElement("a");

                // File name
                downloadLink.download = filename;

                // We have to create a link to the file
                downloadLink.href = window.URL.createObjectURL(csvFile);

                // Make sure that the link is not displayed
                downloadLink.style.display = "none";

                // Add the link to your DOM
                document.body.appendChild(downloadLink);

                // Lanzamos
                downloadLink.click();
            }

            function export_table_to_csv(html, filename) {
                var csv = [];
                var rows = document.querySelectorAll("table tr");

                for (var i = 0; i < rows.length; i++) {
                    var row = []
                      , cols = rows[i].querySelectorAll("td, th");

                    for (var j = 0; j < cols.length; j++)
                        row.push(cols[j].innerText);

                    csv.push(row.join(","));
                }

                // Download CSV
                download_csv(csv.join("\n"), filename);
            }

            document.querySelector("#downloadTable").addEventListener("click", function() {
                var html = document.querySelector("table").outerHTML;
                export_table_to_csv(html, "table.csv");
            });

        }

    }

    // The function that facilitates the sorting of the table
    function sortResults() {
        // Invoke relevant functions
        deleteDupUO();

        function deleteDupUO() {
            // Select all the columns in the generated table
            let searchCol = document.querySelectorAll("#generatedTable td:nth-of-type(1)");

            // Create array for values
            var searchColArr = [];

            // Loop through all the columns, get data, and add it to the new columns
            for (let i = 1; i < searchCol.length; i++) {
                let oldSearchResults = document.querySelectorAll(".result-category");
                // Add the old search results to the new table

                // Add elements to array
                searchColArr.push(searchCol[i].innerText);

            }

            var sorted_array = searchColArr.slice().sort();

            var arrayColOutcome = [];
            for (var i = 0; i < sorted_array.length - 1; i++) {
                if (sorted_array[i + 1] == sorted_array[i]) {
                    arrayColOutcome.push(sorted_array[i]);
                }
            }

            console.log(arrayColOutcome[0]);

        }

    }

    // Lazy way of loading styles pertinant to this script only
    function lazyLoadStyles() {

        let entireDoc = document.querySelector('body');
        entireDoc.insertAdjacentHTML('beforebegin', '<style>#generatedTable td {border: 1px solid #e5e5e5;padding: 10px;}</style>');
    }
}
