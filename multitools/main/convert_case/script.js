const inTexto = document.querySelector("#inTexto")
const mensegeCopy = document.querySelector("#mensegeCopy")
const btnCopiar = document.querySelector("#btnCopiar")

btnCopiar.addEventListener("click", () => {
    inTexto.select()

    document.execCommand('copy')

    window.getSelection().removeAllRanges()

    mensegeCopy.style.visibility = "visible"
    
    setTimeout( () => {
        mensegeCopy.style.visibility = "hidden"
      }, 1500);
})

const outCarateres = document.querySelector("#outCarateres")
const outPalavras = document.querySelector("#outPalavras")
const outFrases = document.querySelector("#outFrases")

const btnOriginal = document.querySelector("#btnOriginal")
const btnLimpar = document.querySelector("#btnLimpar")
const btnMaiusculo = document.querySelector("#btnMaiusculo")
const btnMinusculo = document.querySelector("#btnMinusculo")
const btnPrimeiraLetra = document.querySelector("#btnPrimeiraLetra")
const btnTitulo = document.querySelector("#btnTitulo")
const btnInvertido = document.querySelector("#btnInvertido")
const btnAlternado = document.querySelector("#btnAlternado")
const btnMorse = document.querySelector("#btnMorse")
const btnBinario = document.querySelector("#btnBinario")
const slcConverter = document.querySelector("#slcConverter")

var texto = ""
var textoOriginal = ""
var arrPalavras = []
var arrLetras = []

inTexto.addEventListener("keyup" , () => {
  texto = inTexto.value
  textoOriginal = inTexto.value
  arrPalavras = texto.split(' ')
  arrLetras = texto.split("")

  let arrSemEspacos = arrPalavras.filter(caractere => caractere != " ")
  outCarateres.textContent = arrLetras.length
  outPalavras.textContent = arrSemEspacos.length

})

btnOriginal.addEventListener("click", () => {
  inTexto.value = textoOriginal
})

btnLimpar.addEventListener("click", () => {
  inTexto.value = ""
})

btnMaiusculo.addEventListener("click", () => {
  inTexto.value = texto.toUpperCase()
})

btnMinusculo.addEventListener("click", () => {
  inTexto.value = texto.toLowerCase()
})

btnPrimeiraLetra.addEventListener("click", () => {
  let arrOriginal = textoOriginal.split("")
  arrOriginal[0] = arrOriginal[0].toUpperCase()

  arrOriginal = arrOriginal.join("")
  inTexto.value = arrOriginal
})

// Consertar: Simbolos
btnTitulo.addEventListener("click", () => {
  let textoFinal = []

  arrPalavras.forEach((element) => {
    if(element.length > 2) {
      let primeiraLetra = element[0].toUpperCase()
      element = element.replace(element[0], primeiraLetra)
    }
    textoFinal.push(element)
  })

  textoFinal = textoFinal.join(" ")

  let primeiraLetra = textoFinal[0].toUpperCase()
  
  textoFinal = textoFinal.replace(textoFinal[0], primeiraLetra)

  inTexto.value = textoFinal  

})

btnInvertido.addEventListener("click", () => {
  let textoFinal = []

  for(let i = arrLetras.length; i >= 0; i--) {
    textoFinal.push(arrLetras[i])
  }

  inTexto.value = textoFinal.join("")
})

btnAlternado.addEventListener("click", () => {
  let textoFinal = []

  let i = 0
  let letra = ""

  while(i < arrLetras.length) {
    letra = arrLetras[i]

    if(i % 2 == 0) {
      letra = arrLetras[i].toUpperCase()
    }

    textoFinal.push(letra)

    i += 1
  }

  inTexto.value = textoFinal.join("")
})

const tabelaMorse = {
  "a" : ".-",
  "b" : "-...",
  "c" : "-.-.",
  "d" : "-..",
  "e" : ".",
  "f" : "..-.",
  "g" : "--.",
  "h" : "....",
  "i" : "..",
  "j" : ".---",
  "k" : "-.-",
  "l" : ".-..",
  "m" : "--",
  "n" : "-.",
  "o" : "---",
  "p" : ".--.",
  "q" : "--.-",
  "r" : ".-.",
  "s" : "...",
  "t" : "-",
  "u" : "..-",
  "v" : "...-",
  "w" : ".--",
  "x" : "-..-",
  "y" : "-.--",
  "z" : "--..",
  " " : "/",
  "0" : "-----",
  "1" : ".----",
  "2" : "..---",
  "3" : "...--",
  "4" : "....-",
  "5" : ".....",
  "6" : "-....",
  "7" : "--...",
  "8" : "---..",
  "9" : "----.",
  "." : ".-.-.-",
  "," : "--..--",
  "?" : "..--..",
  "'" : ".----.",
  "!" : "-.-.--",
  "/" : "-..-.",
  "(" : "-.--.",
  ")" : "-.--.-",
  "&" : ".-...",
  ":" : "---...",
  ";" : "-.-.-.",
  "=" : "-...-",
  "+" : ".-.-.",
  "-" : "-...-",
  "-" : "-...-",
  "_" : "..--.-",
  "\"" : ".-..-.",
  "$" : "...-..-",
  "@" : ".--.-.",
}

btnMorse.addEventListener("click", () => {
  texto = []
  
  arrLetras.forEach(element => 
    texto.push(tabelaMorse[element.toLowerCase()], " ")
  )
  
  texto = texto.join("")
  inTexto.value = texto
})

btnBinario.addEventListener("click", () => {
  texto = []
  let char = 0
  let binario = ""

  arrLetras.forEach((element) => {    
    char = element.charCodeAt(0)

    binario = char.toString(2)
    binario = binario.split("")
    while(binario.length < 8) {
        binario.unshift("0")
    }
    binario = binario.join("")

    texto.push(binario)    
  })

  texto = texto.join(" ")

  inTexto.value = texto

})

const arrCaracters = Object.keys(tabelaMorse)
const arrMorse = Object.values(tabelaMorse)

slcConverter.addEventListener("change", () => {
  let indexMorse = 0
  let textoFinal = []
  let arrTextoPalavras = texto.split(" ")

  switch(slcConverter.value) {
    case "":
        textoFinal = arrLetras
        break
    case "morse":
      arrTextoPalavras.forEach((element) => {
        indexMorse = arrMorse.indexOf(element)
        textoFinal.push(arrCaracters[indexMorse]) 
      }
      )
      break
    case "binario":
      arrTextoPalavras.forEach((element) => {
        textoFinal.push(String.fromCharCode(parseInt(element, 2)))
      })
      
      break
  }

  texto = textoFinal.join("")

  inTexto.value =  texto
})