
let opcion = prompt ("ingresar opcion 1 para sumarle al producto el IVA, u opcion 2 para restarle el descuento: ");

while (opcion == 1 || opcion== 2)  {
let precio = prompt ("ingrese el precio" );
 switch(opcion )  { 
    case 1:
        function suma (precio) {
         prodConIva= precio + precio*0,21
            return prodConIva
        }
    
    case 2: 
    let descuento = prompt ("ingrese el descuento");
        funcion resta (precio, descuento){
          prodConDcto= precio - descuento
          return prodConDcto
           }

         



 }



}
alert ("opcion ingresada invalida");




















// 28-9 CICLOS : 
/*let numero = Number(prompt ("INGRESE EL NUMERO")); 
for (i=1; i<= 10; i++) {
    let resultado = numero * i ;

    alert (`${numero} * ${i} = ${resultado}` );
    }

*/
/*let turnos = 0;
let multiplicacion = 0 ;
const minutos = 20;


for (i=0 ; i<=3; i++) {
    
    prompt ("Ingrese el número de documento: ");
    
    turnos = turnos + 1 ;
    alert ( `Su turno es el numero:  ${turnos} `);
   
}
function tiempo (turnos, minutos){
    multiplicacion =  turnos * minutos
    
}
    /*

    
  


    function tiempo(turnos, minutos) {
       let multiplicacion =  turnos*minutos
       return tiempo 
     }
     
    }

    
    /* ESTE ESTA OK:
    let multiplicacion = 0;
    function tiempo (turnos, minutos){
        multiplicacion =  turnos * minutos
        
    }
     function mostrar (mensaje){
        console.log(mensaje)
        
    }
   
    tiempo(3,20);
    mostrar(multiplicacion);
*/

    