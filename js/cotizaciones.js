document.addEventListener('DOMContentLoaded', () => {
    const selected = new Set();
    let hayBtnSeleccionado = false;

    const frmCotizacion = document.getElementById("frmCotizacion");
    const contenedorFrm = document.getElementById("contenedor-formulario");

    const txtUbicacion = document.getElementById("txtUbicacion");
    const txtDimensiones = document.getElementById("txtDimensiones");
    const txtCondicion = document.getElementById("txtCondicion");
    const txtNombre = document.getElementById("txtNombre");
    const txtApellido = document.getElementById("txtApellido");
    const txtCorreo = document.getElementById("txtCorreo");

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
        if (selected.size > 0) {
            hayBtnSeleccionado = true;
        } else {
            hayBtnSeleccionado = false;
        }
        mostrarFormulario();
        seleccionServicio.textContent =
            result ? `Servicios seleccionados: ${result}` : 'Por favor, seleccione un servicio';

    }

    function mostrarFormulario() {
        if (hayBtnSeleccionado) {
            contenedorFrm.style.display = "flex";
        } else {
            contenedorFrm.style.display = "none";
        }
    }

    //validaciones formulario
    const camposObligatorios = [
        {
            campo: txtDimensiones, nombre: "Dimensiones"
        },
        {
            campo: txtCondicion, nombre: "Condicion"
        },
        {
            campo: txtUbicacion, nombre: "Ubicacion"
        },
        {
            campo: txtNombre, nombre: "Nombre"
        },
        
        {
            campo: txtApellido, nombre: "Apellido"
        },
        
        {
            campo: txtCorreo, nombre: "Correo"
        }
    ];

    let hayErrores = false;
    const error = {};

    function quitarErrores() {
        camposObligatorios.forEach(item => item.campo.classList.remove("error"));
    }

    function validarVacios() {
        const regexVacio = /^\s*$/;

        camposObligatorios.forEach(item => {
            if (regexVacio.test(item.campo.value)) {
                error[item.nombre] = `${item.nombre} no puede quedar vacio`;
                console.log(error);
                hayErrores = true;
            }
        })
    }

    function validarDatos() {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexNumero = /^\d+$/;
        const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)?$/;
        if (!("Dimensiones" in error) && !regexNumero.test(txtDimensiones.value)) {
            error["Dimensiones"] = "Solo ingrese numeros";
            hayErrores = true;
        }

        if (!("Nombre" in error) && !regexNombreApellido.test(txtNombre.value)) {
            error["Nombre"] = "Nombre invalido"
            hayErrores = true;
        }

        if (!("Apellido" in error) && !regexNombreApellido.test(txtApellido.value)) {
            error["Apellido"] = "Apellido invalido";
            hayErrores=true;
        }

        if (!("Correo" in error) && !regexEmail.test(txtCorreo.value)) {
            error["Correo"] = "Correo invalido.";
            hayErrores = true;
        }
    }

    function validacionFormulario(e) {
        hayErrores=false;
        Object.keys(error).forEach(key => delete error[key]);
        quitarErrores();

        const errorContainers = document.querySelectorAll('[class^="div"]');
        errorContainers.forEach(container => {
            const existingErrorMessage = container.querySelector(".error");
            if (existingErrorMessage) {
                container.removeChild(existingErrorMessage);
            }
        });

        validarVacios();
        validarDatos();

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