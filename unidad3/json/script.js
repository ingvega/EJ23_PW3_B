
window.onload=()=>{
    //Cargar los productos que existan
    let productos=cargarJson();
    console.log(productos);
    
    //Llenar la tabla con los productos
    //$(tabla).DataTable({data:productos,
    //    columns:[]});
}

function agregar(){
    
    let productos=cargarJson();
    let nuevo={};
    nuevo.nombre=document.getElementById("txtNombre").value;
    nuevo.precio=document.getElementById("txtPrecio").value;
    productos.push(nuevo);
    /*
    productos.push({nombre:document.getElementById("txtNombre").value,
    precio:document.getElementById("txtPrecio").value});
*/
    localStorage.setItem("productos",JSON.stringify(productos));
    console.log(productos);
}

function cargarJson(){
    var lista=localStorage.getItem("productos");
    if(lista==null){
        return [];
    }else{
        return JSON.parse(lista);
        //"[{nombre:'agua',precio:12},{nombre:'agua',precio:12}]"
    }
}