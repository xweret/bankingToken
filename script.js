// function createToken() {
//     let tokenlargo = (Math.random() * 900000 ) 
//     var token = Math.trunc(tokenlargo)
//     // console.log(token)
//     }



let contador = 0
let intervalo = setInterval(() => {
    function cambiarDom(){
        let tokenlargo = (Math.random() * 900000);
        const Token = (Math.trunc(tokenlargo));
        const contenedorH2 = document.querySelector(".numeros").innerText = JSON.stringify(Token)
        console.log(Token)
    }
    cambiarDom()
    if (contador == 105){
        clearInterval(intervalo);
    }
    contador += 0;
},10000)

    let progressBar = document.querySelector("#barp")
    let intervaloB = 0 
progressBar.value = 0 

let intervaloBarra = setInterval (() => {
    progressBar.value = intervaloB
    intervaloB++
    console.log(intervaloB)
}, 290)
if (intervaloB == 34){
    intervaloB = 0

}






