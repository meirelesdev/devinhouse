const alunos = [
    {nome: "Juca",nota1: 3, nota2: 8, nota3: 9},
    {nome: "Joca",nota1: 5, nota2: 5, nota3: 5},
    {nome: "Joelma",nota1: 9, nota2: 7, nota3: 8}
]

for(let i = 0; i < alunos.length; i++){
    console.log('Aluno: ' + alunos[i].nome)
    let media = (alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3) / 3;
    // console.log(typeof media) // number
    media = media.toFixed(2) 
    // console.log(typeof media) // string
    console.log('media: ' + media)
    if( media >= 7 ) {
        console.log(`Aluno ${alunos[i].nome}: Aprovado!`)
    } else if( media < 7 ){
        console.log(`Aluno ${alunos[i].nome}: Reprovado!`)
    }
}