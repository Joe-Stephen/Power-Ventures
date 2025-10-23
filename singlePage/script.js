// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.product-card, .feature, .contact-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter');
if (newsletterForm) {
    const newsletterInput = newsletterForm.querySelector('input[type="email"]');
    const newsletterBtn = newsletterForm.querySelector('button');
    
    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = newsletterInput.value;
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        const originalText = newsletterBtn.textContent;
        newsletterBtn.textContent = 'Subscribing...';
        newsletterBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for subscribing to our newsletter!');
            newsletterInput.value = '';
            newsletterBtn.textContent = originalText;
            newsletterBtn.disabled = false;
        }, 1500);
    });
}

// Quick view button functionality
document.querySelectorAll('.product-overlay .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        alert(`Quick view for: ${productName}\n\nThis would typically open a modal with detailed product information.`);
    });
});

// Add active class to current navigation item
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Hero Carousel Functionality
let currentHeroSlide = 1;
const heroSlides = document.querySelectorAll('.carousel-slide');
const heroDots = document.querySelectorAll('.dot');

function showHeroSlide(n) {
    if (n > heroSlides.length) currentHeroSlide = 1;
    if (n < 1) currentHeroSlide = heroSlides.length;
    
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));
    
    heroSlides[currentHeroSlide - 1].classList.add('active');
    heroDots[currentHeroSlide - 1].classList.add('active');
}

function currentSlide(n) {
    currentHeroSlide = n;
    showHeroSlide(currentHeroSlide);
}

// Auto-advance hero carousel
setInterval(() => {
    currentHeroSlide++;
    showHeroSlide(currentHeroSlide);
}, 5000);

// Testimonials Carousel Functionality
let currentTestimonialSlide = 1;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');

function showTestimonialSlide(n) {
    if (n > testimonialSlides.length) currentTestimonialSlide = 1;
    if (n < 1) currentTestimonialSlide = testimonialSlides.length;
    
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    testimonialSlides[currentTestimonialSlide - 1].classList.add('active');
    testimonialDots[currentTestimonialSlide - 1].classList.add('active');
}

function currentTestimonial(n) {
    currentTestimonialSlide = n;
    showTestimonialSlide(currentTestimonialSlide);
}

// Auto-advance testimonials carousel
setInterval(() => {
    currentTestimonialSlide++;
    showTestimonialSlide(currentTestimonialSlide);
}, 5000);

// Product Category Filtering
document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            if (category === 'all') {
                // Show all categories
                categorySections.forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                // Hide all categories first
                categorySections.forEach(section => {
                    section.style.display = 'none';
                });
                // Show selected category
                const targetSection = document.getElementById(category);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            }
        });
    });
});

// Pause brand carousel on hover
const brandsTrack = document.querySelector('.brands-track');
if (brandsTrack) {
    brandsTrack.addEventListener('mouseenter', () => {
        brandsTrack.style.animationPlayState = 'paused';
    });
    
    brandsTrack.addEventListener('mouseleave', () => {
        brandsTrack.style.animationPlayState = 'running';
    });
}