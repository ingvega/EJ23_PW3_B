/*var datos=[];
datos[0]=[];
datos[0]["nombre"]="juan";
datos[0]["apellidos"]="perez";
datos[0]["id"]=1;
datos[1]=[];
datos[1]["nombre"]="alberto";
datos[1]["apellidos"]="medina";
datos[1]["id"]=2;

console.log(datos);*/

var datos2=[];
datos2[0]={id:1,
        nombre:'juan',
        apellidos:'perez',
        oficina:'Uriangato',
        extension: 123,
        email: 'juan@gmail.com'};
datos2[1]={};
datos2[1].id=2;
datos2[1].apellidos='medina';
datos2[1].nombre='alberto';
datos2[1].oficina='Uriangato';
datos2[1].extension= 123;
datos2[1].email= 'juan@gmail.com';
$(document).ready(()=>{
    $("#tblEmpleados").DataTable({
        data:datos2,
        columns:[
            {title:'Nombre', data:'nombre'},
            {title:'Apellidos', data:'apellidos'},
            {title:'Oficina', data:'oficina'},
            {title:'Correo', data:'email'}
        ]
    });
});
