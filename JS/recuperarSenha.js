const enviandoSolicitacao = document.getElementById("botao");
enviandoSolicitacao.addEventListener("click", function (event){
    recuperaSenha(event);
    conferindoSenha(event);
});

function recuperaSenha(event){
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
        const emailValido = conferindoEmail(event);
        const senhaValida = conferindoSenha(event);
        if(emailValido || senhaValida){
            alert("Senha alterada com sucesso!");
            window.location.href = "site4.html";
        }
    }
}

function conferindoSenha(event){
    const novaSenha = document.getElementById("senha1");
    const conferindoNovaSenha = document.getElementById("senha2");
    let validando = true;

    if (novaSenha.value !== conferindoNovaSenha.value) {
        validando = false;
        novaSenha.style.border = "2px solid darkred";
        conferindoNovaSenha.style.border = "2px solid darkred";
        alert("As Senhas não correspondem"); 
        document.getElementById("senha1").value = "";
        document.getElementById("senha2").value = "";
        event.preventDefault();
    } else if (novaSenha.value === "" || conferindoNovaSenha.value === "") {
        validando = false;
        novaSenha.style.border = "2px solid darkred";
        conferindoNovaSenha.style.border = "2px solid darkred";
        event.preventDefault();
    } else {
        validando = true;
        novaSenha.style.border = "2px solid green";
        conferindoNovaSenha.style.border = "2px solid green";
    }
}

const validarEmail = document.getElementById("botao");
validarEmail.addEventListener("click", conferindoEmail);

function conferindoEmail(event){
    const validarEmail = document.getElementById("email");
    const email = validarEmail.value;
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

        return true;

    } else if (validarEmail.value === "") {
        conferindo = false;
        validarEmail.style.border = "2px solid darkred";
        event.preventDefault();
        return false;
    } else {
        alert("E-mail Inválido");
        validarEmail.style.border = "2px solid darkred";
        return false;
    }
}
