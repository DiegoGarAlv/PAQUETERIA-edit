window.addEventListener("load",inicio,false);

// Instanciamos el objeto principal
var oPaqueteria = new Paqueteria();
 
//#########################################################################################
// PAQUETERIA
//#########################################################################################

var btnIndex = document.getElementById("activo");
btnIndex.addEventListener("click", volverIndex, false);

function volverIndex()
{
	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
 	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
 	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
 	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
}


//#########################################################################################
// CLIENTES
//#########################################################################################

var formAltaCliente = document.getElementById("altaCli");
formAltaCliente.addEventListener("click", altaCliente, false);

function altaCliente()
{
 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "block";
 	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
 	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
 	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var formBajaCliente = document.getElementById("bajaCli");
formBajaCliente.addEventListener("click", bajaCliente, false);
 

function bajaCliente()
{
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "block";
 	formBajaCliente.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";
	bajaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var listCliente = document.getElementById("listadoCli");
listCliente.addEventListener("click", listCLientes, false);

function listCLientes()
{
 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";
	bajaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
    var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

//#########################################################################################
// EMPLEADOS
//#########################################################################################

var altaEmpleados = document.getElementById("altaEmpl");
altaEmpleados.addEventListener("click", altaEmpleado, false);

function altaEmpleado()
{
	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "block";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	altaPaquete.reset();
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var bajaEmpleados = document.getElementById("bajaEmpl");
bajaEmpleados.addEventListener("click", bajaEmpleado, false);

function bajaEmpleado()
{
	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "block";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var listaEmpleados = document.getElementById("listadoEmpl");
listaEmpleados.addEventListener("click", listaEmpleado, false);

function listaEmpleado()
{
	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "block";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

//#########################################################################################
// ARTICULOS
//#########################################################################################

var altaArti = document.getElementById("altaArt");
altaArti.addEventListener("click", altaArticulo, false);

function altaArticulo()
{
	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var bajaArticulo = document.getElementById("bajaArt");
bajaArticulo.addEventListener("click", bajaArticulos, false);

function bajaArticulos()
{
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var listaArticulo = document.getElementById("btnListaArt");
listaArticulo.addEventListener("click", listArticul, false);

function listArticul()
{
	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

//#########################################################################################
// PAQUETES
//#########################################################################################

var altaPaq = document.getElementById("altaPaquete");
altaPaq.addEventListener("click", altaPaquete, false);

function altaPaquete()
{
	var verAltaPaquete = document.getElementById("formAltaPedido");
 	verAltaPaquete.style.display = "block";
 
	
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
 	bajaArtic.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var paqueteNoEntregado = document.getElementById("paqueteNoEntregado");
paqueteNoEntregado.addEventListener("click", listaPaquetesNoEntregado, false);

function listaPaquetesNoEntregado()
{
	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

 	var verAltaPaquete = document.getElementById("formAltaPedido");
 	verAltaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

var paqueteEntregado = document.getElementById("paqueteEntregado");
paqueteEntregado.addEventListener("click", listaPaquetesEntregado, false);

function listaPaquetesEntregado()
{
	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "block";
	
	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

 	var verAltaPaquete = document.getElementById("formAltaPedido");
 	verAltaPaquete.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
}

//#########################################################################################
// ADUANAS
//#########################################################################################

var altaAdu = document.getElementById("altaAduana");
altaAdu.addEventListener("click", altaAduana, false);

function altaAduana()
{
	var verAltaAduana = document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "block";
 
 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

   	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
 	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

	var altaPaq = document.getElementById("formAltaPedido");
 	altaPaq.style.display = "none";
	
 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";
 	
}

var listaAduanas = document.getElementById("btnListadoAduana");
listaAduanas.addEventListener("click", verListaAduana, false);

function verListaAduana()
{

	var verListaAduanas = document.getElementById("listadoAduana");
 	verListaAduanas.style.display = "block";
	
	document.getElementById("formModiCliente").style.display = "none";
	
	document.getElementById("formModiEmpleado").style.display = "none";
	
	document.getElementById("formModiArticulo").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("listadoAduana").style.display = "none";

}

//#########################################################################################
// UML
//#########################################################################################

var uml = document.getElementById("umlImage");
uml.addEventListener("click", mostarUML, false);

function mostarUML()
{
	var verUML = document.getElementById("uml");
 	verUML.style.display = "block";
}



/*#############################################################################################################################*/
/*VALIDACIONES DE LOS FORMULARIOS*/
/*VALIDACIONES clientes*/


function aceptarAltaCliente(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaCliente");
	var sErrores = "";
	var sMensaje ="";
	
	
	// Validaciones

	//Campo id cliente (en realidad debe ser id persona)
	var idCliente=  oForm.idCli.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idCliente) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idCli.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idCli.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idCli.className = "form-control";	
	}

	//Campo nombre
	var sNombre =oForm.nombre.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombre.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombre.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombre.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidos.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidos.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidos.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidos.className = "form-control";	
	}
	
	//Campo email
	var sEmail = oForm.email.value.trim();
	
	var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sEmail) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.getElementById("email").focus();		
		}
	
		sErrores += "\nEmail incorrecto";
		
		//Marcar error
		oForm.email.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.email.className = "form-control";	
	}
	
	
	
	
	//Campo telefono
	var sTelef = oForm.telefono.value.trim();
	
	var oExpReg =  /^[6|7|9][0-9]{8}$/;
	
	if (oExpReg.test(sTelef) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.telefono.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		oForm.telefono.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.telefono.className = "form-control";	
	}
	
	

	//Campo calle
	var sDireccion= oForm.calle.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.calle.focus();		
		}
	
		sErrores += "\nNombre de calle incorrecto";
		
		//Marcar error
		oForm.calle.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.calle.className = "form-control";	
	}
		
	//Campo codigopostal
	var sCodPost = oForm.codigopostal.value.trim();

	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	
	if (oExpReg.test(sCodPost) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.codigopostal.focus();		
		}
	
		sErrores += "\nCódigo postal incorrecto";
		
		//Marcar error
		oForm.codigopostal.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.codigopostal.className = "form-control";	
	}

	//Campo pais
	var sPais= oForm.pais.value.trim();


	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sPais) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.pais.focus();		
		}
	
		sErrores += "\nNombre de país incorrecto";
		
		//Marcar error
		oForm.pais.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.pais.className = "form-control";	
	}
	
  if(idCliente == "" || sNombre =="" || sApellidos =="" || sEmail ==""  || sTelef=="" || sDireccion=="" || sCodPost=="" || sPais=="")
    {
        sErrores +="Debe rellenar todos los campos";
    }

	

	//Resultado
	if (bValido == false)
	{
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	
	else
	{
     var cliente= new Cliente(idCliente,sNombre,sApellidos,sEmail,sTelef,sDireccion,sCodPost,sPais);
	 sMensaje=oPaqueteria.altaCliente(cliente);
	 oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarBajaCliente()
{
	var oForm = document.getElementById("formBajaCliente");
    var bValido = true;
    var clienteSeleccionado = oForm.baja.value.substr(0,2);
    //var clienteMod = baja.substr(0, 9);
    var mensaje = "";

    var clienteEncontrado = oPaqueteria.eliminarCliente(clienteSeleccionado);
    comboEliminarCliente();

    console.log(clienteEncontrado);

   	if(clienteEncontrado)
   	{
   		alert(clienteSeleccionado + " encontrado");
   	}

    //alert(mensaje);
}

function comboEliminarCliente()
{
	var oForm = document.getElementById("formBajaCliente");
	var mod = oForm.baja.children;
    /*for (var i = mod.length - 1; i >= 0; i--) {
        mod[i].parentNode.removeChild(mod[i]);
    }*/

    var select = oForm.baja;

    var comboClientes = oPaqueteria.cogerTodosLosNombresClientes();

    var longitudSelect = comboClientes.length;

    for (i = 0; i < longitudSelect; i++) 
    {
	  select.options[i] = null;
	}

    
    //console.log(comboClientes.length);
    var mod = oForm.baja;
    var seleccionado = oForm.baja.value.trim();

    

    
    
    //console.log(seleccionado);

    for (i = 0; i < comboClientes.length; i++) 
    {
		//console.log(comboClientes[i]);
		if(comboClientes.length > 0)
		{
			mod.selectedIndex = 1;

			if(comboClientes[i] != seleccionado && mod.selectedIndex != 0)
			{
		        var item = document.createElement("option");
		        item.setAttribute("value", comboClientes[i]);
		        var texto = document.createTextNode(comboClientes[i]);
		        item.appendChild(texto);
		        mod.appendChild(item);
	        }
        }
    }
}

//#######################################################################

function aceptarAltaEmpleado(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaEmpleados");
	var sErrores = "";
	var sMensaje ="";
	
	// Validaciones

	//Campo id empleado
	var idEmpleado=  oForm.idEmple.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idEmpleado) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idEmple.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idEmple.className = "form-control";	
	}

	//Campo nombre
	var sNombre = oForm.nombreEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombreEmple.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombreEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombreEmple.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidosEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,15}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidosEmple.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidosEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidosEmple.className = "form-control";	
	}
	
	
	

	//Campo oficina
	var sOficina= oForm.oficina.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,4}$/;
	
	if (oExpReg.test(sOficina) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.oficina.focus();		
		}
	
		sErrores += "\nNombre de oficina incorrecto";
		
		//Marcar error
		oForm.oficina.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.oficina.className = "form-control";	
	}
		
	
	
  if(idEmpleado == "" || sNombre =="" || sApellidos =="" || sOficina =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }

	
    
	 var sGestor = oForm.optradio.value;
	 var sManager = oForm.optradio1.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var empleado= new Empleado(idEmpleado, sNombre,sApellidos, sGestor, sManager, sOficina);
	 sMensaje=oPaqueteria.altaEmpleado(empleado);
	}
	
	
	alert(sMensaje);
}

