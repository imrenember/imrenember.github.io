function calcularVolumenGasolina(event) {
    // Obtener la altura ingresada por el usuario y convertirla a metros
    const alturaCm = document.getElementById('altura').value;
    const alturaM = alturaCm / 100;

    // Definir las constantes
    const radio = 1; // Radio en metros
    const longitud = 2.73; // Longitud del cilindro en metros

    // Calcular el área del segmento circular
    const A = Math.pow(radio, 2) * Math.acos((radio - alturaM) / radio) - (radio - alturaM) * Math.sqrt(2 * radio * alturaM - Math.pow(alturaM, 2));

    // Calcular el volumen en metros cúbicos
    const volumenMetrosCubicos = A * longitud;

    // Convertir a galones
    const volumenGalones = volumenMetrosCubicos * 264.172;

    // Mostrar el resultado
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El volumen del líquido en el cilindro es: ${volumenGalones.toFixed(2)} galones ,  ${volumenMetrosCubicos.toFixed(2)} metros cúbicos`;


    

    // Evitar que el formulario se envíe y recargue la página
    event.preventDefault();
    };

    function calcularVolumenDiesel(event) {
        // Obtener la altura ingresada por el usuario y convertirla a metros
        const alturaCm = document.getElementById('altura').value;
        const alturaM = alturaCm / 100;
    
        // Definir las constantes
        const radio = 1; // Radio en metros
        const longitud = 1.425; // Longitud del cilindro en metros
    
        // Calcular el área del segmento circular
        const A = Math.pow(radio, 2) * Math.acos((radio - alturaM) / radio) - (radio - alturaM) * Math.sqrt(2 * radio * alturaM - Math.pow(alturaM, 2));
    
        // Calcular el volumen en metros cúbicos
        const volumenMetrosCubicos = A * longitud;
    
        // Convertir a galones
        const volumenGalones = volumenMetrosCubicos * 264.172;
    
        // Mostrar el resultado
        // Mostrar el resultado
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `El volumen del líquido en el cilindro es: ${volumenGalones.toFixed(2)} galones ,  ${volumenMetrosCubicos.toFixed(2)} metros cúbicos`;
    
    
        
    
        // Evitar que el formulario se envíe y recargue la página
        event.preventDefault();
        };