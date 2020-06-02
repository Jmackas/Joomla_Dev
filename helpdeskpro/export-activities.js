
// Check that the page is "Activities Report"
if (document.querySelector("body").classList.contains("view-activities") == true) {

    // Create button to export the table
    document.querySelector("#filter-bar > table > tbody > tr > td:nth-child(5)").insertAdjacentHTML("beforeend", "<button id='downloadTable' class='btn btn-primary'>Export</button>");

    // Invoke the function
    downloadTableResults();

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
            var rows = document.querySelectorAll("table.adminlist tr");

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
