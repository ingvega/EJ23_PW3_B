$(document).ready(function () {
    $('#listaEmpleados').DataTable();
    console.log($('button'));
    //$('button').attr("disabled","true");
    $('button').css("color","blue");
    $("#btnAceptar").click((e)=>{
        let valores='';
        valores='Nombre: ' + $("#txtNombre").val()
        +'    Apellidos: ' + $("#txtApellidos").val()
        +'    Email: ' + $("#txtEmail").val();

        valores='Nombre: ' + $("#txtNombre")[0].value
        +'    Apellidos: ' + $("#txtApellidos")[0].value
        +'    Email: ' + $("#txtEmail")[0].value;
        alert(valores);
    });
    //console.log(document.querySelectorAll('button'));
});