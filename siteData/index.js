import cotizacionData from './pages/cotizacion-servicio';
import formularioData from './pages/formulario'

function context(page){
    console.log("Getting context for: " + page);
    let context = {
        title: "Mi Sitio ABC",
    }
    switch(page){
        case '/cotizaciones.html':
            context = {...context, ...cotizacionData, ...formularioData};
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}

export default context;