function Calculadora() {
  var num1= document.getElementById('numero1').value;
  var num2= document.getElementById('numero2').value;
  console.log(num1);
  console.log(num2);

   
    var soma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("somatorio").innerHTML = soma;

    var subtracao = parseFloat(num1) - parseFloat(num2);
    document.getElementById("subtracao").innerHTML = subtracao;

    var subtracao1 = parseFloat(num2) - parseFloat(num1);
    document.getElementById("subtracao1").innerHTML = subtracao1;

    var multiplicacao = parseFloat(num1) * parseFloat(num2);
    document.getElementById("multiplicacao").innerHTML = multiplicacao;

    var divisao = parseFloat(num1) / parseFloat(num2);
    document.getElementById("divisao").innerHTML = divisao.toFixed(2);

    var divisao1 = parseFloat(num2) / parseFloat(num1);
    document.getElementById("divisao1").innerHTML = divisao1.toFixed(2);

    var potencia =  Math.pow(parseFloat(num1), parseFloat(num2));
    document.getElementById("potencia").innerHTML = potencia;

    var potencia1 =  Math.pow(parseFloat(num2), parseFloat(num1));
    document.getElementById("potencia1").innerHTML = potencia1;

    var raiza =  Math.sqrt(parseFloat(num1));
    document.getElementById("raiza").innerHTML = raiza.toFixed(2);

    var raizb =  Math.sqrt(parseFloat(num2));
    document.getElementById("raizb").innerHTML = raizb.toFixed(2);

  var fatorialA = 1;
  for (var i = 1; i <= parseInt(num1); i++) {
    fatorialA = fatorialA * i;
  }
  document.getElementById("fatorialA").innerHTML = fatorialA;
  var fatorialB = 1;
  for (var i = 1; i <= parseInt(num2); i++) {
    fatorialB= fatorialB* i;
  }
  document.getElementById("fatorialB").innerHTML = fatorialB;


  var porcentagem = ((parseFloat(num1)* 100)/parseFloat(num2));
  document.getElementById("porcentagem").innerHTML = porcentagem.toFixed(0)+"%";

  var porcentagem1 = ((parseFloat(num2)* 100)/parseFloat(num1));
  document.getElementById("porcentagem1").innerHTML = porcentagem1.toFixed(0)+"%";

  var media = ((parseFloat(num1)+parseFloat(num2))/2);
  document.getElementById("media").innerHTML = media;
}
