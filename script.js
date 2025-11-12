function insert_Row() {
    // Get the table element
    const table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table
    const newrow = table.insertRow(0);

    // Insert the first cell at index 0
    const cell1 = newrow.insertCell(0);
    // Insert the second cell at index 1
    const cell2 = newrow.insertCell(1);

    // Set the inner HTML for both cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}