function aceptarAltaArticulo(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaArticulo");
	var sErrores = "";
	var sMensaje ="";
	
	// Validaciones

	//Campo id articulo
	var idArticulo=  oForm.idArti.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idArticulo) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idArti.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idArti.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idArti.className = "form-control";	
	}

	//Campo descripción
	var sDescripcion = oForm.descripcion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcion.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcion.className = "form-control";	
	}

	//Campo peso parseFloat
	var doPeso = parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(idArticulo == "" || sDescripcion =="" || doPeso =="" || doValor =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	 var sComercial = oForm.optradio2.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var articulo= new Articulo(idArticulo,sDescripcion,doPeso,doValor,sComercial);
	 sMensaje=oPaqueteria.altaArticulo(articulo);
	}
	
	
	alert(sMensaje);

}


function aceptarAltaPaquete(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaPedido");
	var sErrores = "";
	var sMensaje ="";
	
	// Validaciones

	//Campo id paquete
	var idPaquete=  oForm.idPaquete.value.trim();

	var oExpReg = /^\d{8}\w$/;
	
	if (oExpReg.test(idPaquete) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idPaquete.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idPaquete.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idPaquete.className = "form-control";	
	}

//Campo tarifa parseFloat
	var doTarifa = parseFloat(oForm.tarifa.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doTarifa) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.tarifa.focus();		
		}
	
		sErrores += "\Tarifa incorrecta";
		
		//Marcar error
		oForm.tarifa.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.tarifa.className = "form-control";	
	}
	
	

	//Campo fecha
	var dFechaEntrega= new Date(oForm.fechaEntrega.value.trim()).toLocaleDateString("es-ES");
	
	

	var oExpReg = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
	
	
	if (oExpReg.test(dFechaEntrega) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.fechaEntrega.focus();		
		}
	
		sErrores += "\Fecha incorrecta";
		
		//Marcar error
		oForm.fechaEntrega.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.fechaEntrega.className = "form-control";	
	}
	
	//Campo volumen parseFloat
	var doVolumen= parseFloat(oForm.volumen.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doVolumen) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.volumen.focus();		
		}
	
		sErrores += "\Volumen incorrecto";
		
		//Marcar error
		oForm.volumen.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.volumen.className = "form-control";	
	}
	
	
	//Campo peso parseFloat
	var doPeso= parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(idPaquete =="" || doTarifa =="" || dFechaEntrega=="" || doVolumen=="" || doPeso =="" || doValor =="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	
	var sUrgente=oForm.optradio3.value;
    var sEntregado=oForm.optradio4.value;
    var sAdminPublica=oForm.optradio5.value;
    var sInternacional=oForm.optradio6.value;
    var sAsegurado=oForm.optradio7.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var paquete= new Paquete(idPaquete, doTarifa, dFechaEntrega, doVolumen, doPeso, doValor,sUrgente,sEntregado,sAdminPublica,sInternacional,sAsegurado);
	 sMensaje=oPaqueteria.altaPaquete(paquete);
	}
	
	
	alert(sMensaje);

}

