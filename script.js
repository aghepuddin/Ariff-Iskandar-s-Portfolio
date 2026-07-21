// Portfolio JavaScript - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu highlighting based on current page
    updateActiveMenu();

    // Add smooth scrolling
    addSmoothScroll();

    // Add animations on scroll
    observeElements();
    initHeroEffect();

});

// Update active menu item based on current page
function updateActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Smooth scrolling for internal links
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and other elements
    const elementsToObserve = document.querySelectorAll('.card, .project-card');
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Ribbon menu hover effect
function initRibbonMenu() {
    const ribbonMenu = document.querySelector('.ribbon-menu');
    if (ribbonMenu) {
        ribbonMenu.addEventListener('mouseenter', function() {
            this.style.left = '0';
        });
        ribbonMenu.addEventListener('mouseleave', function() {
            this.style.left = '-80px';
        });
    }
}

// Prevent ribbon menu from getting stuck on mobile
if (window.matchMedia('(max-width: 768px)').matches) {
    const ribbon = document.querySelector('.ribbon-menu');
    if (ribbon) {
        ribbon.style.position = 'static';
        ribbon.style.left = '0';
    }
}

// Handle responsive behavior
window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        const ribbon = document.querySelector('.ribbon-menu');
        if (ribbon) {
            ribbon.style.position = 'static';
            ribbon.style.left = '0';
        }
    }
});

// Utility: Scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.textContent = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        font-size: 24px;
        z-index: 999;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e74c3c';
        this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#3498db';
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Add fade-in animation to page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Performance: Lazy load images if needed
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

lazyLoadImages();

// Navigation tracking with analytics (optional)
function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_path': '/' + pageName,
            'page_title': pageName
        });
    }
}

// Export functions for external use
window.portfolioUtils = {
    trackPageView,
    lazyLoadImages,
    observeElements
};
// Hero transformation effect

function initHeroEffect(){
const hero=document.querySelector(".hero");
if(!hero) return;

// Desktop hover

hero.addEventListener("mouseenter",()=>{
hero.classList.add("active");
});
    
hero.addEventListener("mouseleave",()=>{
hero.classList.remove("active");
});


// Mobile touch
hero.addEventListener("touchstart",()=>{
hero.classList.toggle("active");
});

// Remove when scrolling

window.addEventListener("scroll",()=>{
hero.classList.remove("active");
});


}

console.log('Portfolio script loaded successfully!');
