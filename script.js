const form = document.querySelector('form');
const resultadoSection = document.querySelector('#resultado');
const button = document.querySelector('button');

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

const handleSubmit = (event) => {
    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;
    const q1 = document.querySelector("input[name=q1]").value;
    const q2 = document.querySelector("input[name=q2]").value;
    const q3 = document.querySelector("input[name=q3]").value;
    const q4 = document.querySelector("input[name=q4]").value;
    const q5 = document.querySelector("input[name=q5]").value;
    const q6 = document.querySelector("input[name=q6]").value;
    const q7 = document.querySelector("input[name=q7]").value;
    const q8 = document.querySelector("input[name=q8]").value;
    const q9 = document.querySelector("input[name=q9]").value;
    const q10 = document.querySelector("input[name=q10]").value;

    event.preventDefault();

    button.remove()

    fetch("https://api.sheetmonkey.io/form/2bseHC7mKXKjPqNj2Z3czm", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8,
            q9,
            q10,
        })
    })

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

resultadoSection.style.display = 'block';

resultadoSection.innerHTML = `
    <h2>Gabarito</h2>
    <ol>
        ${gabarito.map((resposta, index) => `<li>${index + 1}. ${resposta.resposta}</li>`).join('')}
    </ol>
  `;
}

document.querySelector("form").addEventListener("submit", handleSubmit);