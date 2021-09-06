let form = document.querySelector('.formulario')
form.addEventListener('submit', function(event){
    event.preventDefault()
    let mensagem = ''
    const alunos = form.elements['nome'].value.split(';')
    const notas1 = form.elements['nota1'].value.split(';')
    const notas2 = form.elements['nota2'].value.split(';')
    const notas3 =  form.elements['nota3'].value.split(';')
    let quantidadeAlunos = alunos.length
    let quantidadeNotas1 = notas1.length
    let quantidadeNotas2 = notas2.length
    let quantidadeNotas3 = notas3.length
    if (verificarQuantidades(quantidadeAlunos, quantidadeNotas1) ) {
        document.querySelector('.result').innerHTML = 'Quantidade de notas 1 informada é invalida'
        return
    }
    if (verificarQuantidades(quantidadeAlunos, quantidadeNotas2) ) {
        document.querySelector('.result').innerHTML = 'Quantidade de notas 2 informada é invalida'
        return
    }
    if (verificarQuantidades(quantidadeAlunos, quantidadeNotas3) ) {
        document.querySelector('.result').innerHTML = 'Quantidade de notas 3 informada é invalida'
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
function verificarQuantidades (qtdAlunos, qtdNota) {
    return (qtdAlunos !== qtdNota)
}