// Seleciona o formulário e o botão submit
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

// Adiciona um evento de click ao botão submit
submitButton.addEventListener('click', function(event) {
  // Previne o comportamento padrão do formulário (enviar o formulário para o servidor)
  event.preventDefault();

  // Redireciona para a página final
  window.location.href = 'pagina-final.html';
});