function aceptarAltaAduana(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaAduana");
	 var listaArticulos = oForm.listaArticulos;
	var sErrores = "";
	var sMensaje ="";
	
	// Validaciones

	//Campo id declaracion
	var idDeclaracion=  oForm.idDeclaracion.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idDeclaracion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idDeclaracion.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idDeclaracion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idDeclaracion.className = "form-control";	
	}
	
	//Campo declaracion
	var sDeclaracion = oForm.declaracion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]$/;
	
	if (oExpReg.test(sDeclaracion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.declaracion.focus();		
		}
	
		sErrores += "\nDeclaración incorrecta";
		
		//Marcar error
		oForm.declaracion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.declaracion.className = "form-control";	
	}

//Campo tasa
	var iTasa = parseInt(oForm.tasa.value.trim());
	

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(iTasa) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.tasa.focus();		
		}
	
		sErrores += "\Tarifa incorrecta";
		
		//Marcar error
		oForm.tasa.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.tasa.className = "form-control";	
	}
	
	

	  //Validar combo articulos
    for (var i = 0; i < listaArticulos.options.length; ++i) {
        if (listaArticulos.options[i].selected)
            var articulos = listaArticulos.options[i].text;
    }
    if (articulos == null) {
        if (bValido == true) {
            bValido = false;
            oForm.listaArticulos.focus();
        }
        sErrores += "\Debe seleccionar un artículo";
     
        //Marcar error
        oForm.listaArticulos.className = "form-control error";
    }
    else {
        if (articulos == "No hay artículos disponibles") {
            if (bValido == true) {
                bValido = false;
                oForm.listaArticulos.focus();
            }
            sErrores += "\Lo sentimos no hay artículos disponibles";
            oForm.listaArticulos.className = "form-control  error";
        }
        else {
           oForm.listaArticulos.className = "form-control";
        }
    }
	
	  if(idDeclaracion =="" || sDeclaracion=="" || iTasa =="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }
	
	
	

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var aduana= new Aduana(idDeclaracion, articulos, sDeclaracion, iTasa);
	 sMensaje=oPaqueteria.altaAduana(aduana);
	}
	
	
	alert(sMensaje);

}


