// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// ============================================
// Menu Items Data
// ============================================
const menuItems = [
    {
        id: 6,
        name: 'Rfissa',
        description: 'Slow‑cooked chicken with msemen and lentils',
        price: 140,
        priceText: '140 MAD',
        image: 'img/rfisa.jpg',
        badge: 'Homemade'
    },
    {
        id: 2,
        name: 'Lamb with Prunes',
        description: 'Slow‑cooked lamb with Moroccan spices',
        price: 150,
        priceText: '150 MAD',
        image: 'img/lham bar9o9.jpg',
        badge: 'Traditional'
    },
    {
        id: 3,
        name: 'Vegetable Couscous',
        description: 'Steamed semolina with seasonal vegetables',
        price: 100,
        priceText: '100 MAD',
        image: 'img/koskos.jpg',
        badge: 'Traditional'
    }, 
    {
        id: 9,
        name: 'Sfa',
        description: 'Delicious Moroccan specialty dish',
        price: 160,
        priceText: '160 MAD',
        image: 'img/sfa.jpg',
        badge: 'Special'
    },
    {
        id: 5,
        name: 'Harira Soup',
        description: 'Authentic Moroccan soup with lentils & herbs',
        price: 80,
        priceText: '80 MAD',
        image: 'img/harira.jpg',
        badge: 'Classic'
    },
    {
        id: 1,
        name: 'Chicken Tagine',
        description: 'Tender chicken tagine with preserved olives',
        price: 120,
        priceText: '120 MAD',
        image: 'img/tagin djaj.jpg',
        badge: 'Signature'
    },
    {
        id: 4,
        name: 'Chicken Pastilla',
        description: 'Layered pastry with chicken, almonds, and cinnamon',
        price: 150,
        priceText: '150 MAD',
        image: 'img/bastila djaj.jpg',
        badge: 'Special'
    },
    {
        id: 8,
        name: 'Fish Pastilla',
        description: 'Layered pastry with fish, almonds, and Moroccan spices',
        price: 160,
        priceText: '160 MAD',
        image: 'img/bastila hot.jpg',
        badge: 'Special'
    },
    {
        id: 7,
        name: 'Tangya',
        description: 'Authentic Marrakech-style Tangia, slow-cooked with traditional spices',
        price: 130,
        priceText: '130 MAD',
        image: 'img/tangiya.jpg',
        badge: 'Special'
    },
    
];

// ============================================
// Gallery Items Data
// ============================================
const galleryItems = [
    {
        image: 'img/1.jpg',
        title: 'Traditional moroccan sweet'
    },
    {
        image: 'img/2.jpg',
        title: 'Moroccan Tea'
    },
    {
        image: 'img/3.jpg',
        title: 'Moroccan pancakes'
    },
    {
        image: 'img/jami3 twajn.jpg',
        title: 'Tagine'
    },
    {
        image: 'img/5.jpg',
        title: 'breakfast morocco'
    },
    {
        image: 'img/6.jpg',
        title: 'Restaurant Interior'
    }
];

// ============================================
// Shopping Cart Functionality
// ============================================
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in the icon
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.style.display = 'inline';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    saveCart();
    showNotification(`${item.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    displayCart();
}

// Update item quantity
function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            displayCart();
        }
    }
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Display cart items in modal
function displayCart() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const cartTotalSpan = document.getElementById('cartTotal');
    
    if (!cartContainer || !cartTotalSpan) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="text-align: center; color: var(--light-text);">Your cart is empty.</p>';
        cartTotalSpan.textContent = '0.00';
        return;
    }
    
    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/60'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${item.price} MAD</span>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.id})"></i>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    cartTotalSpan.textContent = calculateTotal().toFixed(2);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ============================================
// Cart Modal Functionality
// ============================================
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeModal = document.querySelector('.close-modal');
const checkoutBtn = document.getElementById('checkoutBtn');

if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if (cartModal) {
            displayCart();
            cartModal.style.display = 'block';
        }
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Checkout process
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const confirmCheckout = confirm('This is a demo. In a real application, you would proceed to payment. Continue?');
        if (confirmCheckout) {
            alert('Thank you for your order! (Demo Mode - No actual order was placed)');
            cart = [];
            saveCart();
            cartModal.style.display = 'none';
            displayCart();
        }
    });
}

// ============================================
// Booking Form
// ============================================
function addBookingForm() {
    const contactSection = document.querySelector('.contact-content');
    if (!contactSection) return;
    
    const bookingHTML = `
        <div class="booking-form">
            <h3>Book a Table</h3>
            <form id="bookingForm">
                <div class="form-group">
                    <input type="text" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="tel" placeholder="Phone Number" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" required>
                    </div>
                    <div class="form-group">
                        <input type="time" required>
                    </div>
                </div>
                <div class="form-group">
                    <select required>
                        <option value="">Number of Guests</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea placeholder="Special Requests (Optional)" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Book Now</button>
            </form>
        </div>
    `;
    
    contactSection.insertAdjacentHTML('afterend', bookingHTML);
    
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Booking request received! (Demo Mode - We will contact you soon)');
            bookingForm.reset();
        });
    }
}

// ============================================
// Load Menu Items
// ============================================
function loadMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200'">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">${item.priceText}</span>
                    <span class="badge">${item.badge}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================
// Load Gallery Items
// ============================================
function loadGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryItems.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300'">
            <div class="gallery-overlay">
                <span>${item.title}</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        alert('Thank you for your message! We will get back to you soon. (Demo Mode)');
        contactForm.reset();
    });
}

// ============================================
// Active Navigation Link on Scroll
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Smooth scrolling for navigation links
// ============================================
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

// ============================================
// Initialize everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    loadGalleryItems();
    loadCart();
    addBookingForm();
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
});

// ============================================
// Lazy loading for images
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
} else {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// Animation styles
// ============================================
const style = document.createElement('style');
style.textContent = `
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

