//elemento donde queremos mostrar el dato
const dataDisplay = document.getElementById("data");

//recuperamos el dato de localstorage y lo mostramos
dataDisplay.textContent = localStorage.getItem("textoGuardado"); 