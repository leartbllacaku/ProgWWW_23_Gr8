var mybutton = document.getElementById("scrollToTopBtn");
var canvas = document.getElementById("arrowCanvas");
var ctx = canvas.getContext("2d");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
        drawArrow();
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


function drawArrow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(10, 5);
    ctx.lineTo(5, 15);
    ctx.lineTo(15, 15);
    ctx.closePath();
    ctx.fill();
}

function smoothScrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}