function aceptarAltaQueja(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaQuejas");
	
	var sErrores = "";
	var sMensaje = "";
	
	// Validaciones

	//Campo id 
	var idQueja=  oForm.idQueja.value.trim();

	var oExpReg = /^\d{8}\w$/;
	
	if (oExpReg.test(idQueja) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idQueja.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idQueja.className = "form-control";	
	}
	
	//Campo descripcion
	var sDescripcionQ = oForm.descripcionQueja.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]$/;
	
	if (oExpReg.test(sDescripcionQ) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcionQueja.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcionQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcionQueja.className = "form-control";	
	}


	
	  if(idQueja =="" || sDescripcionQ=="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }
	
	
	var sResuelta = oForm.optradio8.value;
	var fechaQueja = oForm.fechaQueja.value.trim();
	  var dFechaQueja = convertirFecha(fechaQueja);

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var queja= new Queja(idQueja, sDeclaracion, dFechaQueja, sResuelta);//queda la fecha
	 sMensaje=oPaqueteria.altaQueja(queja);
	}
	
	
	alert(sMensaje);

}

function inicio(){
	


	
	document.getElementById("aceptarAltaCli").addEventListener("click", aceptarAltaCliente,false);
	document.getElementById("aceptarEliminarCliente").addEventListener("click", aceptarBajaCliente,false);
	document.getElementById("bajaCli").addEventListener("click", comboEliminarCliente,false);
	document.getElementById("aceptarAltaEmple").addEventListener("click", aceptarAltaEmpleado,false);
	//document.getElementById("aceptarBajaEmple").addEventListener("click", aceptarEliminarEmpleado,false);
	document.getElementById("aceptarAltaArticulo").addEventListener("click", aceptarAltaArticulo,false);
	//document.getElementById("aceptarBajaArticulo").addEventListener("click", aceptarEliminarArticulo,false);
	document.getElementById("aceptarAltaPaquete").addEventListener("click", aceptarAltaPaquete,false);
	document.getElementById("aceptarAltaAduana").addEventListener("click", aceptarAltaAduana,false);
    document.getElementById("aceptarAltaQueja").addEventListener("click", aceptarAltaQueja,false);
	document.getElementById("listadoCli").addEventListener("click", mostrarListaClientes,false);
	document.getElementById("listadoEmpl").addEventListener("click", mostrarListaEmpleados,false);
	document.getElementById("btnListaArt").addEventListener("click",mostrarListaArticulos,false);
	document.getElementById("modiCli").addEventListener("click", modificarCliente,false);
	document.getElementById("aceptarModiCli").addEventListener("click", aceptarModificarCliente,false);
    document.getElementById("modiEmple").addEventListener("click", modificarEmpleado,false);
	document.getElementById("aceptarModiEmple").addEventListener("click", aceptarModificarEmpleado,false);
    document.getElementById("modiArti").addEventListener("click", modificarArticulo,false);
	document.getElementById("aceptarModiArticulo").addEventListener("click", aceptarModificarArticulo,false);
	document.getElementById("modiPaq").addEventListener("click", modificarPaquete,false);
	document.getElementById("aceptarModificarPaquete").addEventListener("click", aceptarModificarPaquete,false);

}



