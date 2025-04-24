
async function consultaCep(cep){
    var msgErro = document.querySelector('#erro')
    msgErro.innerHTML = ""
    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaConvertida = await consultaCep.json()
    if(consultaConvertida.erro){
        throw Error('CEP não existe!')
    }    
    var cidade = document.querySelector('#cidade')
    var logradouro = document.querySelector('#endereco')
    var bairro = document.querySelector('#bairro')
    var estado = document.querySelector('#estado')

    cidade.value = consultaConvertida.localidade
    logradouro.value = consultaConvertida.logradouro
    bairro.value = consultaConvertida.bairro
    estado.value = consultaConvertida.uf

    console.log('-->', consultaConvertida)
    return consultaConvertida
    }catch(erro){
        msgErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
        console.log(erro)
    }
}


var inputCep = document.querySelector('#cep')
inputCep.addEventListener('focusout', () =>{
    consultaCep(inputCep.value)
})
