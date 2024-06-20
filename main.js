
document.querySelectorAll('.character').forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('bg-yellow')) {
            card.classList.remove('bg-yellow');
            card.classList.add('bg-orange');
        } else if (card.classList.contains('bg-orange')) {
            card.classList.remove('bg-orange');
            card.classList.add('bg-red');
        } else if (card.classList.contains('bg-red')) {
            card.classList.remove('bg-red');
            card.classList.add('bg-yellow');
        } else {
            card.classList.add('bg-yellow');
        }
    });
});
