function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;

    const addLoading = () => {
        const button = document.querySelector("button");
        button.innerHTML = '<img src="loading.png" class="loading">';
    };

    const removeLoading = () => {
        const button = document.querySelector("button");
        button.innerHTML = 'Enviar';
    };

    fetch("https://api.sheetmonkey.io/form/2bseHC7mKXKjPqNj2Z3czm", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name, 
            email: name
        })
    }).then(() => window.alert("Dados salvos"));
}

document.querySelector('form').addEventListener('submit', handleSubmit);