const form = document.getElementById('form')
const Username = document.getElementById('Username')
const Data = document.getElementById('Data')
const Email = document.getElementById('Email')
const Numero = document.getElementById('Numero')
const Codigo = document.getElementById('Codigo')
const ConfirmeCodigo = document.getElementById('ConfirmeCodigo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const UsernameValue = Username.value.trim()
    const DataValue = Data.value.trim()
    const EmailValue = Email.value.trim()
    const NumeroValue = Numero.value.trim()
    const CodigoValue = Codigo.value.trim()
    const ConfirmeCodigoValue = ConfirmeCodigo.value.trim()

    if(UsernameValue === ''){
        errorValidation(Username, 'Preencha esse campo')
    } else {
        successValidation(Username)
    }

    if(DataValue === ''){
        errorValidation(Data, 'Preencha esse campo')
    } else {
        successValidation(Data)
    }

    if(EmailValue === ''){
        errorValidation(Email, 'Preencha esse campo')
    } else {
        successValidation(Email)
    }

    if(NumeroValue === ''){
        errorValidation(Numero, 'Preencha esse campo')
    } else {
        successValidation(Numero)
    }

    if(CodigoValue === ''){
        errorValidation(Codigo, 'Preencha esse campo')
    } else if (CodigoValue.length < 8) {
        errorValidation(Codigo, 'A senha deve ter mais de 8 caracteres')
    } else {
        successValidation(Codigo)
    }

    if(ConfirmeCodigoValue === ''){
        errorValidation(ConfirmeCodigo, 'Preencha esse campo')
    } else if (CodigoValue !== ConfirmeCodigoValue) {
        errorValidation(ConfirmeCodigo, 'As Senhas não se conferem')
    } else {
        successValidation(ConfirmeCodigo)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}