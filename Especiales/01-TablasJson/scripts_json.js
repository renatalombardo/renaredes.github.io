var textoJSONPedidos = '{' +
  '"UnidadesMedida":[' +
    '{"codUM":"UM01","Descripcion":"Bolsa 1 kg"},' +
    '{"codUM":"UM02","Descripcion":"Bolsa 10 kg"},' +
    '{"codUM":"UM03","Descripcion":"Caja 1 lt"},' +
    '{"codUM":"UM04","Descripcion":"Botella 2 lt"},' +
    '{"codUM":"UM05","Descripcion":"Pack 6 unidades"}' +
  '],' +

  '"RenglonesPedido":[' +
    '{"NroDePedido":"001","Cod_articulo":"A100","Descripcion":"Arroz Premium","UnidadMedida":"UM01","Cantidad":12,"PrecioUnitario":750.50,"Pdf_comprobante":"arroz001.pdf"},' +
    '{"NroDePedido":"002","Cod_articulo":"A101","Descripcion":"Fideos Spaghetti","UnidadMedida":"UM01","Cantidad":20,"PrecioUnitario":680.00,"Pdf_comprobante":"fideos002.pdf"},' +
    '{"NroDePedido":"003","Cod_articulo":"A102","Descripcion":"Harina 000","UnidadMedida":"UM01","Cantidad":25,"PrecioUnitario":430.75,"Pdf_comprobante":"harina003.pdf"},' +
    '{"NroDePedido":"004","Cod_articulo":"A103","Descripcion":"Azúcar Blanca","UnidadMedida":"UM01","Cantidad":30,"PrecioUnitario":520.10,"Pdf_comprobante":"azucar004.pdf"},' +
    '{"NroDePedido":"005","Cod_articulo":"A104","Descripcion":"Sal Fina","UnidadMedida":"UM01","Cantidad":19,"PrecioUnitario":410.00,"Pdf_comprobante":"sal005.pdf"},' +
    '{"NroDePedido":"006","Cod_articulo":"A105","Descripcion":"Arroz a Granel","UnidadMedida":"UM02","Cantidad":5,"PrecioUnitario":7200.00,"Pdf_comprobante":"arroz006.pdf"},' +
    '{"NroDePedido":"007","Cod_articulo":"A106","Descripcion":"Harina Integral a Granel","UnidadMedida":"UM02","Cantidad":7,"PrecioUnitario":6800.00,"Pdf_comprobante":"harina007.pdf"},' +
    '{"NroDePedido":"008","Cod_articulo":"A107","Descripcion":"Azúcar Mascabo","UnidadMedida":"UM02","Cantidad":3,"PrecioUnitario":8450.00,"Pdf_comprobante":"azucar008.pdf"},' +
    '{"NroDePedido":"009","Cod_articulo":"A108","Descripcion":"Leche Entera","UnidadMedida":"UM03","Cantidad":18,"PrecioUnitario":920.00,"Pdf_comprobante":"leche009.pdf"},' +
    '{"NroDePedido":"010","Cod_articulo":"A109","Descripcion":"Yogur Natural","UnidadMedida":"UM03","Cantidad":40,"PrecioUnitario":480.30,"Pdf_comprobante":"yogur010.pdf"},' +
    '{"NroDePedido":"011","Cod_articulo":"A110","Descripcion":"Agua Mineral","UnidadMedida":"UM04","Cantidad":50,"PrecioUnitario":300.00,"Pdf_comprobante":"agua011.pdf"},' +
    '{"NroDePedido":"012","Cod_articulo":"A111","Descripcion":"Jugo de Naranja","UnidadMedida":"UM04","Cantidad":16,"PrecioUnitario":1450.00,"Pdf_comprobante":"jugo012.pdf"},' +
    '{"NroDePedido":"013","Cod_articulo":"A112","Descripcion":"Vino Tinto Malbec","UnidadMedida":"UM04","Cantidad":30,"PrecioUnitario":2500.00,"Pdf_comprobante":"vino013.pdf"},' +
    '{"NroDePedido":"014","Cod_articulo":"A113","Descripcion":"Cerveza Rubia","UnidadMedida":"UM05","Cantidad":24,"PrecioUnitario":1350.40,"Pdf_comprobante":"cerveza014.pdf"},' +
    '{"NroDePedido":"015","Cod_articulo":"A114","Descripcion":"Gaseosa Cola","UnidadMedida":"UM05","Cantidad":18,"PrecioUnitario":1150.00,"Pdf_comprobante":"gaseosa015.pdf"}' +
  ']' +
'}';

(function() {
  const datos = JSON.parse(textoJSONPedidos);

  var tablaPedidosBody = document.getElementById('pedidos-body');
  var tablaUnidadesBody = document.getElementById('unidades-body');
  var botonUnidades = document.getElementById('boton-unidades');
  var contenedorUnidades = document.getElementById('tabla-unidades-contenedor');

  botonUnidades.addEventListener('click', function() {
    if (contenedorUnidades.style.display === "block") {
      contenedorUnidades.style.display = "none";
    } else {
      contenedorUnidades.style.display = "block";
    }
  });

  for (var i = 0; i < datos.RenglonesPedido.length; i++) {
    var pedido = datos.RenglonesPedido[i];
    var fila = document.createElement('tr');
    fila.innerHTML = '<td>' + pedido.NroDePedido + '</td>' +
                     '<td>' + pedido.Cod_articulo + '</td>' +
                     '<td>' + pedido.Descripcion + '</td>' +
                     '<td>' + pedido.UnidadMedida + '</td>' +
                     '<td>' + pedido.Cantidad + '</td>' +
                     '<td>' + pedido.PrecioUnitario.toFixed(2) + '</td>' +
                     '<td><a href="#">' + pedido.Pdf_comprobante + '</a></td>';
                
    tablaPedidosBody.appendChild(fila);
  }

  for (var i = 0; i < datos.UnidadesMedida.length; i++) {
    var unidad = datos.UnidadesMedida[i];
    var fila = document.createElement('tr');
    fila.innerHTML = '<td>' + unidad.codUM + '</td>' +
                     '<td>' + unidad.Descripcion + '</td>';
                
    tablaUnidadesBody.appendChild(fila);
  }
})();
