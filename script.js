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
const DELIVERY_FEE = 15; // رسوم التوصيل 15 درهم

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
    showNotification(`${item.name} added to cart!`, 'default');
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

// Calculate cart subtotal
function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Calculate total with delivery
function calculateTotal() {
    return calculateSubtotal() + DELIVERY_FEE;
}

// Display cart items in modal
function displayCart() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const cartSubtotalSpan = document.getElementById('cartSubtotal');
    const cartTotalSpan = document.getElementById('cartTotal');
    const deliveryFeeSpan = document.getElementById('deliveryFee');
    
    if (!cartContainer || !cartSubtotalSpan || !cartTotalSpan) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="text-align: center; color: var(--light-text);">Your cart is empty.</p>';
        cartSubtotalSpan.textContent = '0.00';
        if (deliveryFeeSpan) deliveryFeeSpan.textContent = DELIVERY_FEE.toFixed(2);
        cartTotalSpan.textContent = DELIVERY_FEE.toFixed(2);
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
    const subtotal = calculateSubtotal();
    cartSubtotalSpan.textContent = subtotal.toFixed(2);
    if (deliveryFeeSpan) deliveryFeeSpan.textContent = DELIVERY_FEE.toFixed(2);
    cartTotalSpan.textContent = calculateTotal().toFixed(2);
}

// ============================================
// Show Notification (مطورة لدعم الأنواع)
// ============================================
function showNotification(message, type = 'default') {
    // نشوفو واش كاينة نوتيفيكيشن قديمة و نحيدوها
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    let bgColor = 'var(--primary-color)';
    if (type === 'success') bgColor = '#27ae60';
    else if (type === 'error') bgColor = '#e74c3c';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
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
const backToCartBtn = document.getElementById('backToCartBtn');
const checkoutForm = document.getElementById('checkoutForm');

if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if (cartModal) {
            displayCart();
            cartModal.style.display = 'block';
            // إخفاء الفورم وإظهار زر checkout عند فتح السلة
            if (checkoutForm) checkoutForm.style.display = 'none';
            if (checkoutBtn) checkoutBtn.style.display = 'block';
            if (backToCartBtn) backToCartBtn.style.display = 'none';
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

// Checkout button - يظهر فورم المعلومات تحت السلة
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // إظهار فورم المعلومات تحت السلة مباشرة
        if (checkoutForm) {
            checkoutForm.style.display = 'block';
            checkoutForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        // إخفاء زر checkout وإظهار زر العودة
        checkoutBtn.style.display = 'none';
        if (backToCartBtn) backToCartBtn.style.display = 'block';
    });
}

// Back to cart button - يخفي فورم المعلومات
if (backToCartBtn) {
    backToCartBtn.addEventListener('click', () => {
        if (checkoutForm) checkoutForm.style.display = 'none';
        checkoutBtn.style.display = 'block';
        backToCartBtn.style.display = 'none';
    });
}

// Delivery form submission - إرسال الطلب عبر WhatsApp
const deliveryForm = document.getElementById('deliveryForm');
if (deliveryForm) {
    deliveryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // جمع معلومات العميل
        const customerName = document.getElementById('customerName').value;
        const customerPhone = document.getElementById('customerPhone').value;
        const customerAddress = document.getElementById('customerAddress').value;
        const orderNotes = document.getElementById('orderNotes').value;
        
        // التحقق من المعلومات
        if (!customerName || !customerPhone || !customerAddress) {
            alert('Please fill in all required fields');
            return;
        }
        
        // تكوين رسالة الطلب
        let orderMessage = `🍽️ *New Order from Dar Tlaytmas*\n\n`;
        orderMessage += `👤 *Customer:* ${customerName}\n`;
        orderMessage += `📞 *Phone:* ${customerPhone}\n`;
        orderMessage += `📍 *Address:* ${customerAddress}\n`;
        
        if (orderNotes) {
            orderMessage += `📝 *Notes:* ${orderNotes}\n`;
        }
        
        orderMessage += `\n🛒 *Order Items:*\n`;
        
        cart.forEach((item, index) => {
            orderMessage += `${index + 1}. ${item.name} x${item.quantity} - ${item.price * item.quantity} MAD\n`;
        });
        
        const subtotal = calculateSubtotal();
        orderMessage += `\n💰 *Subtotal:* ${subtotal.toFixed(2)} MAD`;
        orderMessage += `\n🚚 *Delivery:* ${DELIVERY_FEE.toFixed(2)} MAD`;
        orderMessage += `\n💵 *Total:* ${calculateTotal().toFixed(2)} MAD`;
        
        orderMessage += `\n\n⏱️ *Estimated delivery time:* 45-60 minutes`;
        orderMessage += `\n✅ Thank you for choosing Dar Tlaytmas!`;
        
        // تشفير الرسالة وإرسالها عبر WhatsApp
        const phoneNumber = '212600000000'; // ضع هنا رقم الواتساب الخاص بالمطعم
        const encodedMessage = encodeURIComponent(orderMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // فتح WhatsApp في نافذة جديدة
        window.open(whatsappUrl, '_blank');
        
        // إفراغ السلة بعد الطلب
        cart = [];
        saveCart();
        
        // إغلاق المودال
        cartModal.style.display = 'none';
        
        // إظهار رسالة نجاح
        showNotification('Order sent successfully! Check WhatsApp to confirm.', 'success');
        
        // إعادة تعيين الفورم
        deliveryForm.reset();
        
        // إعادة ضبط حالة الأزرار
        if (checkoutForm) checkoutForm.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.display = 'block';
        if (backToCartBtn) backToCartBtn.style.display = 'none';
    });
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
// Contact Form Handling (ملغى - مستبدل بنموذج الحجز)
// ============================================
// ملاحظة: تم إلغاء هذا الجزء لأننا استبدلناه بنموذج الحجز الجديد
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert('Thank you for your message! We will get back to you soon. (Demo Mode)');
//         contactForm.reset();
//     });
// }

