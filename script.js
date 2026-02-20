/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Light color palette */
    --primary-color: #f8b042;
    --secondary-color: #e67e22;
    --accent-color: #27ae60;
    --text-color: #2c3e50;
    --light-text: #7f8c8d;
    --bg-color: #fef9f4;
    --light-bg: #fff5eb;
    --white: #ffffff;
    --shadow: 0 5px 20px rgba(0,0,0,0.05);
    --border-radius: 12px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-color);
    background-color: var(--bg-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
}

.section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 50px;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--primary-color);
    margin: 20px auto;
}

.bg-light {
    background-color: var(--light-bg);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn-primary:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-2px);
}

/* Top Bar */
.top-bar {
    background-color: var(--white);
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

.top-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.contact-info span {
    margin-right: 25px;
    color: var(--light-text);
    font-size: 0.9rem;
}

.contact-info i {
    color: var(--primary-color);
    margin-right: 8px;
}

.social-icons a {
    color: var(--light-text);
    margin-left: 15px;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: var(--primary-color);
}

/* Navigation */
header {
    background-color: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--text-color);
}

.logo span {
    color: var(--primary-color);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
    
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

.mobile-menu {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-color);
    cursor: pointer;
}

/* Hero Section */

.hero {
    min-height: 600px;
    height: 100vh;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),  
        rgba(0, 0, 0, 0.8)
    ), url('img/aaaa.jpg');  
    background-size: cover;
    background-position: center;
    background-attachment: fixed;  
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    color: white;  
}


.hero h1 {
    font-size: 6rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.dar {
    color: #2c3e50; 
}

.tlaytmas {
    color: #f8b042;
}
.hero h1 span {
    margin: 0 8px;
}


.hero .subtitle {
    font-size: 1rem;
    color: rgba(255,255,255,0.9);  
    margin-bottom: 40px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}


.hero .btn-outline {
    border-color: white;
    color: white;
}

.hero .btn-outline:hover {
    background-color: white;
    color: var(--primary-color);
}
/*.hero {
    min-height: 600px;
    background: linear-gradient(135deg, var(--light-bg) 0%, var(--white) 100%);
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(248,176,66,0.1) 0%, transparent 70%);
    border-radius: 50%;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.hero h1 {
    font-size: 4rem;
    color: var(--text-color);
    margin-bottom: 20px;
}

.hero .subtitle {
    font-size: 1.2rem;
    color: var(--light-text);
    margin-bottom: 40px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}*/

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--text-color);
}

.about-text p {
    color: var(--light-text);
    margin-bottom: 20px;
    line-height: 1.8;
}

.features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.feature {
    text-align: center;
    padding: 20px;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
}

.feature:hover {
    transform: translateY(-5px);
}

.feature i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.feature span {
    display: block;
    font-weight: 500;
    color: var(--text-color);
}

.about-image img {
    width: 100%;
    height: 480px;
    border-radius: 50px;
    box-shadow: var(--shadow);
}

/* Menu Section */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.menu-item {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

.menu-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.menu-item-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.menu-item-content {
    padding: 20px;
}

.menu-item h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--text-color);
}

.menu-item p {
    color: var(--light-text);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.menu-item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary-color);
}

.badge {
    background-color: var(--light-bg);
    color: var(--primary-color);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

/* Gallery Section */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.gallery-item {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    aspect-ratio: 1;
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    color: var(--white);
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

/* Contact Section */
/*.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: stretch; 
}


.contact-info {
    background: var(--white);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.contact-info .contact-item {
    display: flex;
    gap: 20px;
}


.contact-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    min-width: 40px;
}


.contact-item h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.contact-item p {
    color: var(--light-text);
    line-height: 1.6;
}


.contact-form {
    background: var(--white);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact-form h3 {
    font-size: 1.5rem;
    margin-bottom: 30px;
}


.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}*/

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.contact-info .contact-item {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    min-width: 40px;
}

.contact-item h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.contact-item p {
    color: var(--light-text);
    line-height: 1.6;
}

.contact-form {
    background: var(--white);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
   
}

.contact-form h3 {
    font-size: 1.5rem;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

/* Footer */
footer {
    background-color: var(--white);
    padding-top: 60px;
    border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: var(--text-color);
}

.footer-section p {
    color: var(--light-text);
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul a {
    text-decoration: none;
    color: var(--light-text);
    transition: color 0.3s ease;
}

.footer-section ul a:hover {
    color: var(--primary-color);
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--light-bg);
    color: var(--primary-color);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid rgba(0,0,0,0.05);
    color: var(--light-text);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: 20px;
        box-shadow: var(--shadow);
    }

    .nav-links.show {
        display: flex;
    }

    .mobile-menu {
        display: block;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }

    .features {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 250px;
    }
}
/* ========== NEW STYLES FOR CART & BOOKING ========== */

/* Cart Icon */
#cartIcon {
    position: relative;
    margin-right: 15px;
}

#cartCount {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.7rem;
    display: none;
}

/* Add to Cart Button */
.add-to-cart-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 10px;
}

.add-to-cart-btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

/* Modal Styles */
.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background-color: var(--white);
    margin: 5% auto;
    padding: 30px;
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 30px;
    font-weight: bold;
    color: var(--light-text);
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-modal:hover {
    color: var(--primary-color);
}

