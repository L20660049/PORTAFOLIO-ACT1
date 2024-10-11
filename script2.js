function agregarTarea() {
    const lista = document.getElementById("listaTareas");
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const tareaTexto = nuevaTareaInput.value;

    if (tareaTexto === "") {
        alert("Por favor ingresa una tarea.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = tareaTexto;

    // Botón para eliminar la tarea
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.onclick = function () {
        lista.removeChild(li);
    };

    // Evento para marcar como completada
    li.onclick = function () {
        li.classList.toggle("completada");
    };

    li.appendChild(botonEliminar);
    lista.appendChild(li);
    nuevaTareaInput.value = "";
}
