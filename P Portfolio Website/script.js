document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.page');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.75 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
