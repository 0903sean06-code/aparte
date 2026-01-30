// Cart functionality
let cart = [];
let cartCount = 0;

// Product data
const products = {
    liftbalm: {
        name: 'LIFTBALM',
        price: 9900,
        originalPrice: 13000,
        image: 'liftbalm.png'
    },
    bardymist: {
        name: 'BARDYMIST',
        price: 24900,
        originalPrice: 28000,
        image: 'bardymist.png'
    },
    frabell: {
        name: 'FRABELL',
        price: 33500,
        bundle: 66000,
        image: 'frabell.png'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeProductImages();
    setupCartButtons();
    setupSmoothScroll();
    setupScrollAnimations();
});

// Load product images
function initializeProductImages() {
    // LIFTBALM image
    const liftbalmImg = document.getElementById('liftbalm-img');
    if (liftbalmImg) {
        liftbalmImg.src = 'liftbalm.png';
        liftbalmImg.onerror = function() {
            this.parentElement.innerHTML = '<div class="placeholder-img"><span>💪💄</span></div>';
        };
    }
    
    // BARDYMIST image
    const bardymistImg = document.getElementById('bardymist-img');
    if (bardymistImg) {
        bardymistImg.src = 'bardymist.png';
        bardymistImg.onerror = function() {
            this.parentElement.innerHTML = '<div class="placeholder-img"><span>🏋️💦</span></div>';
        };
    }
}

// Setup cart buttons
function setupCartButtons() {
    const addButtons = document.querySelectorAll('.btn-add-cart');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productId = productCard.dataset.product;
            
            addToCart(productId);
            animateAddToCart(this);
        });
    });
}

// Add to cart
function addToCart(productId) {
    cartCount++;
    updateCartCount();
    
    // Show notification
    showNotification(`${productId.toUpperCase()} added to cart!`);
}

// Update cart count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.animation = 'none';
        setTimeout(() => {
            cartCountElement.style.animation = 'pulse 0.3s ease-in-out';
        }, 10);
    }
}

// Animate add to cart button
function animateAddToCart(button) {
    const originalText = button.textContent;
    button.textContent = 'Added! ✓';
    button.style.background = '#00d084';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1500);
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff006e;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        font-weight: 700;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(255, 0, 110, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Smooth scroll
function setupSmoothScroll() {
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
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe promo cards
    document.querySelectorAll('.promo-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console easter egg
console.log('%c APARTE ', 'background: #ff006e; color: white; font-size: 30px; font-weight: bold; padding: 10px;');
console.log('%c Focus Separately, Be Real You ', 'background: #0a0a0a; color: white; font-size: 14px; padding: 5px;');
console.log('포트폴리오 프로젝트 | Portfolio Project');
