const chiffres = document.querySelectorAll('.bouton')
const ecran = document.querySelector('.ecran')
const boutonEgal = document.querySelector('.egal')

let resultat = 0
ecran.innerHTML = resultat

function calcule(){

}

chiffres.forEach((chiffre)=>{
    chiffre.addEventListener('click',()=>{
        console.log(chiffre.id)
        ecran.innerHTML += chiffre.id

    })
})

boutonEgal.addEventListener('click',()=>{
    calcule();

})