//LISTADOS 
//CARGA DE XML
function loadXMLDoc(filename)
    {
        if (window.XMLHttpRequest)
        {
            xhttp=new XMLHttpRequest();
        }
        else // code for IE5 and IE6
        {
            xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET",filename,false);

        xhttp.send();

        return xhttp.responseXML;
    }

    var oXML = loadXMLDoc("datosPrueba.xml");


function mostrarListaClientes() {

	vaciarTablas(document.querySelector("#listadoClientes"));
	document.querySelector("#listadoClientes").style.display="block";

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado clientes";

	document.querySelector("#listadoClientes").appendChild(labelTitulo);


    var lista = oPaqueteria.cogerTodosLosClientes();
    
    var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table table-striped table-responsive");
	//oTabla.classList.add("table");
	//oTabla.classList.add("table-striped");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Nombre";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Apellidos";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Email";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Teléfono";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Dirección";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Código Postal";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "País";


    /*oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Apellidos"));


    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Email"));
	
	 oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Teléfono"));
	
	 oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Dirección"));
	
	 oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Código postal"));
	
	 oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("País"));*/

    

    var oTBody = oTabla.createTBody();

	var oClientes = oXML.getElementsByTagName("cliente");

	for (var i = 0; i < oClientes.length; i++) {
		
		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("nombre")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("apellidos")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("email")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("telefono")[0].textContent;
		

		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("direccion")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("codPost")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("pais")[0].textContent;
		
	}
	
	
	
	
    for (i = 0; i < lista.length; i++) {
        oFila = oTBody.insertRow(-1);
        
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sNombre));
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sApellidos));
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sEmail));
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sTelefono));
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sDireccion));
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sCodPost));
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sPais));

    }

    document.querySelector("#listadoClientes").appendChild(oTabla);
}


function mostrarListaEmpleados() {
  	
  	vaciarTablas(document.querySelector("#listadoEmpleados"));
  	document.querySelector("#listadoEmpleados").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado empleados";

  	document.querySelector("#listadoEmpleados").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodosLosEmpleados();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Nombre";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Apellidos";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Puesto Gestor";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Puesto Mánager";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Oficina";

    var oTBody = oTabla.createTBody();

    var oEmpleados = oXML.getElementsByTagName("empleado");
	
	for (var i = 0; i < oEmpleados.length; i++) {
		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("nombre")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("apellidos")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("gestor")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("manager")[0].textContent;
		

		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("oficina")[0].textContent;
		
		}	



    for (i = 0; i < lista.length; i++) {
        oFila = oTBody.insertRow(-1);
        
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sNombre));
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sApellidos));
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sGestor));
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sManager));
	
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sOficina));
	

    }
    document.querySelector("#listadoEmpleados").appendChild(oTabla);
}

