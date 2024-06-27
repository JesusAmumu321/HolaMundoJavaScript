let tareas = [];

function agregarTarea() {
  const textoTarea = document.getElementById("textArea").value.trim();
  if (textoTarea === "") {
    alert("No se puede agregar una tarea vacía.");
    return;
  }

  tareas.push({ texto: textoTarea, completada: false });
  document.getElementById("textArea").value = "";
  actualizarListaTareas();
}

function toggleCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  actualizarListaTareas();
} // recibe el index del array de las tares y cambia el valor, al valor contrario "!tareas"

function eliminarTarea(index) {
  tareas.splice(index, 1);
  actualizarListaTareas();
} // con splice se elimina 1 elemento del array en la posicion index

function actualizarListaTareas() {
  const lista = document.getElementById("todoLista");
  const placeholder = document.getElementById("placeholder");
  const iconoNoConst = document.getElementById("iconoNO").outerHTML;
  const iconoSiConst = document.getElementById("iconoSi").outerHTML;

  if (tareas.length === 0) {
    placeholder.style.display = "block";
  } else {
    placeholder.style.display = "none";
  } // esto hace que el mensaje de "No hay tareas" se muestre o no, gracias copiloto por el coment

  lista.innerHTML = tareas
    .map((tarea, index) => {
      return `
                <li class="${tarea.completada ? "completada" : ""}">
                    <button onclick="toggleCompletada(${index})" class="toggle-btn">
                        ${tarea.completada ? iconoSiConst : iconoNoConst}
                    </button>
                    <span>${tarea.texto}</span>
                    <button onclick="eliminarTarea(${index})" class="btnBorrar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </li> 
            `;
    })
    .join("");
}
