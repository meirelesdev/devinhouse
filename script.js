
montarTela()

function montarTela(){
    let numeroDeAlunos = prompt("Ola, Informe Quantos Alunos: ")
    let qtdNotas = prompt("Informe Quantas notas cada aluno deve ter:")
    let conteudo = document.querySelector('.content')
    for(let i = 1; i <= numeroDeAlunos; i++) {
        let div = document.createElement('div')
        let label = document.createElement('label')
        let inputNomeAluno = document.createElement('input')
        div.classList.add(`aluno_${i}`)
        inputNomeAluno.setAttribute('name', `aluno_${i}`)
        inputNomeAluno.setAttribute('id', `aluno_${i}`)
        label.innerHTML = `Nome do Aluno ${i}`;
        div.appendChild(label)
        div.appendChild(inputNomeAluno)
        conteudo.appendChild(div)
    }
    for(let i = 1; i <= qtdNotas; i++) {
        let div = document.createElement('div')
        let label = document.createElement('label')
        let inputNomeAluno = document.createElement('input')
        div.classList.add(`nota_${i}`)
        inputNomeAluno.setAttribute('name', `nota_${i}`)
        inputNomeAluno.setAttribute('id', `nota_${i}`)
        label.innerHTML = `Nota ${i} do Aluno ${i}`;
        div.appendChild(label)
        div.appendChild(inputNomeAluno)
        conteudo.appendChild(div)
    } 
    let button = document.createElement('button')
    button.innerHTML = 'Calcular Media'
    button.setAttribute('onclick', 'calcularMedia()')
    conteudo.appendChild(button)
}
function calcularMedia(){
    let inputsAlunos = document.querySelectorAll(`[id^=aluno_`)
    let inputsNotas = document.querySelectorAll(`[id^=nota_`)
    for(let a = 0; a < inputsAlunos.length; a++) {
        let media = 0
        let total = 0
        for(let i = 0 ; i < inputsAlunos.length ; i++) {
            total += inputsNotas[i].value
        }
        media = total / inputsNotas.length
        console.log(media)
    }
    console.log(inputsNotas)
    console.log(inputsAlunos)
}