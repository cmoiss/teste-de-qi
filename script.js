const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector("input[name=name]");
    const email = document.querySelector("input[name=email]");

    fetch("https://api.sheetmonkey.io/form/2bseHC7mKXKjPqNj2Z3czm", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email})
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);