const form = document.getElementById("form-entrada");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let campoA = parseInt(document.getElementById("campoA").value);
    let campoB = parseInt(document.getElementById("campoB").value);

    const mensagemSucesso = "O Número B é MAIOR que o Número A! Sucesso!";
    const mensagemErro = "O número B é MENOR que o número A. Tente novamente.";

    if (campoB > campoA) {
        alert(mensagemSucesso);
    } else {
        alert(mensagemErro);
}
});