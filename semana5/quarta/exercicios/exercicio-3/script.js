  //--Apresentando os melhores clientes
  document.querySelector("#print").insertAdjacentHTML("beforeend",`<br>Os Melhores clientes são ${clientes.map(osMelhoresClientes)}<br>`)
  const osMelhoresClass = new osMelhoresInvestidoresClass(clientes)
  const cincoPrimeiros = osMelhoresClass.pegarOsCincoMelhores()
  document.querySelector("#print").insertAdjacentHTML("beforeend", `<br>Usando class: Os 5 clientes com maior potencial de investimento são: ${cincoPrimeiros} <br>`)
  //--Separando os melhores investidores com function        
  document.querySelector("#print").insertAdjacentHTML("beforeend", `<br>Usando function: Os 5 clientes com maior potencial de investimento são ${osMelhoresInvestidoresFunction(clientes)} <br>`)