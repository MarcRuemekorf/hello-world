const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }

        if(!entry.isIntersecting) {
            entry.target.classList.remove('active');
        }
    });
});

const sections = document.querySelectorAll('.fade-in');
sections.forEach((element) => observer.observe(element));