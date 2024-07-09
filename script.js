document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const makeVisible = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(makeVisible, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});