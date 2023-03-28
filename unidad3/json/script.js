
window.onload=()=>{
    //Cargar los productos que existan
    let productos=cargarJson();
    //Llenar la tabla con los productos
    $(tabla).DataTable({data:productos,
        columns:[]});
}

function agregar(){
    let productos=cargarJson();
    productos.push({nombre:'txt',precio:'txt'});
    LocalStorage.setItem("productos",JSON.stringify(productos));
}

function cargarJson(){
    var lista=LocalStorage.getItem("productos");
    if(lista==null){
        return [];
    }else{
        return JSON.parse(lista);
        //"[{nombre:'agua',precio:12},{nombre:'agua',precio:12}]"
    }
}