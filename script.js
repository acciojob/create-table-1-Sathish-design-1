function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");

	const newrow = table.insertRow(0);

	const cell1 = newrow.insertCell(0);
	const cell2 = newrow.insertCell(2);

	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
  
}
