
function context(page){
    console.log("Getting context for: " + page);
    let context = {
        title: "Mi Sitio ABC",
    }
    switch(page){
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}

export default context;