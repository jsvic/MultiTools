const btnGerar = document.querySelector("#btnGerar")
const rnCaracteres = document.querySelector("#rnCaracteres")
const num_range = document.querySelector("#num_range")
const outResponse = document.querySelector("#outResponse") 
const btnCopiar = document.querySelector("#btnCopiar")
const mensegeCopy = document.querySelector("#mensegeCopy")

btnGerar.addEventListener('click', () => {

    const ckMaiuculos = document.querySelector("#ckMaiuculos").checked 
    const ckNumeros = document.querySelector("#ckNumeros").checked 
    const ckCaracteres = document.querySelector("#ckCaracteres").checked

    var senha = []
    var arr_caracters = []
    var arr_letra = []

    while(senha.length < rnCaracteres.value) {
        if(ckMaiuculos) {
            let rand_maiusculo = Math.ceil(Math.random() * (90 - 65) + 65)
            arr_letra.push(rand_maiusculo)
        }

        if(ckNumeros) {
            let rand_numero = Math.ceil(Math.random() * (57 - 48) + 48)
            arr_letra.push(rand_numero)
        }

        if(ckCaracteres) {
            let rand_caracteres1 = Math.ceil(Math.random() * (47 - 33) + 33)
            let rand_caracteres2 = Math.ceil(Math.random() * (64 - 58) + 58)
            let rand_caracteres3 = Math.ceil(Math.random() * (96 - 91) + 91)
            arr_caracters = [rand_caracteres1, rand_caracteres2, rand_caracteres3]
            
            let rand_arrcaracteres = Math.ceil(Math.random() * (2 - 0) + 0)

            let rand_caracteres = arr_caracters[rand_arrcaracteres]

            arr_letra.push(rand_caracteres)
        }

        let rand_minusculo = Math.ceil(Math.random() * (122 - 97) + 97)

        arr_letra.push(rand_minusculo)

        while(arr_letra.length > 0) {
            let index_letra = Math.ceil(Math.random() * (0 - (arr_letra.length - 1)) + (arr_letra.length - 1))

            let letra = String.fromCharCode(arr_letra[index_letra])

            senha.push(letra)

            arr_letra.splice(index_letra,1);
            
            if(senha.length == rnCaracteres.value) {
                break;
            }
        }

    }

    outResponse.textContent = senha.join('')
})

rnCaracteres.addEventListener('change', () => {
    num_range.textContent = rnCaracteres.value
})

btnCopiar.addEventListener("click", () => {
    outResponse.select()

    document.execCommand('copy')

    window.getSelection().removeAllRanges()

    mensegeCopy.style.visibility = "visible"
    
    setTimeout( () => {
        mensegeCopy.style.visibility = "hidden"
      }, 1500);
})
