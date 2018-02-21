// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', makeGrid, false);

function makeGrid(event) {

    event.preventDefault();

    let grid = document.getElementById("pixel_canvas");

    // Select color input

    const colorPicker = document.getElementById('colorPicker');

    // Select size input

    let gridHeight = document.getElementById("input_height").value;

    let gridWidth = document.getElementById("input_width").value;


    let table = document.getElementById("pixel_canvas");

    table.innerHTML = '';

    let cell, row;

    for (let i = 0; i < gridHeight; i++) {

        row = table.insertRow(i);

        for (let j = 0; j < gridWidth; j++) {

            cell = row.insertCell(j);

            cell.addEventListener('click', function() {

                this.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener('dblclick', function() {

                this.style.backgroundColor = "";
            });

        }

    }

}