function loadXMLDoc(filename)
    {
        if (window.XMLHttpRequest)
        {
            xhttp=new XMLHttpRequest();
        }
        else // code for IE5 and IE6
        {
            xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET",filename,false);

        xhttp.send();

        return xhttp.responseXML;
    }

    var oXML2 = loadXMLDoc("datosArticulos.xml");

function mostrarListaArticulos() {
 	
	vaciarTablas(document.querySelector("#listadoArtic"));
  	document.querySelector("#listadoArtic").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado artículos";

  	document.querySelector("#listadoArtic").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodosLosArticulos();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Descripción";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Peso";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Valor";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Comercial";

    var oTBody = oTabla.createTBody();

    var oArticulos = oXML2.getElementsByTagName("articulo");

	
	for (var i = 0; i < oArticulos.length; i++) {

		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("descripcion")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("peso")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("valor")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("comercial")[0].textContent;	
		}		
	
    for (i = 0; i < lista.length; i++) {
        oFila = oTBody.insertRow(-1);
        
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sDescripcion));
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].doPeso));
		oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].doValor));
        oCelda = oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sComercial));
    }
    
    document.querySelector("#listadoArtic").appendChild(oTabla);
}

function vaciarTablas(objetoParent)
{
	while(objetoParent.children.length != 0)
	{
		objetoParent.removeChild(objetoParent.firstElementChild);
	}
}

//metodo q necesito de momento para poder modificar bien
function ocultarFormulariosModificar(){
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiArticulo").style.display = "none";
	/*document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiQueja").style.display = "none";
	document.getElementById("formModiAduana").style.display = "none";*/
	
	document.getElementById("formAltaCliente").style.display = "none";
	document.getElementById("formAltaEmpleados").style.display = "none";

}

function modificarCliente()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiCliente").style.display = "block";
	document.getElementById("formModiCliente").reset();
	rellenaComboClientes("comboModificarClientes");
}

function modificarEmpleado()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiEmpleado").style.display = "block";
	document.getElementById("formModiEmpleado").reset();
	rellenaComboEmpleados("comboModificarEmpleados");
}

function modificarArticulo()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiArticulo").style.display = "block";
	document.getElementById("formModiArticulo").reset();
	rellenaComboArticulos("comboModificarArticulos");
}

