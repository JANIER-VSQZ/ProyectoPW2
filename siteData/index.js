import cotizacionData from './pages/cotizacion-servicio';
import formularioData from './pages/formulario'
import testimoniosMainData from './pages/testimoniosMain';
import heroData from './pages/heroImagenes';
import serviciosData from './pages/servicios';
import galeriaData from './pages/galeria';

function context(page){
    console.log("Getting context for: " + page);
    let context = {
        title: "Mi Sitio ABC",
    }
    switch(page){
        case "/index.html":
            context = {...context, ...heroData, ...testimoniosMainData};
            break;
        case '/cotizaciones.html':
            context = {...context, ...cotizacionData, ...formularioData};
            break;
        case '/servicios.html':
            context = {...context, ...serviciosData};
            break;
        case '/galeria.html':
            context = {...context, ...galeriaData};
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}

export default context;