// ============================================
// Reservation Form Functionality (الجديد)
// ============================================
function initializeReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
        dateInput.min = today;
        
        // Set default date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }

    // Set default time to 19:00 (7 PM)
    const timeInput = document.getElementById('resTime');
    if (timeInput) {
        timeInput.value = '19:00';
    }

    // Handle form submission
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('resName').value;
        const email = document.getElementById('resEmail').value;
        const phone = document.getElementById('resPhone').value;
        const guests = document.getElementById('resGuests').value;
        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const occasion = document.getElementById('resOccasion').value;
        const requests = document.getElementById('resRequests').value;
        const newsletter = document.getElementById('resNewsletter').checked;

        // Validate form
        if (!name || !email || !phone || !guests || !date || !time) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Phone validation (Moroccan phone number)
        const phoneRegex = /^(\+212|0)[5-7]\d{8}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid Moroccan phone number (e.g., 0612345678 or +212612345678)');
            return;
        }

        // Format date for display
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Create reservation message for WhatsApp
        let reservationMessage = `🍽️ *New Table Reservation - Dar Tlaytmas*\n\n`;
        reservationMessage += `👤 *Name:* ${name}\n`;
        reservationMessage += `📧 *Email:* ${email}\n`;
        reservationMessage += `📞 *Phone:* ${phone}\n`;
        reservationMessage += `👥 *Guests:* ${guests} ${guests == 1 ? 'person' : 'people'}\n`;
        reservationMessage += `📅 *Date:* ${formattedDate}\n`;
        reservationMessage += `⏰ *Time:* ${time}\n`;
        
        if (occasion && occasion !== '') {
            reservationMessage += `🎉 *Occasion:* ${occasion.charAt(0).toUpperCase() + occasion.slice(1)}\n`;
        }
        
        if (requests) {
            reservationMessage += `📝 *Special Requests:* ${requests}\n`;
        }
        
        reservationMessage += `📱 *WhatsApp Updates:* ${newsletter ? 'Yes' : 'No'}\n`;
        
        reservationMessage += `\n⏱️ *Please confirm this reservation within 30 minutes*`;
        reservationMessage += `\n📍 *Location:* Agadir, Morocco`;
        reservationMessage += `\n✅ Thank you for choosing Dar Tlaytmas!`;

        // Send via WhatsApp
        const phoneNumber = '212600000000'; // غير الرقم هنا
        const encodedMessage = encodeURIComponent(reservationMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success message
        showNotification('Reservation request sent! Check WhatsApp to confirm.', 'success');

        // Reset form but keep default values
        reservationForm.reset();
        
        // Reset date and time to defaults
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }
        if (timeInput) {
            timeInput.value = '19:00';
        }
    });

    // Add real-time validation for phone number
    const phoneInput = document.getElementById('resPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value;
            // Remove any non-digit characters except +
            value = value.replace(/[^\d+]/g, '');
            
            // Format for Moroccan numbers
            if (value.startsWith('+212')) {
                if (value.length > 13) value = value.slice(0, 13);
            } else if (value.startsWith('0')) {
                if (value.length > 10) value = value.slice(0, 10);
            } else {
                if (value.length > 9) value = value.slice(0, 9);
            }
            
            e.target.value = value;
        });
    }

    // Validate date (cannot be in the past)
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            const selectedDate = new Date(e.target.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                alert('Please select a future date');
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                dateInput.value = tomorrow.toISOString().split('T')[0];
            }
        });
    }

    // Validate time (between 12:00 and 23:00)
    if (timeInput) {
        timeInput.addEventListener('change', (e) => {
            const time = e.target.value;
            const hour = parseInt(time.split(':')[0]);
            
            if (hour < 12) {
                alert('Restaurant opens at 12:00 PM');
                timeInput.value = '12:00';
            } else if (hour > 23) {
                alert('Restaurant closes at 12:00 AM');
                timeInput.value = '23:00';
            }
        });
    }
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
    
    // ✅ تفعيل نموذج الحجز الجديد
    initializeReservationForm();
    
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
 


