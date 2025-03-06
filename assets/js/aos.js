document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".aos");
    
    function animateOnScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add("aos-active");
            }
        });
    }

    document.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});
