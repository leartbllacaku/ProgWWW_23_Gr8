// const card1 = document.getElementById("card1").style.backdropFilter = "blur(10px)"

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

function blur(card, ...other){
    card.addEventListener("mouseover", e => {
        console.log("Okej Okej")
        other.forEach(element => {
           element.style.filter = "blur(3px)";
           element.style.transition = "all 0.6s" 
        });
    })
    card.addEventListener("mouseout", e => {
        other.forEach(element => {
           element.style.filter = "blur(0)"
           element.style.transition = "all 0.6s"  
        });
    })
}

blur(card1, card2, card3, card4)
blur(card2, card1, card3, card4)
blur(card3, card1, card2, card4)
blur(card4, card1, card2, card3)

document.getElementById('bookButoni').addEventListener('click', function() {
    // Change 'anotherPage.html' to the path of your target page
    window.location.href = 'book.html'})
document.getElementById('menuButoni').addEventListener('click', function() {
        // Change 'anotherPage.html' to the path of your target page
        window.location.href = 'menu.html'})

