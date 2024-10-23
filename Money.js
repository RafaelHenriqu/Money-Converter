const num1 = document.getElementById('num1')
const Result = document.getElementById('num2')



if (localStorage.Tema){
   if (localStorage.Tema == "Light"){
      document.querySelector('body').style.backgroundColor = "#FFFFFF"
      document.querySelector('footer').style.backgroundColor = '#1F1F27' 
   }else{
      document.querySelector('body').style.backgroundColor = "#191920"
      document.querySelector('footer').style.backgroundColor = '#151520' 
   }
}else{
   var Tema = localStorage.Tema = "Light"
}
 



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
   const Body = document.querySelector('body').style
   const footer = document.querySelector('footer').style

   if (localStorage.Tema == "Light"){
      localStorage.Tema = "Dark"
      TemaConfig(Body,footer,localStorage.Tema)
   }else{
      localStorage.Tema = "Light"
      TemaConfig(Body,footer,localStorage.Tema)
   }
   
   
   
}
 
function TemaConfig(Body,footer,Tema)
{

   if (Tema == "Light"){
      Body.backgroundColor = "#FFFFFF"
      footer.backgroundColor = '#1F1F27' 
   }else{
      Body.backgroundColor = "#191920"
      footer.backgroundColor = '#151520' 
   }

   
   }