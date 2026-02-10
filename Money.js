const num1 = document.getElementById('n1')
const Result = document.getElementById('n2')

const Themes = {
   Light:{
      body:"#FFFFFF",
      footer:"#1F1F27",
   },
   Dark:{
      body:"#191920",
      footer:"#151520",
   }

}

function Theme_Select(){
   document.querySelector('body').style.backgroundColor = Themes[localStorage.getItem("Tema")].body
   document.querySelector('footer').style.backgroundColor = Themes[localStorage.getItem("Tema")].footer
}

if (localStorage.getItem("Tema")){
   Theme_Select()
}else{
   localStorage.setItem("Tema","Dark")
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
 
 
document.getElementById("tema").addEventListener("click",()=>{
   if (localStorage.getItem("Tema") == "Light"){
      localStorage.setItem("Tema","Dark")
   }else{
      localStorage.setItem("Tema","Light")
   }
   Theme_Select()
})