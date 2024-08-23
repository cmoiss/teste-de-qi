const form = document.querySelector('form');
const resultadoSection = document.querySelector('#resultado');
const gabarito = [
    { questao: 1, resposta: 'D) 80' },
    { questao: 2, resposta: 'C) Desorganizar' },
    { questao: 3, resposta: 'C) 8' },
    { questao: 4, resposta: 'B) Reação' },
    { questao: 5, resposta: 'C) 120' },
    { questao: 6, resposta: 'B) 42' },
    { questao: 7, resposta: 'A) 6' },
    { questao: 8, resposta: 'B) Inconveniente' },
    { questao: 9, resposta: 'C) 55' },
    { questao: 10, resposta: 'B) 36' }
];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.style.display = 'none';
    resultadoSection.style.display = 'block';

    const usuarioRespostas = [];
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        if (input.checked) {
            usuarioRespostas.push({ questao: input.name, resposta: input.value });
        }
    });

    let pontuacao = 0;
    usuarioRespostas.forEach(resposta => {
        const gabaritoResposta = gabarito.find(gabarito => gabarito.questao === parseInt(resposta.questao));
        if (gabaritoResposta && gabaritoResposta.resposta === resposta.resposta) {
            pontuacao++;
        }
    });

    resultadoSection.innerHTML = `
    <h2>Resultado</h2>
    <p>Gabarito:</p>
    <ol>
      ${gabarito.map((resposta, index) => `<li>${index + 1}. ${resposta.resposta}</li>`).join('')}
    </ol>
    <p>Sua pontuação: ${pontuacao} de 10</p>
  `;
});