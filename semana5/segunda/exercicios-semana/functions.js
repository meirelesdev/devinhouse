function loadDataZipcode(params) {
    street.value = params['logradouro']
    city.value = params['localidade']
    state.value = params['uf']
    streetNumber.focus()
}
function loading(){
    street.value = 'Carregando...'
    city.value = 'Carregando...'
    state.value = 'Carregando...'
}
function clearFieldsAddress() {
    street.value = ''
    city.value = ''
    state.value = ''
    streetNumber.value = ''
}
function clearFieldsClient(fields = []) {
    clearFieldsAddress()
    fields.forEach((field)=>{
        field.value = ''
    })
}
function clearFieldsAccount(fields = []) {
    fields.forEach((field)=>{
        field.value = ''
    })
}
function generateNumber(){
    return Math.floor(Math.random() * 1000).toString().padStart(5, '0')
}