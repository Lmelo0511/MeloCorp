const validarLogin = document.getElementById("botao");
validarLogin.addEventListener("click", function(event){
    enviandoLogin(event);
    conferirEmail(event);
});

function enviandoLogin(event){
    const campo = document.querySelectorAll(".colocando__dados");
    let preenchido = true;

    campo.forEach(campos => {
        if(campos.value === "") {
            preenchido = false;
            campos.style.border = "2px solid darkred";
        } else {
            campos.style.border = "2px solid green";
        }
    });
    
    if(!preenchido){
        alert("Preencha o(s) campo(s) abaixo");
        event.preventDefault();
    } else {
        const emailValido = conferirEmail(event);
        if(emailValido){
            alert("Bem vindo! Que bom ver você aqui novamente");
        }
    }
}

const verificandoEmail = document.getElementById("botao");
verificandoEmail.addEventListener("click", conferirEmail);

function conferirEmail(event){
    const validandoEmail = document.getElementById("email");
    const email = validandoEmail.value;
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@") + 1, email.length);
    let conferindo = true;

    if (
        usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.search("@") == -1 &&
        dominio.search("@") == -1 &&
        usuario.search(" ") == -1 &&
        dominio.search(" ") == -1 &&
        dominio.search(".") != -1 &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1
    ) {
        window.location.href = "site.html";
        return true;
    } else if (validandoEmail.value === "") {
        conferindo = false;
        validandoEmail.style.border = "2px solid darkred";
        event.preventDefault();
        return false;
    } else {
        alert("E-mail Inválido");
        validandoEmail.style.border = "2px solid darkred";
        document.getElementById("email").value = "";
        return false;
    }
}
