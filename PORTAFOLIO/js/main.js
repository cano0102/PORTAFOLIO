const imagesConJS = async () => {
    
    const respuesta = await fetch('./js/imagenes.json');
    const datos = await respuesta.json();
    console.log(datos.imagenes);
        

    mostrarProyectos(datos.imagenes);
   
};

function mostrarProyectos(imagenes) {
    const sesion = document.querySelector(".sesion-proyectos"); 

    const contenedorproyectos = document.createElement("div");
    contenedorproyectos.className = 'contenedor-proyectos';
    sesion.appendChild(contenedorproyectos)

    imagenes.forEach((proyecto) => {

        
        const proyecto1 = document.createElement("div");
        proyecto1.className = 'proyecto-1';
        contenedorproyectos.appendChild(proyecto1)

        const imagenproyecto1 = document.createElement("div");
        imagenproyecto1.className = 'imagen-proyecto1';
        proyecto1.appendChild(imagenproyecto1)
        
        const contenidoproyecto = document.createElement("div");
        contenidoproyecto.className = "contenido-proyecto";
        proyecto1.appendChild(contenidoproyecto)

        contenidoproyecto.innerHTML = `
            <div class="titulo-proyecto"><h2>${proyecto.titulo}</h2></div>
            <div class="parrafo-proyecto"><p>${proyecto.descripcion}</p></div>
            <div class="tecnologias-proyecto"><p>Tecnologías: ${proyecto.tecnologias}</p></div>
        `;

    });
}

imagesConJS();

