const num1 = document.getElementById('num1')
const Result = document.getElementById('num2')
function Calcular()
{
    let Moeda = document.getElementById('MoedasList').value
    let  url = `https://economia.awesomeapi.com.br/json/last/${Moeda}`
    let Valor = Moeda + 'BRL'

 fetch(url).then(Response => Response.json().then(date => {
    let Resultado = date[Valor]
    Result.value = num1.value * Resultado.ask 

 }))
}
