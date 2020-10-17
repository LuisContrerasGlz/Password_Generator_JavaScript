// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
   var numero = 0
   var seleccion=""
   while (numero<8 || numero>128){
        var n_caracteres = prompt("How many characters do you want (between 8 and 128 characters)");
        numero=parseInt(n_caracteres);
   }
   seleccion="You want "+n_caracteres+" characters";
   op_min=confirm("Do you want to use lower case?");
   if (op_min){ 
      seleccion=seleccion+" You want lower case";
    }else{
      seleccion=seleccion+" NO lower case";
    }
    op_may=confirm("Do you want to use capital letters?");
    if (op_may){ 
      seleccion=seleccion+" capital letters accepted";
    }else{
      seleccion=seleccion+" NO capital letters?";
    }
    op_num=confirm("Do you want to use numbers?");
    if (op_num){ 
      seleccion=seleccion+" You accepted numbers";
    }else{
      seleccion=seleccion+" NO numbers";
    }
    op_car=confirm("Do you want to use special characters?");
    if (op_car){ 
      seleccion=seleccion+" special characters accepted";
    }else{
      seleccion=seleccion+" NO special characters";
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