function rellenaComboClientes(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.clientes.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.clientes[i].sIdCliente;
		var oTextOption = document.createTextNode(oPaqueteria.clientes[i].sIdCliente);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado clientes');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboEmpleados(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.empleados.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.empleados[i].idEmpleado;
		var oTextOption = document.createTextNode(oPaqueteria.empleados[i].idEmpleado);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado empleados');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboArticulos(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.articulos.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.articulos[i].idEmpleado;
		var oTextOption = document.createTextNode(oPaqueteria.articulos[i].idArticulo);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado articulos');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function aceptarModificarCliente(oEvento){
		var oE = oEvento || window.event;
	   var bValido = true;
	   var oForm = document.getElementById("formModiCliente");
	  var sErrores = "";
	  var sMensaje ="";

	  //var posSeleccionado = oForm.selectedIndex;
	  
	  var sIdCliente=formModiCliente.comboClientes.value.trim();
	  //var selected = oForm.options[posSeleccionado].text;
	  //var selected = oForm.selectedIndex.text;
	  console.log(sIdCliente); 
	 //var oCliente=oPaqueteria.clientes[sIdCliente];
	 //var sNombre=oCliente.nombre;
	
	 //oForm.nombre.value = ;
	
	if(sMensaje==""){
		           for (var i=0;i<oPaqueteria.clientes.length;i++)
				   {
					   //Campo nombre
	var sNombre =oForm.nombre.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombre.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombre.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombre.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidos.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidos.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidos.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidos.className = "form-control";	
	}
	
	//Campo email
	var sEmail = oForm.email.value.trim();
	
	var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sEmail) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.getElementById("email").focus();		
		}
	
		sErrores += "\nEmail incorrecto";
		
		//Marcar error
		oForm.email.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.email.className = "form-control";	
	}
	
	
	
	
	//Campo telefono
	var sTelef = oForm.telefono.value.trim();
	
	var oExpReg =  /^[6|7|9][0-9]{8}$/;
	
	if (oExpReg.test(sTelef) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.telefono.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		oForm.telefono.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.telefono.className = "form-control";	
	}
	
	

	//Campo calle
	var sDireccion= oForm.calle.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.calle.focus();		
		}
	
		sErrores += "\nNombre de calle incorrecto";
		
		//Marcar error
		oForm.calle.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.calle.className = "form-control";	
	}
		
	//Campo codigopostal
	var sCodPost = oForm.codigopostal.value.trim();

	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	
	if (oExpReg.test(sCodPost) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.codigopostal.focus();		
		}
	
		sErrores += "\nCódigo postal incorrecto";
		
		//Marcar error
		oForm.codigopostal.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.codigopostal.className = "form-control";	
	}

	//Campo pais
	var sPais= oForm.pais.value.trim();


	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sPais) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.pais.focus();		
		}
	
		sErrores += "\nNombre de país incorrecto";
		
		//Marcar error
		oForm.pais.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.pais.className = "form-control";	
	}
	
  if(sNombre =="" || sApellidos =="" || sEmail ==""  || sTelef=="" || sDireccion=="" || sCodPost=="" || sPais=="")
    {
        sErrores +="Debe rellenar todos los campos";
    }

	

	//Resultado
	if (bValido == false)
	{
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	
	else
	{
     var cliente= new Cliente(sIdCliente,sNombre,sApellidos,sEmail,sTelef,sDireccion,sCodPost,sPais);
	 sMensaje=oPaqueteria.modificarCliente(cliente);
	 oForm.reset();
	}
	
	
	alert(sMensaje);
			
					
	}
		}
	
	
	
}


function aceptarModificarEmpleado(oEvento){
		var oE = oEvento || window.event;
	   var bValido = true;
	   var oForm = document.getElementById("formModiEmpleado");
	  var sErrores = "";
	  var sMensaje ="";
	  
	  var sIdEmpleado=formModiEmpleado.comboEmpleados.value.trim();
	
	
	if(sMensaje==""){
		           for (var i=0;i<oPaqueteria.empleados.length;i++)
				   {
					   // Validaciones

	
	//Campo nombre
	var sNombre = oForm.nombreEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombreEmple.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombreEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombreEmple.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidosEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,15}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidosEmple.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidosEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidosEmple.className = "form-control";	
	}
	
	
	

	//Campo oficina
	var sOficina= oForm.oficina.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,4}$/;
	
	if (oExpReg.test(sOficina) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.oficina.focus();		
		}
	
		sErrores += "\nNombre de oficina incorrecto";
		
		//Marcar error
		oForm.oficina.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.oficina.className = "form-control";	
	}
		
	
	
  if(sNombre =="" || sApellidos =="" || sOficina =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }

	
    
	 var sGestor = oForm.optradio.value;
	 var sManager = oForm.optradio1.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var empleado= new Empleado(sIdEmpleado, sNombre,sApellidos, sGestor, sManager, sOficina);
	 sMensaje=oPaqueteria.modificarEmpleado(empleado);
	}
	
	
	alert(sMensaje);
			
					
	}
		}
	
	
	
}

function aceptarModificarArticulo(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formModiArticulo");
	var sErrores = "";
	var sMensaje ="";
	var sIdArticulo=formModiArticulo.comboArticulos.value.trim();
	// Validaciones

	//Campo descripción
	var sDescripcion = oForm.descripcion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcion.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcion.className = "form-control";	
	}

	//Campo peso parseFloat
	var doPeso = parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(sDescripcion =="" || doPeso =="" || doValor =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	 var sComercial = oForm.optradio2.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var articulo= new Articulo(sIdArticulo,sDescripcion,doPeso,doValor,sComercial);
	 sMensaje=oPaqueteria.modificarArticulo(articulo);
	}
	
	
	alert(sMensaje);

}