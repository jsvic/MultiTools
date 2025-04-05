function percentage(){
    let rnGorjeta= document.getElementById("rnGorjeta").value
    let num_range= document.getElementById("num_range")

    num_range.innerHTML= `${rnGorjeta}%`
}

function calcular(){
    let inValor= Number(document.getElementById("inValor").value)
    let rnGorjeta= Number(document.getElementById("rnGorjeta").value)
    let outGorjeta= document.getElementById("outGorjeta")
    let outFinal=  document.getElementById("outFinal")

    outGorjeta.value = inValor * (rnGorjeta/100)
    
    outFinal.value = inValor + (inValor * (rnGorjeta/100))
    console.log(outGorjeta)
    console.log(outFinal)

}

function limpar() {
    let inValor= document.getElementById("inValor")
    let rnGorjeta= document.getElementById("rnGorjeta")
    let outGorjeta= document.getElementById("outGorjeta")
    let outFinal= document.getElementById("outFinal")
    let num_range= document.getElementById("num_range")

    num_range.innerHTML= `0%`
    inValor.value = 0
    rnGorjeta.value = 0
    outGorjeta.value = 0
    outFinal.value = 0

}