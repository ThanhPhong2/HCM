// Initialize Swiper
const swiper = new Swiper('.hero-slider', {
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true
});

// Typing effect for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
};

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-content h1');
    const subtitle = document.querySelector('.hero-content .subtitle');
    if (title && subtitle) {
        setTimeout(() => {
            typeWriter(title, title.textContent);
        }, 500);
        setTimeout(() => {
            typeWriter(subtitle, subtitle.textContent);
        }, 2000);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Timeline animation - ensure all timeline items are visible
const timelineItems = document.querySelectorAll('.timeline-item');

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.footer-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        gsap.to(hero, {
            y: scrolled * 0.5,
            duration: 0.5,
            ease: 'power2.out'
        });
    }
});

// Card hover effects with GSAP
document.querySelectorAll('.outcome-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Image hover effects
document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
        gsap.to(wrapper.querySelector('.floating-image'), {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    wrapper.addEventListener('mouseleave', () => {
        gsap.to(wrapper.querySelector('.floating-image'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// List item hover effects
document.querySelectorAll('.animated-list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            x: 10,
            backgroundColor: 'rgba(196, 30, 58, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            backgroundColor: 'rgba(196, 30, 58, 0.05)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Navbar Scroll Effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (!nav) return; // Prevent error if nav does not exist
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        nav.classList.remove('scrolled');
        return;
    }

    if (currentScroll > lastScroll) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
        nav.classList.add('scrolled');
    }

    lastScroll = currentScroll;
});

// Image Modal and Carousel functionality
const modalOverlay = document.querySelector('.image-modal-overlay');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close-button');
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let currentTimelineItem = null;
let currentImageIndex = 0;
let currentImages = [];

// Function to update modal content
function updateModalContent(imageIndex) {
    if (!currentTimelineItem || !currentImages.length) return;
    
    const imageData = currentImages[imageIndex];
    modalImage.src = imageData.src;
    modalImage.alt = imageData.alt;
    modalTitle.textContent = currentTimelineItem.querySelector('h3').textContent;
    modalDescription.textContent = imageData.caption || currentTimelineItem.querySelector('p').textContent;
    
    // Update indicators
    updateIndicators(imageIndex);
}

// Function to update carousel indicators
function updateIndicators(activeIndex) {
    indicatorsContainer.innerHTML = '';
    currentImages.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${index === activeIndex ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            currentImageIndex = index;
            updateModalContent(index);
        });
        indicatorsContainer.appendChild(indicator);
    });
}

// Function to show next/previous image
function showNextImage(direction) {
    if (!currentImages.length) return;
    
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    updateModalContent(currentImageIndex);
}

// Event listeners for carousel buttons
prevButton.addEventListener('click', () => showNextImage(-1));
nextButton.addEventListener('click', () => showNextImage(1));

// Event listeners for timeline images
document.querySelectorAll('.timeline-item').forEach(timelineItem => {
    const images = Array.from(timelineItem.querySelectorAll('.timeline-image')).map(imgWrapper => ({
        src: imgWrapper.querySelector('img').src,
        alt: imgWrapper.querySelector('img').alt,
        caption: imgWrapper.querySelector('.image-caption')?.textContent
    }));

    timelineItem.querySelector('.timeline-image').addEventListener('click', () => {
        currentTimelineItem = timelineItem;
        currentImages = images;
        currentImageIndex = 0;
        
        updateModalContent(0);
        modalOverlay.classList.add('visible');
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modalOverlay.classList.remove('visible');
    currentTimelineItem = null;
    currentImages = [];
    currentImageIndex = 0;
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('visible');
        currentTimelineItem = null;
        currentImages = [];
        currentImageIndex = 0;
    }
});

// Prevent modal content from closing modal
document.querySelector('.image-modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
}); 