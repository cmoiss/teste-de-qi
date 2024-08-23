const form = document.querySelector('form');
const resultadoSection = document.querySelector('#resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.style.display = 'none';
    resultadoSection.style.display = 'block';

    // Preencher a seção de resultado com o gabarito e a pontuação do usuário
    const gabarito = [...]; // array com as respostas certas
    const usuarioRespostas = [...]; // array com as respostas do usuário
    const pontuacao = 0; // pontuação do usuário

    resultadoSection.innerHTML = `
    <h2>Resultado</h2>
    <p>Gabarito:</p>
    <ul>
      ${gabarito.map((resposta, index) => `<li>${index + 1}. ${resposta}</li>`).join('')}
    </ul>
    <p>Sua pontuação: ${pontuacao}</p>
  `;
});