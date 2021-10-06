/**
 * Olá!
 *
 * Aqui é um playground para vc brincar com o método catch e perceber
 * como funciona a propagação de erros.
 *
 * Experimentem também usar o segundo parâmetro do then para passar
 * como argumento uma função de callback que trata erro.
 *
 * Divirta-se!
 *
 * @author Michael Nascimento
 */

new Promise((resolver, rejeitar) => {
  console.log("Início");
  resolver();
})
  .then(() => {
    console.log("Primeiro then");
    throw new Error("Erro no primeiro then!");
  })
  .catch((erro) => {
    console.log(erro);
  })
  .then(() => {
    console.log("Segundo then");
    // throw new Error("Erro no segundo then!");
  })
  .then(() => {
    console.log("Terceiro then");
  })
  .then(() => {
    console.log("Quarto then");
  })
  .then(() => {
    console.log("Quinto then");
  })
  .then(() => {
    console.log("Sexto then");
  })
  .catch((erro) => {
    console.log(erro);
  });