/* Cart Items */
.cart-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}

.cart-item-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
}

.cart-item-details {
    flex: 1;
}

.cart-item-details h4 {
    font-size: 1rem;
    margin-bottom: 5px;
    color: var(--text-color);
}

.cart-item-price {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-btn {
    background-color: var(--light-bg);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color);
    transition: all 0.3s ease;
}

.quantity-btn:hover {
    background-color: var(--primary-color);
    color: white;
}

.quantity-value {
    font-weight: 600;
    min-width: 20px;
    text-align: center;
}

.remove-item {
    color: #e74c3c;
    cursor: pointer;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.remove-item:hover {
    color: #c0392b;
}

.cart-total {
    margin: 20px 0;
    padding-top: 20px;
    border-top: 2px solid #eee;
    text-align: right;
}

.cart-total h3 {
    color: var(--text-color);
    margin-bottom: 5px;
}

#cartTotal, #cartSubtotal {
    color: var(--primary-color);
    font-size: 1.5rem;
}

#deliveryFee {
    color: var(--text-color);
    font-size: 1.2rem;
}

/* Checkout Form (hidden by default) */
#checkoutForm {
    display: none;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #eee;
}

#checkoutForm.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

/* Delivery Form Styles */
.delivery-form {
    background-color: var(--light-bg);
    padding: 20px;
    border-radius: var(--border-radius);
    margin: 20px 0;
}

.delivery-form h3 {
    margin-bottom: 15px;
    color: var(--text-color);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

/* Booking Form (in Contact section) */
.booking-form {
    background-color: var(--white);
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    margin-top: 30px;
}

.booking-form h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: var(--text-color);
}

.booking-form .form-group {
    margin-bottom: 15px;
}

.booking-form input,
.booking-form select,
.booking-form textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

.booking-form input:focus,
.booking-form select:focus,
.booking-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .modal-content {
        margin: 10% auto;
        padding: 20px;
        width: 95%;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .cart-item {
        flex-wrap: wrap;
    }
    
    .cart-item-image {
        width: 50px;
        height: 50px;
    }
}
/* تنسيق أيقونة السلة في شريط التنقل */
.cart-icon-nav {
    display: flex;
    align-items: center;
    margin-left: 15px;
}

.cart-icon-nav a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px !important;
    color: var(--text-color);
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.cart-icon-nav a:hover {
    color: var(--primary-color);
}

/* إخفاء الخط السفلي تحت أيقونة السلة */
.cart-icon-nav a::after {
    display: none !important;
}

/* تعديل موضع العداد */
.cart-icon-nav #cartCount {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.7rem;
    font-weight: 600;
}

/* للشاشات الصغيرة */
@media (max-width: 768px) {
    .cart-icon-nav {
        margin-left: 0;
        margin-top: 10px;
        justify-content: flex-start;
    }
    
    .cart-icon-nav a {
        justify-content: flex-start;
        padding: 10px 0 !important;
    }
}
/* Reservation Form Styles */
.reservation-form {
    background: var(--white);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.reservation-form h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: var(--text-color);
    font-family: 'Playfair Display', serif;
}

.reservation-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
}

.reservation-form .form-group {
    margin-bottom: 20px;
}

.reservation-form input,
.reservation-form select,
.reservation-form textarea {
    width: 100%;
    padding: 14px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: var(--white);
}

.reservation-form input:focus,
.reservation-form select:focus,
.reservation-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(248, 176, 66, 0.1);
}

.reservation-form input[type="date"],
.reservation-form input[type="time"] {
    cursor: pointer;
}

/* Checkbox Group */
.checkbox-group {
    margin: 20px 0;
}

.checkbox-group label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--light-text);
    cursor: pointer;
    font-size: 0.95rem;
}

.checkbox-group input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: var(--primary-color);
}

/* Restaurant Info Card */
.restaurant-info-card {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: 25px;
    border-radius: var(--border-radius);
    margin-top: 30px;
    box-shadow: var(--shadow);
}

.restaurant-info-card h4 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.restaurant-info-card h4 i {
    font-size: 1.5rem;
}

.restaurant-info-card p {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    opacity: 0.95;
}

.restaurant-info-card p::before {
    content: "•";
    font-size: 1.2rem;
    color: white;
}

/* Quick Booking Section */
.quick-booking {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    text-align: center;
}

.quick-booking p {
    color: var(--light-text);
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.quick-booking .btn-outline {
    border-color: #25D366;
    color: #25D366;
}

.quick-booking .btn-outline:hover {
    background-color: #25D366;
    color: white;
    border-color: #25D366;
}

/* تعديلات للشاشات الصغيرة */
@media (max-width: 768px) {
    .reservation-form .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    .restaurant-info-card {
        margin-top: 20px;
        padding: 20px;
    }
    
    .reservation-form {
        padding: 25px;
    }
}

/* تنسيقات إضافية */
.reservation-form select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
}

.reservation-form select::-ms-expand {
    display: none;
}

/* تنسيق التاريخ والوقت */
.reservation-form input[type="date"]::-webkit-calendar-picker-indicator,
.reservation-form input[type="time"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    filter: invert(0.5);
}

.reservation-form input[type="date"]::-webkit-calendar-picker-indicator:hover,
.reservation-form input[type="time"]::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
}

