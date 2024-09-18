const findFoodButton = document.getElementById('find-food-button');
const loader = document.getElementById('loader');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

findFoodButton.addEventListener('click', () => {
    loader.style.display = 'flex';
    document.body.classList.add('loading');

    let loadingTime = 0;
    const interval = setInterval(() => {
        loadingTime += 1;
        if (loadingTime >= 2) {
            clearInterval(interval);
            loader.style.display = 'none';
            document.body.classList.remove('loading');
            modal.style.display = 'flex';
        }
    }, 1000);
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('load', function() {
    document.getElementById('loader-container').style.display = 'flex';
    let loadingTime = 0;
    const interval = setInterval(() => {
        loadingTime += 1;
        if (loadingTime >= 3) {
            clearInterval(interval);
            document.getElementById('loader-container').style.display = 'none';

            document.getElementById('index.html').style.display = 'flex';
        }
    }, 1000);

});
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelector('.excellent-button').addEventListener('click', function() {
    createConfetti(200);
});
document.querySelector('.btn_confit').addEventListener('click', function() {
    createConfetti(200);
});

function createConfetti(count) {
    const confettiContainer = document.querySelector('.confetti-container');

    for (let i = 0; i < count; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');

        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.top = `${Math.random() * -10}vh`;
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = `${Math.random() * 20 + 10}px`;
        confettiPiece.style.backgroundColor = getRandomColor();

        confettiPiece.style.animationDelay = `${Math.random() * 0.7}s`;
        confettiPiece.style.animationDuration = `${Math.random() * 1 + 1}s`;

        confettiContainer.appendChild(confettiPiece);

        setTimeout(() => {
            confettiPiece.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#00f', '#0f0'];
    return colors[Math.floor(Math.random() * colors.length)];
}

const marqueeContainer = document.querySelector('.marquee-container');
const marqueeContent = document.querySelector('.marquee-content');

marqueeContent.innerHTML += marqueeContent.innerHTML;

let scrollAmount = 0;
let speed = 1;

function marqueeAnimation() {
    scrollAmount -= speed;
    if (Math.abs(scrollAmount) >= marqueeContent.scrollWidth / 2) {
        scrollAmount = 0;
    }
    marqueeContent.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(marqueeAnimation);
}

marqueeAnimation();

const colors = ['#FFBE21', '#4756DF', '#3EC1F3', '#FF7235', '#BB7259', '#34C759', '#FF2D55', '#AF52DE'];

const originalCard = document.querySelector('.carousel-card');
const container = document.querySelector('.marquee-content');

function createCards(count) {
    for (let i = 0; i < count; i++) {
        const newCard = originalCard.cloneNode(true);
        const color = colors[i % colors.length];
        newCard.style.borderTop = `10px solid ${color}`;
        container.appendChild(newCard);
    }
    marqueeContent.innerHTML += marqueeContent.innerHTML;
}

createCards(10);