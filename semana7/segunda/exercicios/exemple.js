// Promises JavaScript MasterClass Rodrigo Branas
function sum(a, b){
    return new Promise(function(resolve, reject){
        if(!a || !b ) return reject('Invalid input')
        setTimeout(function(){
            resolve( a + b )
        }, Math.random() * 1000)
    })
}
console.time("performance") // para medir tempo de execução
// Promise.race De um array de Promises retorna a primeira que der sucesso, se der erro não resolve nenhum.
Promise.race([
    sum(2,2), 
    sum(4,4)
]).then(function(value){    
    console.log(value)
    return sum(value, value).then(function(result){
        console.log(result)
        console.timeEnd("performance") // fim da medição
    })
}).catch(function(e){
    console.log("Pegando erro em qualquer then pq eles tem return: ", e)
})


/*
console.time("performance") // para medir tempo de execução
// Promise.all executa em paralelo um array de promises, mas caso alguma der erro retorna o erro.
Promise.all([
    sum(2,2), 
    sum()
]).then(function(values){
    const [a, b] = values
    console.log(a, b)
    return sum(a, b).then(function(result){
        console.log(result)
        console.timeEnd("performance") // fim da medição
    })
}).catch(function(e){
    console.log("Pegando erro em qualquer then pq eles tem return: ", e)
})
*/

// melhorando a visualização
/*
console.time("performance") // para medir tempo de execução
sum(2,2).then(function(a){
    console.log(a)
    return sum(4,4).then(function(b){
        console.log(b)
        return sum(a, b).then(function(result){
            console.log(result)
            console.timeEnd("performance") // fim da medição
        })
    })
}).catch(function(e){
    console.log("Pegando erro em qualquer then pq eles tem return: ", e)
})
*/

// jeito complicado de visualizar
/*
sum(2,2).then(function(a){
    console.log(a)
    sum(4,4).then(function(b){
        console.log(b)
        sum().then(function(result){
            console.log(result)
        }).catch(function(e){
            console.log("Erro na Terceira soma: ", e)
        })
    }).catch(function(e){
        console.log("Erro na segunda soma: ", e)
    })
}).catch(function(e){
    console.log("Erro na primeira soma: ", e)
})
*/

