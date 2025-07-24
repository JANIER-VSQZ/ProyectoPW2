document.addEventListener('DOMContentLoaded', () => {
    const selected = new Set();
    let hayBtnSeleccionado=false;

    const frmCotizacion = document.getElementById("frmCotizacion");
    const txtUbicacion = document.getElementById("txtUbicacion");
    const contenedorFrm= document.getElementById("contenedor-formulario");
    mostrarFormulario();

    document.querySelectorAll('.servicio').forEach(btn => {
        btn.addEventListener('click', () => {
            const label = btn.dataset.label;
            btn.classList.toggle('activo');
            
            if (selected.has(label)) {
                selected.delete(label);
            } else {
                selected.add(label);
            }
            mostrarSeleccion();
        });
    });

    function mostrarSeleccion() {
        let seleccionServicio = document.getElementById('resultado-seleccion')
        const result = [...selected].join(', ');
        if(selected.size>0){
            hayBtnSeleccionado=true;
        }else{
            hayBtnSeleccionado=false;
        }
        mostrarFormulario();
        seleccionServicio.textContent =
            result ? `Servicios seleccionados: ${result}` : 'Por favor, seleccione un servicio';
        
    }

    function mostrarFormulario(){
        if(hayBtnSeleccionado){
            contenedorFrm.style.display="flex";
        }else{
            contenedorFrm.style.display="none";
        }
    }

    //validaciones formulario

    function quitarErrores(){
        txtUbicacion.classList.remove("error");
    }

    function validacionFormulario(e) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexNumero = /^\d{16}$/;
        const regexCSV = /^\d{3}$/;
        const regexNombreTitular = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
        const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+ [A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

        const regexVacio = /^\s*$/;

        let hayErrores = false;
        const error = {};

        quitarErrores();

        const errorContainers = document.querySelectorAll('[class^="div"]');
        errorContainers.forEach(container => {
            const existingErrorMessage = container.querySelector(".error");
            if (existingErrorMessage) {
                container.removeChild(existingErrorMessage);
            }
        });

        if(regexVacio.test(txtUbicacion.value)){
            error["Ubicacion"]="La ubicacion no puede quedar vacia.";
            hayErrores=true;
        }

        if (hayErrores) {
            const errorKeys = Object.keys(error);
            let focusAssigned = false;
            for (let errorKey of errorKeys) {
                const errorDivHolder = document.getElementById(`div${errorKey}`);
                console.log(errorDivHolder);
                if (errorDivHolder) {
                    let errorDivMessage = document.getElementById(`${errorKey}Error`);
                    if (errorDivMessage) {
                        errorDivMessage.textContent = error[errorKey];
                    } else {
                        errorDivMessage = document.createElement("DIV");
                        errorDivMessage.textContent = error[errorKey];
                        errorDivMessage.classList.add('error');
                        errorDivHolder.appendChild(errorDivMessage);
                    }
                    let inputObject = errorDivHolder.querySelector('input');
                    inputObject.classList.add('error');
                    if (!focusAssigned) {
                        inputObject.focus();
                        focusAssigned = true;
                    }
                    console.log(errorDivMessage);
                }

            }

            e.preventDefault();
            e.stopPropagation();
        }

    }

    frmCotizacion.addEventListener('submit', validacionFormulario);
});