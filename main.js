const chiffres = document.querySelectorAll('.bouton')
const ecran = document.querySelector('.ecran')


const boutonEgal = document.querySelector('.egal')

let resultat = 0
ecran.innerHTML = resultat

function calcule(){


   resultat = eval(ecran.innerHTML)
    ecran.innerHTML = resultat


}

chiffres.forEach((chiffre)=>{
    chiffre.addEventListener('click',()=>{

        if(ecran.innerHTML == '0'){
            ecran.innerHTML = chiffre.id

        }else{
            ecran.innerHTML += chiffre.id

        }


    })
})

boutonEgal.addEventListener('click',()=>{
    calcule();

})
