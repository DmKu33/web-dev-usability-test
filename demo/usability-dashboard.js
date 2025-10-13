// fade-in animation for task cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.task-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
});

function toggleDetails(button) {
    const card = button.closest('.task-card');
    const details = card.querySelector('.task-details');
    
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        button.textContent = 'View Details ▼';
    } else {
        details.classList.add('expanded');
        button.textContent = 'Hide Details ▲';
    }
}

