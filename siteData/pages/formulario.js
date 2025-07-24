export default {
    formCotizacion:
    {
        formAction: "cotizaciones.html",
        secciones: [
            {
                descripcionSeccion: "Informacion general del servicio",
                campos: [
                    {
                        label: "Dimensiones de la residencia",
                        id: "txtDimensiones",
                        type: "Text",
                        name: "txtDimensiones",
                        placeholder: "Dimensiones en m^2.",
                        title: "Las medidas del lugar donde se realizara el trabajo.",
                        required: true
                    },
                    {
                        label: "Condicion Actual",
                        id: "txtCondicion",
                        type: "Text",
                        name: "txtCondicion",
                        placeholder: "Condicion actual de la residencia.",
                        title: "condicion en la que se encuentra el lugar de trabajo.",
                        required: true
                    },
                    {
                        label: "Ubicacion Exacta",
                        id: "txtUbicacion",
                        type: "Text",
                        name: "txtUbicacion",
                        placeholder: "Ubicacion de la residencia.",
                        title: "Ubicacion exacta del lugar donde se hara el trabajo.",
                        required: true
                    },
                    {
                        label: "Observaciones",
                        id: "txtObservacion",
                        type: "Text",
                        name: "txtObservacion",
                        placeholder: "Detalles importantes.",
                        title: "Detalles importantes que le gustaria añadir.",
                        required: true
                    },
                ]
            },
            {
                descripcionSeccion: "Informacion personal",
                campos: [
                    {
                        label: "Nombre",
                        id: "txtNombre",
                        type: "Text",
                        name: "txtNombre",
                        placeholder: "Nombre del solicitante.",
                        title: "Nombre del solicitante.",
                        required: true
                    },
                    {
                        label: "Apellido",
                        id: "txtApellido",
                        type: "Text",
                        name: "txtApellido",
                        placeholder: "Apellido del solicitante.",
                        title: "Apellido del solicitante.",
                        required: true
                    },
                    {
                        label: "Correo Electronico",
                        id: "txtCorreo",
                        type: "Email",
                        name: "txtCorreo",
                        placeholder: "Correo Electronico del solicitante.",
                        title: "Correo Electronico del solicitante.",
                        required: true
                    },
                ]
            },
            {
                boton: "enviar"
            }
        ]
    },
}