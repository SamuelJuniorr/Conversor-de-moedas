function Converter(){
    var valorElemento=document.getElementById("valor");
    var valor=valorElemento.value;
    var valorEmReal=parseFloat(valor);
    
    var valorEmDolar=valorEmReal*4.9;
    
    var elementoValorConvertido=document.getElementById("valorConvertido");
    var valorConvertido="O resultado em dólar é de $ " + valorEmDolar;
    elementoValorConvertido.innerHTML =valorConvertido;
  }
  
  function ConverterEuro(){
    var valorElemento=document.getElementById("valor");
    var valor=valorElemento.value;
    var valorEmReal=parseFloat(valor);
    
   var valorEmEuro=valorEmReal*5.42;
   
   var euroConvertido=document.getElementById("valorConvertido");
   var valorConvertido="O resultado em euro é de "+valorEmEuro;
   euroConvertido.innerHTML=valorConvertido;

  }