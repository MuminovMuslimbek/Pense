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
    createConfetti(100);
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