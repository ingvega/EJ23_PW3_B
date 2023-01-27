var lugares=32;
var filas= Math.ceil(lugares/5);

var fila;
var cont=1;
//Armar todas las filas
for (let index = 0; index < filas; index++) {
    fila=document.createElement("div");
    fila.className='fila';
    let espacio;
    //arma cada fila
    for (let e = 1; e <= 5; e++) {
        espacio=document.createElement("div");
        espacio.className='espacio';
        espacio.addEventListener("click",function(e){
           debugger;
            if(e.target.style.backgroundColor=="gray"){
                e.target.style.backgroundColor="white";
            }else{
                e.target.style.backgroundColor="gray";
            }
        });
        espacio.innerText='E'+cont;
        cont++;
        fila.append(espacio);        
    }
    document.getElementById("laboratorio").append(fila);
} 
