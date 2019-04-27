// FUNCAO PARA GERAR NUMEROS ALEATORIOS EM UM RANGE FIXO PARA NÃO DAR BUG NA ARRAY
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

// FUNCAO QUE RETRONA UMA CORES ALEATORIAS TRABALHA JUNTO COM A FUNCAO getRandomInt
  function randomColor(){
      var listaCores = ['#00ffff',"#ff00ff","ff0000","#2EFE64","#1B0A2A","#A9F5F2","#F7D358","#088A29"];
      return listaCores[getRandomInt(0, 8)];
  }

// FUNCAO QUE DIGITA AS LETRAS COM A VELOCIDADE REDUZIDA TENDO QUE PASSAR SOMENTE A FRASE E O TEMPO
// DE INTERVALO ENTRE AS LETRAS
  function writeSlow(fraseIn, timeBetween){
      frase = fraseIn;
      var arrayFrase = frase.split("");
      var i = 0;
      setInterval(function(){
        if(i == arrayFrase.length){
            return false;
        }else{
              document.getElementById('titulo').innerHTML += (arrayFrase[i]);
              // PARTE QUE GERA CORES ALEATORIAS ESTA COMENTADA PORQUE SER UM POUCO COMPLICADO
              // DE USAR EM TODOS OS CENARIOS POR QUESTÕES OBVIAS
              //document.getElementById('titulo').style.color = randomColor();
              i++;
          }
      }, timeBetween);
  }


// CHAMANDO A FUNCAO PASSANDO A FRASE EM QUESTAO E O TEMPO DE DELAY ENTRE AS LETRAS
writeSlow( "Olá mundo", 100);
    







