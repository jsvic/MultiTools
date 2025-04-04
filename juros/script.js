const inCapital = document.querySelector("#inCapital")
const inTaxa = document.querySelector("#inTaxa")
const slcTaxa = document.querySelector("#slcTaxa")

const rdData = document.querySelector("#rdData")
const rdValor = document.querySelector("#rdValor")
const div_numero = document.querySelector("#div_numero")
const div_data = document.querySelector("#div_data")

const rdTempo = document.getElementsByName("rdTempo")

const inNumero = document.querySelector("#inNumero")
const slcNumero = document.querySelector("#slcNumero")

const slcTipo = document.querySelector("#slcTipo")

const btnCalcular = document.querySelector("#btnCalcular")
const outJuros = document.querySelector("#outJuros")
const outMontante = document.querySelector("#outMontante")

function divTempo() {
  var tipoTempo = ""
  rdTempo.forEach((element) => {
    if(element.checked) {
      tipoTempo = element.value
    }
  })
  
  return tipoTempo
}

rdValor.addEventListener("click", () => {
  div_numero.classList.add("tempoActive")
  div_data.classList.remove("tempoActive")
})


rdData.addEventListener("click", () => {
  div_numero.classList.remove("tempoActive")
  div_data.classList.add("tempoActive")
})

btnCalcular.addEventListener("click", () => {
  let capital = Number(inCapital.value) 

  let taxa = inTaxa.value

  if(slcTaxa.value == "diario") {
    taxa = taxa * 30 
  } 
  else if(slcTaxa.value == "anual") {
    taxa = taxa / 12
  }
  
  taxa = taxa / 100

  let tempo = 0
  
  switch(divTempo()) {
    case "valor":
      tempo = inNumero.value
      if(slcNumero.value == "dias") {
        tempo = tempo / 30
      } 
      else if(slcNumero.value == "anos") {
        tempo = tempo * 12
      }
    case "data":
  }

  let juros = 0
  let montante = 0
  switch(slcTipo.value) {
    case "simples":
      juros = capital * taxa * tempo
      montante = juros + capital
    case "compostos":
      montante = capital * (1  + taxa) ** tempo
      juros = montante - capital
  }


  outJuros.value = juros.toFixed(2)
  outMontante.value = montante.toFixed(2)

})

const btnLimpar = document.querySelector("#btnLimpar")

btnLimpar.addEventListener("click", () => {
  inCapital.value = ""
  inTaxa.value = ""
  inNumero.value = ""
})