//load se ejecuta cuanto esta cargado el DOM y todos los recursos 
//incluyendo imagenes, estilos, fuentes, scripts...

//DOMContentLoaded se ejecuta cuando ya se identificó el DOM
document.addEventListener("DOMContentLoaded",()=>{
    
    let voltear=[
        { 
            transform:'rotateX(84deg)'
        },
        {
            transform:'rotateX(0deg)'
        }
    ];
    let tiempo=1000;
    let configAnim={
        duration:tiempo,
        fill:'forwards',
        delay:0
    };

    //Obtener todos los divs dentro de letrero
    let letras=document.querySelectorAll(".letrero div");
    letras.forEach((letra,indice)=>{
        console.log(letra);
        console.log(indice);
        configAnim.delay=indice*tiempo;
        letra.animate(voltear,configAnim);
    });  

});