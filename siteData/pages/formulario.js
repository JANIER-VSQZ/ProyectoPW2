export default {
    formCotizacion:
    {
        frmId: "frmCotizacion",
        formAction: "cotizaciones.html",
        secciones: [
            {
                descripcionSeccion: "Informacion general del servicio",
                campos: [
                    {
                        label: "Area del lugar",
                        id: "txtDimensiones",
                        type: "Text",
                        name: "Dimensiones",
                        placeholder: "Area superficial.",
                        title: "El area del lugar donde se realizara el trabajo.",
                        required: true
                    },
                    {
                        label: "Condicion Actual",
                        id: "txtCondicion",
                        type: "Text",
                        name: "Condicion",
                        placeholder: "Condicion actual de la residencia.",
                        title: "condicion en la que se encuentra el lugar de trabajo.",
                        required: true
                    },
                    {
                        label: "Ubicacion Exacta",
                        id: "txtUbicacion",
                        type: "Text",
                        name: "Ubicacion",
                        placeholder: "Ubicacion de la residencia.",
                        title: "Ubicacion exacta del lugar donde se hara el trabajo.",
                        required: true
                    },
                    {
                        label: "Observaciones",
                        id: "txtObservacion",
                        type: "Text",
                        name: "Observacion",
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
                        name: "Nombre",
                        placeholder: "Nombre del solicitante.",
                        title: "Nombre del solicitante.",
                        required: true
                    },
                    {
                        label: "Apellido",
                        id: "txtApellido",
                        type: "Text",
                        name: "Apellido",
                        placeholder: "Apellido del solicitante.",
                        title: "Apellido del solicitante.",
                        required: true
                    },
                    {
                        label: "Correo Electronico",
                        id: "txtCorreo",
                        type: "Email",
                        name: "Correo",
                        placeholder: "Correo Electronico del solicitante.",
                        title: "Correo Electronico del solicitante.",
                        required: true
                    },
                    {
                        label: "Telefono",
                        id: "txtTelefono",
                        type: "Text",
                        name: "Telefono",
                        placeholder: "Numero de telefono del solicitante.",
                        title: "Numero de telefono del solicitante.",
                        required: true
                    },
                ]
            },
            {
                boton: "ENVIAR"
            }
        ]
    },
}