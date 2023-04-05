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
function TemaSelect()
{
   TemaConfig()
}

function TemaConfig()
{
   const Body = document.querySelector('body').style
   const footer = document.querySelector('footer').style
   let tema = document.getElementById('tema')
   Body.backgroundColor = "#191920"
   footer.backgroundColor = '#151520'
}