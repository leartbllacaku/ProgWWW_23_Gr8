// const card1 = document.getElementById("card1").style.backdropFilter = "blur(10px)"

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

function blur(card, ...other){
    card.addEventListener("mouseover", e => {
        other.forEach(element => {
           element.style.backdropFilter = "blur(10px)" 
        });
    })
}

blur(card1, card2, card3, card4)
blur(card2, card1, card3, card4)
blur(card3, card1, card2, card4)
blur(card4, card1, card2, card3)