const canvas = document.getElementById("pixelCanvas");

function setDimensions() {
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(height,width);
    return false;
}

function makeGrid(height,width) {
    for (i = 0; i < height; i++) {
      let newRow = document.createElement('tr');
      canvas.appendChild(newRow);
    for (j = 0; j < width; j++) {
      let newCell = document.createElement('td');
      newRow.appendChild(newCell).setAttribute("class","cells");
        }
    }
}





