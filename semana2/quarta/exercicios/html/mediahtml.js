

const alunos = [
    {nome: "Juca",nota1: 3, nota2: 8, nota3: 9},
    {nome: "Joca",nota1: 5, nota2: 5, nota3: 5},
    {nome: "Joelma",nota1: 9, nota2: 7, nota3: 8}
]

let mensagem = ''
for(let i = 0; i < alunos.length; i++){
    mensagem += `<strong>Aluno: </strong>${alunos[i].nome} <br>`
    let media = (alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3) / 3;
    media = media.toFixed(2) 
    
    mensagem += `<strong>Media:</strong> ${media} <br>`
    if( media >= 7 ) {
        mensagem += `<strong>Aluno ${alunos[i].nome}:</strong> Aprovado!`
    } else if( media < 7 ){
        mensagem += `<strong>Aluno ${alunos[i].nome}:</strong> Reprovado!`
    }
    mensagem += '<br><br>'
}
document.write(mensagem)