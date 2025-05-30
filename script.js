document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations for Header
    gsap.from('.header-content h1', { opacity: 0, y: 60, duration: 1.2, delay: 0.5 });
    gsap.from('.header-content h2', { opacity: 0, y: 60, duration: 1.2, delay: 0.7 });
    gsap.from('.header-content p', { opacity: 0, y: 60, duration: 1.2, delay: 0.9 });
    gsap.from('.header-btn', { opacity: 0, y: 60, duration: 1.2, delay: 1.1 });

    // GSAP Animations for Navbar
    gsap.from('.navbar a', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        stagger: 0.1, 
        delay: 1.5 
    });

    // GSAP ScrollTrigger for Biography/
    gsap.from('.bio-image', { 
        opacity: 0, 
        x: -120, 
        duration: 1.2, 
        scrollTrigger: { 
            trigger: '#biography', 
            start: 'top 75%' 
        } 
    });
    gsap.from('.bio-text', { 
        opacity: 0, 
        x: 120, 
        duration: 1.2, 
        scrollTrigger: { 
            trigger: '#biography', 
            start: 'top 75%' 
        } 
    });

    // GSAP ScrollTrigger for Thoughts
    gsap.from('.thought-card', { 
        opacity: 0, 
        y: 60, 
        duration: 1.2, 
        stagger: 0.2, 
        scrollTrigger: { 
            trigger: '#thoughts', 
            start: 'top 75%' 
        } 
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
// GSAP ScrollTrigger for Legacy
gsap.from('.legacy-item', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#legacy', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Quotes
gsap.from('.quote', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#quotes', 
        start: 'top 75%' 
    } 
});

// Quote Slider
const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.classList.remove('active');
        if (i === index) {
            quote.classList.add('active');
            gsap.fromTo(quote, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 1 }
            );
        }
    });
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}

showQuote(currentQuote);
setInterval(nextQuote, 6000);

// GSAP ScrollTrigger for Gallery
gsap.from('.gallery-image', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#gallery', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Timeline
gsap.from('.timeline-item', { 
    opacity: 0, 
    x: (index) => index % 2 === 0 ? -120 : 120, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#timeline', 
        start: 'top 75%' 
    } 
});
// GSAP ScrollTrigger for Articles
gsap.from('.article', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#articles', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Resources
gsap.from('.resource-item', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#resources', 
        start: 'top 75%' 
    } 
});

// Hover Effects for Articles
document.querySelectorAll('.article').forEach(article => {
    article.addEventListener('mouseenter', () => {
        gsap.to(article, { scale: 1.05, duration: 0.3 });
    });
    article.addEventListener('mouseleave', () => {
        gsap.to(article, { scale: 1, duration: 0.3 });
    });
});

// Hover Effects for Resources
document.querySelectorAll('.resource-item').forEach(resource => {
    resource.addEventListener('mouseenter', () => {
        gsap.to(resource, { scale: 1.05, duration: 0.3 });
    });
    resource.addEventListener('mouseleave', () => {
        gsap.to(resource, { scale: 1, duration: 0.3 });
    });
});

// Individual Animations for Articles
document.querySelectorAll('.article').forEach((article, index) => {
    gsap.from(article, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: article,
            start: 'top 80%'
        }
    });
});

// Individual Animations for Resources
document.querySelectorAll('.resource-item').forEach((resource, index) => {
    gsap.from(resource, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: resource,
            start: 'top 80%'
        }
    });
});
// GSAP ScrollTrigger for Events
gsap.from('.event-item', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#events', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Poetry
gsap.from('.poem', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    stagger: 0.2, 
    scrollTrigger: { 
        trigger: '#poetry', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Footer
gsap.from('footer', { 
    opacity: 0, 
    y: 60, 
    duration: 1.2, 
    scrollTrigger: { 
        trigger: 'footer', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Footer Links
gsap.from('.footer-links a', { 
    opacity: 0, 
    y: 30, 
    duration: 0.8, 
    stagger: 0.1, 
    scrollTrigger: { 
        trigger: 'footer', 
        start: 'top 75%' 
    } 
});

// GSAP ScrollTrigger for Social Icons
gsap.from('.social-icon', { 
    opacity: 0, 
    y: 30, 
    duration: 0.8, 
    stagger: 0.1, 
    scrollTrigger: { 
        trigger: 'footer', 
        start: 'top 75%' 
    } 
});

// Hover Effects for Events
document.querySelectorAll('.event-item').forEach(event => {
    event.addEventListener('mouseenter', () => {
        gsap.to(event, { scale: 1.05, duration: 0.3 });
    });
    event.addEventListener('mouseleave', () => {
        gsap.to(event, { scale: 1, duration: 0.3 });
    });
});

// Hover Effects for Poems
document.querySelectorAll('.poem').forEach(poem => {
    poem.addEventListener('mouseenter', () => {
        gsap.to(poem, { scale: 1.05, duration: 0.3 });
    });
    poem.addEventListener('mouseleave', () => {
        gsap.to(poem, { scale: 1, duration: 0.3 });
    });
});

// Individual Animations for Events
document.querySelectorAll('.event-item').forEach((event, index) => {
    gsap.from(event, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: event,
            start: 'top 80%'
        }
    });
});

// Individual Animations for Poems
document.querySelectorAll('.poem').forEach((poem, index) => {
    gsap.from(poem, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: poem,
            start: 'top 80%'
        }
    });
});