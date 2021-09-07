let form = document.querySelector('.formulario')
form.addEventListener('submit', function(event){
    event.preventDefault()
    let mensagem = ''
    const alunos = form.elements['nome'].value.split(';')
    const notas1 = form.elements['nota1'].value.split(';')
    const notas2 = form.elements['nota2'].value.split(';')
    const notas3 =  form.elements['nota3'].value.split(';')
    if (verificarQuantidades(alunos.length, notas1.length) ) {
        document.querySelector('.result').innerHTML = 'Quantidade de notas 1 informada é invalida'
        return
    }
    if (verificarQuantidades(alunos.length, notas2.length) ) {
        document.querySelector('.result').innerHTML = 'Quantidade de notas 2 informada é invalida'
        return
    }
    if (verificarQuantidades(alunos.length, notas3.length) ) {
        document.querySelector('.result').innerHTML = 'Quantidade de notas 3 informada é invalida'
        return
    }
    for(let i = 0; i < alunos.length ; i++) {
        let media = (Number(notas1[i]) + Number(notas2[i]) + Number(notas3[i])) / 3
        mensagem += `<strong>Aluno: </strong>${alunos[i]} <br>`    
        mensagem += `<strong>Media:</strong> ${media.toFixed(2)} <br>`
        if( media >= 7 ) {
            mensagem += `<strong>Aluno ${alunos[i]}:</strong> Aprovado!`
        } 
        if( media < 7 ){
            mensagem += `<strong>Aluno ${alunos[i]}:</strong> Reprovado!`
        }
        mensagem += '<br><br>'
    }
    document.querySelector('.result').innerHTML = mensagem
})
function verificarQuantidades (qtdAlunos, qtdNota) {
    return (qtdAlunos !== qtdNota)
}