
var tareas = [];
obtenertareas();




//------------------------------Variables--------------------------------//


let lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");


//-------------------------------Eventos--------------------------------//


btnNuevaTarea.addEventListener("click", () => validarTarea());


//------------------------------Funciones--------------------------------//



let agregarTarea = function () {
    tareas.push(tareaInput.value);
    console.log(tareaInput.value);

    tareaInput.value = "";

    displaytarea();

}


//------------------------------Funciones y Eliminar Tareas--------------------------------//


function displaytarea() {

    const contenedortareas = document.querySelector('.lista');
    contenedortareas.innerHTML = '<ul>';

    tareas.forEach((tareas, id) => {
        contenedortareas.innerHTML = contenedortareas.innerHTML + '<li> <br>' + tareas + '</li>' + ' ' + `<button class="btnclase" onclick="deleteTask(${id})"> Borra Tarea </button>`;

    });

    contenedortareas.innerHTML = contenedortareas.innerHTML + '</ul>';

    saveInLocalStorage();

}


function validarTarea() {
    if (tareaInput.value == "") {
        alert('¡Debes agregar una tarea válida!')
    } else {
        agregarTarea(tareaInput.value)
    }
}


function deleteTask(id) {
    console.log(id);
    tareas.splice(id, 1);
    displaytarea();

}


//------------------------------LocalStorage y demás--------------------------------//


function obtenertareas() {
    let almacenadotareas = window.localStorage.getItem('tareas');

    if (almacenadotareas !== null) {
        almacenadotareas = JSON.parse(almacenadotareas);
        tareas = almacenadotareas;
        displaytarea();

    }
}


function saveInLocalStorage() {

    window.localStorage.setItem('tareas', JSON.stringify(tareas));

}









