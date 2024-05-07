// Ricreate un carosello, ma questa volta usando un array di oggeti.
// Ogni slide è rappresentata da un oggetto contenente:
// percorso immagine
// titolo
// descrizione

// :rock: MILESTONE #0
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo 
// l'immagine grande in modo da poter stilizzare lo slider.

// :rock: MILESTONE #1
// Ora rimuoviamo i contenuti statici dall'HTML. Nell'index non devono essere presenti contenuti (immagini o testi).
// Costruiamo noi delle slide da aggiungere in pagina tramite un ciclo sul nostro array.
// Si tratta di un lavoro simile a quanto fatto ieri per "our-team": per ogni elemento in array creo dell'HTML e lo aggiungo in pagina.

// :rock: MILESTONE #2
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// :rock: MILESTONE #3
// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve 
// attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.


// :gift: BONUS #1
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// :gift: BONUS #2
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// :gift: BONUS #3
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.



// funzione per stampare in pagina
function stampaInPagina (titolo, descrizione, immagine){
    return  `
    <img class="img-w" src="./${immagine}" alt="">
    <div class="my-fixed-txt">
        <h2>${titolo}</h2>
        ${descrizione}
    </div>`
}

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let container = document.getElementById(`container`) 

for(let i = 0; i < images.length; i++){
    let slide = images[i]
    container.innerHTML = stampaInPagina(membro.nome, membro.ruolo, membro.immagine)
}








// let myImgs = document.getElementsByClassName(`img-w`)

// let imgVisualizzata = 0
// let ultimaImg = myImgs.length - 1
// let nextImg

// document.getElementById(`btn-down`).addEventListener(`click`, function(){
//     myImgs[imgVisualizzata].classList.remove(`show`)
//     if(imgVisualizzata < myImgs.length - 1){
//         imgVisualizzata++
//     } else{
//         imgVisualizzata = 0
//     }
//     myImgs[imgVisualizzata].classList.add(`show`)
// })

// document.getElementById(`btn-up`).addEventListener(`click`, function(){
//     myImgs[imgVisualizzata].classList.remove(`show`)

//     if(imgVisualizzata == 0){
//         console.log(`sei sulla 0`)
//         imgVisualizzata = ultimaImg
//     }else{
//         console.log(`non sei sulla 0`)
//         imgVisualizzata--
//     }
//     myImgs[imgVisualizzata].classList.add(`show`)

// })



