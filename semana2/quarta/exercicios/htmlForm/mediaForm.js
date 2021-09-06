let form = document.querySelector('.formulario')
form.addEventListener('submit', function(event){
    event.preventDefault()
    let mensagem = ''
    const aluno = {
        nome: form.elements['nome'].value,
        nota1: Number(form.elements['nota1'].value),
        nota2: Number(form.elements['nota2'].value),
        nota3: Number(form.elements['nota3'].value),
    }
    aluno.media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3
    console.log(aluno)
    if(aluno.nome == '' || aluno.nota1 == '' || aluno.nota2 == '' || aluno.nota3 == '' ) {
        document.querySelector('.result').innerHTML = 'Informe os dados do Aluno'
        return
    }
    mensagem += `<strong>Aluno: </strong>${aluno.nome} <br>`    
    mensagem += `<strong>Media:</strong> ${aluno.media.toFixed(2)} <br>`
    if( aluno.media >= 7 ) {
        mensagem += `<strong>Aluno ${aluno.nome}:</strong> Aprovado!`
    } 
    if( aluno.media < 7 ){
        mensagem += `<strong>Aluno ${aluno.nome}:</strong> Reprovado!`
    }
    mensagem += '<br><br>'
    document.querySelector('.result').innerHTML = mensagem
})