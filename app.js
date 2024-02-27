      let listadeNumerosSorteados = [];
      let numeroLimite = 10;
      let numeroSecreto = gerarNumeroAleatorio();
      let tentativas = 1;
     
    function exibirTextoNaTela(tag, texto){
      let campo = document.querySelector(tag);
       campo.innerHTML = texto;
       //funcao do texto falar//
       responsiveVoice.speak(texto,'Brazilian Portuguese Female' , {rate:1.2});
    }

      function exebirMensagemInicial(){
       exibirTextoNaTela('h1', 'Jogo do número secreto');
       exibirTextoNaTela('p', 'Escola um número entre 1 e 10');
     }  
     //chamar funcao exebir mensagem inicial.
      exebirMensagemInicial();
     

    function verificarChute(){
       let chute = document.querySelector ('input').value;

      if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'você acertou!');
        let paravraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas =`Voce descobriu o numero  secreto com ${tentativas} ${paravraTentativa}!`;
        exibirTextoNaTela('p', mensagemtentativas);

        //habilitar e desabilitar botao chamando a função habilitarComponente()

        habilitarComponente('input', false);
        habilitarComponente('chutar', false);
        habilitarComponente('reiniciar', true);
        // document.getElementById('chutar').setAttribute('disabled', true)
        // document.getElementById('reiniciar').removeAttribute('disabled');

      }else{
        if(chute > numeroSecreto){
          exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
          exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++
        limparCampo(); 
      }
    }
         //funcao gerar numero aleatorio inteiro
    function gerarNumeroAleatorio (){
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;
       if(quantidadeDeElementosNaLista == numeroLimite){
        listadeNumerosSorteados = [];
       }


      if(listadeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
      }else{
        listadeNumerosSorteados.push(numeroEscolhido);
        console.log(listadeNumerosSorteados);
        return numeroEscolhido;
      }

    }   // criamos uma funcao de limpar o campo, toda vez que acertar.

     function limparCampo(){
      chute = document.querySelector('input');
      chute.value = '';

     }

     // criamos uma funcao de iniciar um novo jogo
      
     function reiniciarJogo(){
      numeroSecreto = gerarNumeroAleatorio();
      limparCampo();
      tentativas = 1;
      exebirMensagemInicial();
      habilitarComponente('input', true);
      habilitarComponente('chutar', true);
      habilitarComponente('reiniciar', false);


      // document.getElementById('chutar').removeAttribute('disabled');
      // document.getElementById('reiniciar').setAttribute('disabled' , true); 

     }

     function habilitarComponente(id, estaHabilitado) {
      if (estaHabilitado) {
        document.getElementById(id).removeAttribute('disabled');
      } else {
        document.getElementById(id).setAttribute('disabled', true)
      }
     }

     

     // }  //parei aqui
       
       /*  let listaGenerica = [];
        console.log(`lista generica: ${listaGenerica}`);


        let listaDeProgramacao = ['javaScript', 'C', 'kotlin','python'];
        console.log(listaDeProgramacao);
         
        listaDeProgramacao.push('java', 'C++','Ruby', 'GoLang');
        console.log(listaDeProgramacao);

        let listaNone = ['Maria','Joana','laura'];
        console.log(`Lista de nome: ${listaNone[0]}`);

 */
        
                             //exercicios //

     /* function exibirNome (){
      let nome = 'mel';
      console.log(`Olá, ${nome}`);
     }
 */
         
       /* function exibirNumero(){
        let number1 = 6;
        let number2 = 4;
        let dobro;
         
        dobro = number1 * number2;

        console.log(dobro);
       }
 */
        
       /* function numeroMaximo (){
         let numero1 = prompt('Informe um número');
         let numero2 = prompt('Informe outro número');
         
         if(numero1 > numero2){
          console.log(`O número maior é ${numero1}`);
         }else{
           console.log(`numero maior é ${numero2}`);
         }
  
       }
 */
         
       /* function numeroMult(){
        let numeroMult = 6;
        let resultado;

        resultado = numeroMult * numeroMult;

        console.log(`O resultado da muitiplicação é: ${resultado}`);

       }
     */        
           


     

       