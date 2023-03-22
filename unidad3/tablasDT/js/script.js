$(document).ready(()=>{
    $("#calificaciones").DataTable({
        //responsive:true,
        responsive: {
            details: {
                //display: $.fn.dataTable.Responsive.display.childRowImmediate
                //display: $.fn.dataTable.Responsive.display.modal()
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                                '<td>'+col.title+':'+'</td> '+
                                '<td>'+col.data+'</td>'+
                            '</tr>' :
                            '';
                    } ).join('');
 
                    return data ?
                        $('<table/>').append( data ) :
                        false;
                }
            }
        },
        columnDefs:[
            {responsivePriority:2, targets:0},
            {responsivePriority:1, targets:[11,2,3,4,5,6,7,8,9,10,1]}
        ]
    });
});