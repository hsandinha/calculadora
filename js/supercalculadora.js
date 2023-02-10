function Calculadora() {
  var num1= document.getElementById('numero1').value;
  var num2= document.getElementById('numero2').value;
  console.log(num1);
  console.log(num2);

    var soma = parseInt(num1) + parseInt(num2);
    console.log(soma);
    document.getElementById("somatorio").innerHTML = soma;
}
