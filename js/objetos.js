// ###############################  Objeto Paqueteria  ########################### \\

class Paqueteria {
    constructor() {
    
    this.empleados = [ ]; // Array vacio
    this.quejas = [ ];
    this.clientes = [ ];
    this.articulos = [ ];
    this.paquetes = [ ];
    this.eventosQueja = [ ];
    this.aduanas = [ ]; 
    
	
}
}


// ###############################  Objeto Persona ############################### \\

function Persona(idPersona){
    this.idPersona = idPersona;
  
}

// ###############################  Objeto Cliente  ############################### \\

function Cliente(sIdCliente, sNombre, sApellidos, sEmail, sTelefono, sDireccion, sCodPost, sPais, sActivo){
    this.sIdCliente = sIdCliente;
    this.sNombre = sNombre;
    this.sApellidos = sApellidos;
    this.sEmail = sEmail;
    this.sTelefono = sTelefono;
    this.sDireccion = sDireccion;
    this.sCodPost = sCodPost;
    this.sPais = sPais;
    this.sActivo = sActivo;
    

}

Paqueteria.prototype.altaCliente = function(oCliente)
{
   
    var bEncontrado = false;
    var sMensaje = "";

    console.log("Cliente enviado: " + oCliente.sIdCliente);

    // Busco por idEmpleado
	for(var i=0; i<this.clientes.length && bEncontrado==false; i++)
	{
		console.log("revisando cliente: " + this.clientes[i].sIdCliente);
        if(this.clientes[i].sIdCliente == oCliente.sIdCliente){
            bEncontrado = true;
            sMensaje = "Cliente registrado con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.clientes.push(oCliente);
        sMensaje = "Cliente dado de alta";
    }

    return sMensaje;
}

Paqueteria.prototype.eliminarCliente = function (sIdCliente) {

    var encontrado = false;

    console.log(sIdCliente);

    for(var i=0; i<this.clientes.length; i++)
    {
        console.log(this.clientes[i].sIdCliente);
        if(sIdCliente == this.clientes[i].sIdCliente)
        {
            encontrado = true;
            this.clientes[i].sActivo = false;
            console.log(this.clientes[i]);
        }
    }

    return encontrado;
}

// ###############################  Objeto Empleado ############################### \\

function Empleado(/*idPersona,*/ idEmpleado, sNombre, sApellidos, sGestor, sManager, sOficina, sActivo){
	//Persona.call(this,idPersona);
	this.idEmpleado = idEmpleado;
	this.sNombre = sNombre;
	this.sApellidos = sApellidos;
	 this.sGestor=sGestor;
     this.sManager=sManager;
    this.sOficina = sOficina;
    this.sActivo = sActivo;
    

}

Paqueteria.prototype.altaEmpleado = function(oEmpleado)
{
   
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por idEmpleado
	for(var i=0; i<this.empleados.length && bEncontrado==false; i++)
	{
        if(this.empleados[i].idEmpleado == oEmpleado.idEmpleado){
            bEncontrado = true;
            sMensaje = "Empleado registrado con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.empleados.push(oEmpleado);
        sMensaje = "Empleado dado de alta";
    }

    return sMensaje;
}

Paqueteria.prototype.eliminarEmpleado = function (idEmpleado) {

    var encontrado = false;

    for(var i=0; i<this.empleados.length; i++)
    {
        console.log(this.empleados[i].idEmpleado);
        if(idEmpleado == this.empleados[i].idEmpleado)
        {
            encontrado = true;
            this.empleados[i].sActivo = false;
            console.log(this.empleados[i]);
        }
    }

    return encontrado;
}

// ###############################  Objeto Paquete  ################################## \\

function Paquete(idPaquete,doTarifa,dFechaEntrega,doVolumen,doPeso,doValor,sUrgente,sEntregado,sAdminPublica,sInternacional,sAsegurado)
{
    this.idPaquete = idPaquete;
    this.doTarifa = doTarifa;
    this.dFechaEntrega = dFechaEntrega;
    this.doVolumen = doVolumen;
    this.doPeso = doPeso;
    this.doValor = doValor;
    this.sUrgente=sUrgente;
    this.sEntregado=sEntregado;
    this.sAdminPublica=sAdminPublica;
    this.sInternacional=sInternacional;
    this.sAsegurado=sAsegurado;
}

Paqueteria.prototype.altaPaquete = function(oPaquete)
{
   
    var bEncontrado = false;
    var sMensaje = "";

	for(var i=0; i<this.paquetes.length && bEncontrado==false; i++)
	{
        if(this.paquetes[i].idPaquete == oPaquete.idPaquete){
            bEncontrado = true;
            sMensaje = "Paquete registrado con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.paquetes.push(oPaquete);
        sMensaje = "Paquete dado de alta";
    }

    return sMensaje;
};


// ###############################  Objeto Articulo ################################### \\

function Articulo(idArticulo,sDescripcion,doPeso,doValor,sComercial){
    this.idArticulo = idArticulo;
    this.sDescripcion = sDescripcion;
     this.doPeso = doPeso;
    this.doValor = doValor;
     this.sComercial=sComercial;
}

Paqueteria.prototype.altaArticulo = function(oArticulo)
{

    var bEncontrado = false;
    var sMensaje = "";
	
    for(var i=0; i<this.articulos.length && bEncontrado==false; i++)
	{
        if(this.articulos[i].idArticulo == oArticulo.idArticulo){
            bEncontrado = true;
            sMensaje = "Articulo registrado con anterioridad";
        }
        
    }

    if(!bEncontrado){
        this.articulos.push(oArticulo);
        sMensaje = "Articulo dado de alta";
    }

    return sMensaje;
};


// ############################### Objeto Direccion  ################################# \\

/*/function Direccion(sCalle, sCodigoPostal, sPais){
    this.sCalle = sCalle;
    this.sCodigoPostal = sCodigoPostal;
    this.sPais = sPais;
   
}*/

// ############################### Objeto EventoQueja  ################################ \\

/*function EventoQueja (idEvento, sMensaje){
    this.idEvento = idEvento;
    this.sMensaje = sMensaje;
    
}

Paqueteria.prototype.altaEventoQueja = function(oEventoQueja)
{
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";
	
    for(var i=0; i<this.eventosQueja.length && bEncontrado==false; i++)
	{
        if(this.eventosQueja[i].idEvento == oEventoQueja.idEvento){
            bEncontrado = true;
            sMensaje = "Evento registrado con anterioridad";
        }
        
    }

    if(!bEncontrado){
        this.eventosQueja.push(oEventoQueja);
        sMensaje = "Evento dado de alta";
    }

    return sMensaje;
};*/

// ###############################  Objeto Queja  ################################### \\

function Queja(idQueja,sDescripcion, dFecha, sResuelta){
    this.idQueja = idQueja;
    this.sDescripcion = sDescripcion;
	this.dFecha=dFecha;
    this.sResuelta=sResuelta;
}


Paqueteria.prototype.altaQueja = function(oQueja)
{
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";
	
    for(var i=0; i<this.quejas.length && bEncontrado==false; i++)
	{
        if(this.quejas[i].idQueja == oQueja.idQueja){
            bEncontrado = true;
            sMensaje = "Queja registrada con anterioridad";
        }
        
    }

    if(!bEncontrado){
        this.quejas.push(oQueja);
        sMensaje = "Queja dada de alta";
    }

	
    return sMensaje;
};


// ###############################  Objeto Aduana ################################### \\

function Aduana(idDeclaracion, sArticulo, sDeclaracion, iTasa){
	this.idDeclaracion = idDeclaracion;
    this.sArticulo = sArticulo;
    this.sDeclaracion = sDeclaracion;
     this.iTasa = iTasa;

}

Paqueteria.prototype.altaAduana = function(oAduana)
{
   
    var bEncontrado = false;
    var sMensaje = "";

    
	for(var i=0; i<this.aduanas.length && bEncontrado==false; i++)
	{
        if(this.aduanas[i].idDeclaracion == oAduana.idDeclaracion){
            bEncontrado = true;
            sMensaje = "Aduana registrada con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.aduanas.push(oAduana);
        sMensaje = "Aduana dada de alta";
    }

    return sMensaje;
};


//Listados
Paqueteria.prototype.cogerTodosLosClientes = function () 
{
    var arrayClientes = [];
    for (var i = 0; i < this.clientes.length; i++) 
	{
        arrayClientes.push(this.clientes[i]);
    }
    return arrayClientes;
}


Paqueteria.prototype.cogerTodosLosEmpleados = function () 
{
    var arrayEmpleados = [];
    for (var i = 0; i < this.empleados.length; i++) 
	{
        arrayEmpleados.push(this.empleados[i]);
    }
    return arrayEmpleados;
}

Paqueteria.prototype.cogerTodosLosNombresClientes = function () 
{
    var arrayClientes = [];
    for (var i = 0; i < this.clientes.length; i++) 
    {
        if(this.clientes[i].sActivo == true)
        {
            arrayClientes.push(this.clientes[i].sIdCliente + " - " + this.clientes[i].sNombre);
        }
    }
    return arrayClientes;
}

Paqueteria.prototype.cogerTodosLosNombresEmpleados = function () 
{
    var arrayEmpleados = [];
    for (var i = 0; i < this.empleados.length; i++) 
    {
        if(this.empleados[i].sActivo == true)
        {
            arrayEmpleados.push(this.empleados[i].idEmpleado + " - " + this.empleados[i].sNombre);
        }
    }
    return arrayEmpleados;
}

Paqueteria.prototype.cogerTodosLosArticulos = function () 
{
    var arrayArticulos = [];
    for (var i = 0; i < this.articulos.length; i++)
		{
        arrayArticulos.push(this.articulos[i]);
    }
    return arrayArticulos;
}

Paqueteria.prototype.cogerTodosLosPaquetes = function()
{
    var arrayPaquetes = [];
    for (var i = 0; i < this.paquetes.length; i++) {
        arrayPaquetes.push(this.paquetes[i]);
    }
    return arrayPaquetes;
}

//Modificaciones

//Cliente
Paqueteria.prototype.modificarCliente= function(oCliente){
    var sCadena = "";
    for(var i=0;i < this.clientes.length;i++){
        console.log(oCliente);
		console.log(oCliente.sIdCliente);
        if(this.clientes[i].sIdCliente == oCliente.sIdCliente)
        {
			this.clientes[i].sNombre = oCliente.sNombre;
            this.clientes[i].sApellidos = oCliente.sApellidos;
            this.clientes[i].sEmail = oCliente.sEmail;
			this.clientes[i].sTelefono = oCliente.sTelef;
            this.clientes[i].sDireccion = oCliente.sDireccion;
			this.clientes[i].sCodPost = oCliente.sCodPost;
			this.clientes[i].sPais = oCliente.sPais;
           
            sCadena = "Cliente "+oCliente.sNombre+" modificado";
        }
		
		 else
		 {
			sCadena = "Cliente no encontrado";
		 }
		
    }
    return sCadena;
}

//Empleado
Paqueteria.prototype.modificarEmpleado= function(oEmpleado){
    var sCadena = "";
    for(var i=0;i < this.empleados.length;i++){
       
        if(this.empleados[i].idEmpleado == oEmpleado.idEmpleado)
        {
			
			this.empleados[i].sNombre = oEmpleado.sNombre;
            this.empleados[i].sApellidos = oEmpleado.sApellidos;
            this.empleados[i].sGestor = oEmpleado.sGestor;
			this.empleados[i].sManager = oEmpleado.sManager;
            this.empleados[i].sOficina = oEmpleado.sOficina;
		
           
            sCadena = "Empleado "+oEmpleado.sNombre+" modificado";
        }
		
		 else
		 {
			sCadena = "Empleado no encontrado";
		 }
		
    }
    return sCadena;
}

//Articulo
Paqueteria.prototype.modificarArticulo= function(oArticulo){
    var sCadena = "";
    for(var i=0;i < this.articulos.length;i++){
       
        if(this.articulos[i].idArticulo == oArticulo.idArticulo)
        {
			
			this.articulos[i].sDescripcion = oArticulo.sDescripcion;
            this.articulos[i].doPeso = oArticulo.doPeso;
            this.articulos[i].doValor = oArticulo.doValor;
			this.articulos[i].sComercial = oArticulo.sComercial;
          
		
           
            sCadena = "Artículo "+oArticulo.idArticulo+" modificado";
        }
		
		 else
		 {
			sCadena = "Artículo no encontrado";
		 }
		
    }
    return sCadena;
}

//Paquete
Paqueteria.prototype.modificarPaquete= function(oPaquete){
    var sCadena = "";
    for(var i=0;i < this.paquetes.length;i++){
       
        if(this.paquetes[i].idPaquete == oPaquete.idPaquete)
        {
			
			this.paquetes[i].doTarifa = oPaquete.doTarifa;
			this.paquetes[i].dFechaEntrega = oPaquete.dFechaEntrega;
			this.paquetes[i].doVolumen = oPaquete.doVolumen;
            this.paquetes[i].doPeso = oPaquete.doPeso;
            this.paquetes[i].doValor = oPaquete.doValor;
			this.paquetes[i].sUrgente = oPaquete.sUrgente;
			this.paquetes[i].sEntregado = oPaquete.sEntregado;
			this.paquetes[i].sAdminPublica = oPaquete.sAdminPublica;
			this.paquetes[i].sInternacional = oPaquete.sInternacional;
			this.paquetes[i].sAsegurado = oPaquete.sAsegurado;
          
		
           
            sCadena = "Paquete "+oPaquete.idPaquete+" modificado";
        }
		
		 else
		 {
			sCadena = "Paquete no encontrado";
		 }
		
    }
    return sCadena;
}

//Aduana
Paqueteria.prototype.modificarAduana= function(oAduana){
    var sCadena = "";
    for(var i=0;i < this.aduanas.length;i++){
       
        if(this.aduanas[i].idDeclaracion == oAduana.idDeclaracion)
        {
			
			this.aduanas[i].sArticulo = oAduana.sArticulo;
			this.aduanas[i].sDeclaracion = oAduana.sDeclaracion;
			this.aduanas[i].iTasa = oAduana.iTasa;
            
          
		
           
            sCadena = "Aduana "+oAduana.idDeclaracion+" modificada";
        }
		
		 else
		 {
			sCadena = "Aduana no encontrada";
		 }
		
    }
    return sCadena;
}

//Queja
Paqueteria.prototype.modificarQueja= function(oQueja){
    var sCadena = "";
    for(var i=0;i < this.quejas.length;i++){
       
        if(this.quejas[i].idQueja == oQueja.idQueja)
        {
			
			this.quejas[i].sDescripcion = oQueja.sDescripcion;
			this.quejas[i].dFecha = oQueja.dFecha;
			this.quejas[i].sResuelta = oQueja.sResuelta;
            
          
		
           
            sCadena = "Queja "+oQueja.idQueja+" modificada";
        }
		
		 else
		 {
			sCadena = "Queja no encontrada";
		 }
		
    }
    return sCadena;
}


