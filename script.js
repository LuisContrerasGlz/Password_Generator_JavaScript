// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
   var numero = 0
   var seleccion=""
   while (numero<8 || numero>128){
        var n_caracteres = prompt("Cuantos caracteres deseas (entre 8 y 128 caracteres)");
        numero=parseInt(n_caracteres);
   }
   seleccion="solicitaste "+n_caracteres+" caracteres";
   op_min=confirm("¿Deseas usar minusculas?");
   if (op_min){ 
      seleccion=seleccion+" Aceptaste minusculas";
    }else{
      seleccion=seleccion+" NO Aceptaste minusculas";
    }
    op_may=confirm("¿Deseas usar mayusculas?");
    if (op_may){ 
      seleccion=seleccion+" Aceptaste mayusculas";
    }else{
      seleccion=seleccion+" NO Aceptaste mayusculas";
    }
    op_num=confirm("¿Deseas usar numeros?");
    if (op_num){ 
      seleccion=seleccion+" Aceptaste numeros";
    }else{
      seleccion=seleccion+" NO Aceptaste numeros";
    }
    op_car=confirm("¿Deseas usar caracteres especiales?");
    if (op_car){ 
      seleccion=seleccion+" Aceptaste caracteres especiales";
    }else{
      seleccion=seleccion+" NO Aceptaste caracteres especiales";
    }
    alert(seleccion);
    
    var cuenta = 0
    var aux_pas = ""
    while (cuenta<numero){
        var codigo=Math.floor((Math.random() * (126 - 33 + 1)) + 33);
        if (op_min && codigo>=97 && codigo<=122){ 
            var carac = String.fromCharCode(codigo);
            aux_pas=aux_pas+carac;  
            cuenta=cuenta+1;
        }
        if (op_may && codigo>=65 && codigo<=90){ 
            var carac = String.fromCharCode(codigo);
            aux_pas=aux_pas+carac;  
            cuenta=cuenta+1;
        }
        if (op_num && codigo>=48 && codigo<=57){ 
            var carac = String.fromCharCode(codigo);
            aux_pas=aux_pas+carac;  
            cuenta=cuenta+1;
        }
        if (op_car && codigo>=33 && codigo<=47){ 
            var carac = String.fromCharCode(codigo);
            aux_pas=aux_pas+carac;  
            cuenta=cuenta+1;
        }
    }
    return aux_pas; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
