const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://api.sheetmonkey.io/form/2bseHC7mKXKjPqNj2Z3czm", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Carlos",
            email: "carlos@gmail.com"
        })
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);