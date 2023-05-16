function mouse_position(event)
{
    let p_div = document.getElementById('mousePosition');

    p_div.innerHTML = 'Posición del mouse: ' + event.clientX + ' , ' + event.clientY
}

let submitButton = document.getElementById("form1-submit");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y se refresque la página

  let firstName = document.getElementById("form-fname").value;
  let lastName = document.getElementById("form-lname").value;

  let fullNameElement = document.createElement("p");
  fullNameElement.textContent = "Nombre completo: " + firstName + " " + lastName;

  let formElement = document.getElementById("form1");
  formElement.appendChild(fullNameElement);
});

let insertRowButton = document.getElementById("btn-insert-r");
let insertColumnButton = document.getElementById("btn-insert-c");
let sampleTable = document.getElementById("sampleTable");

insertRowButton.addEventListener("click", function() {
  let newRow = sampleTable.insertRow();

  let newCell1 = newRow.insertCell();
  newCell1.textContent = "New row column 1";

  let newCell2 = newRow.insertCell();
  newCell2.textContent = "New row column 2";
});

insertColumnButton.addEventListener("click", function() {
  let rows = sampleTable.rows;

  for (let i = 0; i < rows.length; i++) {
    let newCell = rows[i].insertCell();
    newCell.textContent = "New column";
  }
});

let changeButton = document.getElementById("btn-change");
let table = document.getElementById("myTable");

changeButton.addEventListener("click", function() {
  // Obtener el valor de la posición de la fila ingresada por el usuario
  let rowIndex = parseInt(document.getElementById("rowIndex").value) - 1;
  
  // Obtener el valor de la posición de la columna ingresada por el usuario
  let colIndex = parseInt(document.getElementById("colIndex").value) - 1;
  
  // Obtener el nuevo valor ingresado por el usuario
  let newValue = document.getElementById("newValue").value;

  // Acceder a las filas de la tabla
  let rows = table.rows;

  // Verificar si el índice de fila está dentro del rango válido
  if (rowIndex >= 0 && rowIndex < rows.length) {
    // Obtener las celdas de la fila en la posición especificada
    let cells = rows[rowIndex].cells;

    // Verificar si el índice de columna está dentro del rango válido
    if (colIndex >= 0 && colIndex < cells.length) {
      // Actualizar el contenido de la celda en la posición especificada
      cells[colIndex].textContent = newValue;
    }
  }
});

let colorSelect = document.getElementById("colorSelect");
let addColorButton = document.getElementById("btn-add-color");
let removeColorButton = document.getElementById("btn-rmv-color");

addColorButton.addEventListener("click", function() {
  let colorInput = prompt("Enter a color:");
  
  // Verificar si se ingresó un color
  if (colorInput) {
    let option = document.createElement("option");
    option.textContent = colorInput;
    
    // Generar un color aleatorio para el fondo del nuevo elemento de la lista
    let randomColor = getRandomColor();
    option.style.backgroundColor = randomColor;
    
    colorSelect.appendChild(option);
  }
});

removeColorButton.addEventListener("click", function() {
  let selectedIndex = colorSelect.selectedIndex;
  
  // Verificar si se ha seleccionado un elemento de la lista
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

var imagenGato = document.getElementById("imagenGato");

imagenGato.addEventListener("mouseenter", function() {
  // Generar números aleatorios entre 300 y 600 para el width y height
  let width = getRandomNumber(300, 600);
  let height = getRandomNumber(300, 600);

  // Crear la URL de la nueva imagen con el tamaño aleatorio
  let imageUrl = "http://placekitten.com/" + width + "/" + height;

  // Crear un nuevo elemento de imagen
  let newImage = document.createElement("img");
  newImage.src = imageUrl;

  // Reemplazar la imagen de placeholder por la nueva imagen
  imagenGato.parentNode.replaceChild(newImage, imagenGato);
});

// Función para generar un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function insertRow()
{
    let sample_table = document.getElementById('sampleTable');

    const rows = sample_table.rows.length;
    const cols = sample_table.rows[0].cells.length;

    // Crear una fila
    let row = document.createElement('tr');

    // Crear columnas
    for(let i = 0; i < cols; i++)
    {
        let col = document.createElement('td');
        col.innerText = 'Row ' + (rows+1) + ' column ' + (i+1);
        row.appendChild(col);
    }

    sample_table.appendChild(row);

}

function main()
{
    console.log('ya cargue')
}


main()
document.addEventListener("mousemove", mouse_position) // Se llama al evento