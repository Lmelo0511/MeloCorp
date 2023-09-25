const enviar = document.getElementById("botao");
enviar.addEventListener("click", function(event)  {
    verificarCadastro(event);
    validarSenhas(event);
    conferindoEmail(event)
})

function verificarCadastro(event) {
    
    const elementos = document.querySelectorAll(".colocando__dados");
    let preenchido = true;

    elementos.forEach(elemento => {
        if(elemento.value === "") {
            preenchido = false;
            elemento.style.border = "2px solid darkred";
        } else {
            elemento.style.border = "2px solid green";
        }
    });

    if(!preenchido) {
        alert("Preencha o(s) campo(s) abaixo");
        event.preventDefault();
    }    
}

function validarSenhas(event) {
    const senha1 = document.querySelector("#senha1");
    const senha2 = document.querySelector("#senha2");
    let validacao = true;

    if(senha1.value !== senha2.value) {
        validacao = false;
        senha1.style.border = "2px solid darkred";
        senha2.style.border = "2px solid darkred";
        alert("As Senhas não correspondem");
        document.querySelector("#senha1").value = "";
        document.querySelector("#senha2").value = "";
        event.preventDefault();
    } else if (senha1.value === "" || senha2.value === "") {
        validacao = false;
        senha1.style.border = "2px solid darkred";
        senha2.style.border = "2px solid darkred";
        event.preventDefault();
    } else {
        validacao = true;
        senha1.style.border = "2px solid green";
        senha2.style.border = "2px solid green";
        alert("Parabéns, cadastro realizado com sucesso!");
        window.location.href = "site4.html";
    }
}

const validarEmail = document.getElementById("botao");
validarEmail.addEventListener("click", conferindoEmail);

function conferindoEmail(event) {
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

const campoDoCpf = document.getElementById("cpf");
campoDoCpf.addEventListener("blur", () => {
    const cpf = campoDoCpf.value.replace(/\.|-/g, "");

    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campoDoCpf.setCustomValidity("CPF INVÁLIDO");
    } else {
        campoDoCpf.setCustomValidity("");
    }
});

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
 
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += parseInt(cpf[tamanho]) * multiplicador;
        multiplicador--;
    }
 
    const resto = (soma * 10) % 11;
    const digitoVerificador = (resto === 10 || resto === 11) ? 0 : resto;
 
    return digitoVerificador === parseInt(cpf[10]);
} 
 
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
 
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += parseInt(cpf[tamanho]) * multiplicador;
        multiplicador--;
    }
 
    const resto = (soma * 10) % 11;
    const digitoVerificador = (resto === 10 || resto === 11) ? 0 : resto;
 
    return digitoVerificador === parseInt(cpf[11]);
} 
