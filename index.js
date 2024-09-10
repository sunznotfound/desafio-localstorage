
  //capturar los valores que ingresa el usuario
    const inputText = document.getElementById("inputText"); //selecciona el campo de texto
    const buttonText = document.getElementById("buttonText"); //selecciona el botón

    buttonText.addEventListener("click", function() {
        const textValue = inputText.value; //captura el valor del campo de texto
        localStorage.setItem("textoGuardado", textValue); //guardar el local storage
    }); 