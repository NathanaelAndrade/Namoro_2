 // Função para alterar a posição do botão e exibir a mensagem
  function moverBotao() {
    var botao = document.getElementById("meuBotao");
    var mensagem = document.getElementById("mensagem");

    // Defina novas coordenadas para a posição do botão
    var novaPosicaoX = Math.random() * (window.innerWidth - botao.offsetWidth);
    var novaPosicaoY = Math.random() * (window.innerHeight - botao.offsetHeight);

    // Aplique as novas coordenadas para alterar a posição
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";

    // Exiba a mensagem
    mensagem.style.display = "block";

    // Oculte a mensagem após 2 segundos
    setTimeout(function() {
      mensagem.style.display = "none";
    }, 2000);
  }

  // Adicione o evento onclick ao botão
  var botao = document.getElementById("meuBotao");
  botao.addEventListener("click", moverBotao);


  // Mensagem de alerta para o botão 2
    document.addEventListener('DOMContentLoaded', function() {
        const naoBotao = document.getElementById('meuBotao2');
            naoBotao.addEventListener('click', function() {
                alert('Se tivesse clicado no Sim mais 982547 vezes, daria certo 😞');
    });
  });