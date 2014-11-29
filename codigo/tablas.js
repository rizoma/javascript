window.TableCreator = {};

TableCreator.helpers = {};
TableCreator.helpers.extractHeaders = function(data){
  //asume que todos los objetos tienen las mismas propiedades
  return Object.keys(data[0]);
}
TableCreator.helpers.extractRows = function(data){
  return data.map(function(rowData){
    var asArray = Object.keys(rowData).map(function(key){
      return rowData[key];
    });
    return {row: asArray};
  })
}

TableCreator.init = function(form, table){
  this.form = form;
  this.table = table;
  form.on('submit', this.populateTable);
}

TableCreator.populateTable = function(event){
  event.preventDefault();
  var data = JSON.parse(TableCreator.form.find("#data").val()); 
  var headers = TableCreator.helpers.extractHeaders(data);
  //eliminar cualquier tabla anterior
  TableCreator.table.empty();
  //agregar los encabezados:
  TableCreator.table.append(
    ich.headers({headers: headers})
  );
  //agregar los datos
  TableCreator.table.append(
    ich.body({data: TableCreator.helpers.extractRows(data)})
  );
  //preparar los filtros
  TableCreator.prepareFilters(data);
}

TableCreator.prepareFilters = function(data){
  var headers = TableCreator.helpers.extractHeaders(data);

  $("#data-filter").html(ich.filter({options: headers}));

  $("#data-reset").click(function(event){
    event.preventDefault();
    $("tr").show();
  })

  $("#data-search").submit(function(event){
    event.preventDefault();
    var query = $("#data-query").val();
    var field = $("#data-filter").val();
    var columnNumber = headers.indexOf(field)+1;
    console.log(query, field, columnNumber)
    TableCreator.table.find(
      "td:nth-child("+columnNumber+")"
    ).not(
      ":contains("+query+")"
    ).parent().hide();
  })
}

