const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');

if (navbar) {
    const onScroll = () => {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

if (navlinks) {
    const onScroll = () => {
        navlinks.classList.toggle('sticky-links', window.scrollY > 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}