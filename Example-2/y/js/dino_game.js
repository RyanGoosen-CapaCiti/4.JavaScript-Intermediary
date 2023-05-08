//Variables
const car = document.getElementById('car');
const books = document.getElementById('books');
const score = document.getElementById('score');

function jump() {
    car.classList.add('jump-animation');
    setTimeout(() => {
        car.classList.remove        ('jump-animation');
    }, 500); //500 is how long the jump is
}

document.addEventListener('keypress', () => {
    if(!car.classList.contains('jump-animation')) {
        jump();  
    } 
});

setInterval(() => {
    score.innerText++;

    const carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
    const booksLeft = parseInt(window.getComputedStyle(books).getPropertyValue('left'));
    
    if (booksLeft < 0) {
        books.style.display = 'none';
    } else {
        books.style.display = '';
    }

    if (booksLeft < 50 && booksLeft > 0 && carTop > 150){
        alert("Score: " + score.innerText + "\n Play again?");
        location.reload();
    }


}, 50);