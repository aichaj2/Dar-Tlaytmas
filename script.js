// Mobile Menu Toggle
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

// Menu Items Data
const menuItems = [
  {
      name: 'Chicken Tagine',
      description: 'Tender chicken tagine with preserved lemons and olives',
      price: '120 MAD',
      image: 'img/tagin djaj.jpg',
      badge: 'Signature'
  },
  {
      name: 'Lamb with Prunes',
      description: 'Slow‑cooked lamb with Moroccan spices',
      price: '150 MAD',
      image: 'img/lham bar9o9.jpg',
      badge: 'Traditional'
  },
  {
      name: 'Vegetable Couscous',
      description: 'Steamed semolina with seasonal vegetables',
      price: '100 MAD',
      image: 'img/koskos.jpg',
      badge: 'Traditional'
  },
  {
      name: 'Chicken Pastilla',
      description: 'Layered pastry with chicken, almonds, and cinnamon',
      price: '150 MAD',
      image: 'img/bastila djaj.jpg',
      badge: 'Special'
  },
  {
      name: 'Harira Soup',
      description: 'Authentic Moroccan soup with lentils & herbs',
      price: '80 MAD',
      image: 'img/harira.jpg',
      badge: 'Classic'
  },
  {
      name: 'Rfissa',
      description: 'Slow‑cooked chicken with msemen and lentils',
      price: '140 MAD',
      image: 'img/rfisa.jpg',
      badge: 'Homemade'
  },
  {
      name: 'Tangya',
      description: 'Authentic Marrakech-style Tangia, slow-cooked with traditional spices',
      price: '130 MAD',
      image: 'img/tangiya.jpg',
      badge: 'Special'
  },
  {
      name: 'Fish Pastilla',
      description: 'Layered pastry with fish, almonds, and Moroccan spices',
      price: '160 MAD',
      image: 'img/bastila hot.jpg',
      badge: 'Special'
  },
  {
    name: 'Sfa',
    description: 'Delicious Moroccan specialty dish', 
    price: '160 MAD',
    image: 'img/sfa.jpg', 
    badge: 'Special'
}

];


// Gallery Items Data
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

// Load Menu Items


function loadMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">${item.price}</span>
                    <span class="badge">${item.badge}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Gallery Items
function loadGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryItems.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <span>${item.title}</span>
            </div>
        </div>
    `).join('');
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show success message (in real application, you would send this to a server)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Clear form
        contactForm.reset();
    });
}

// Active Navigation Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
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

// Load everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    loadGalleryItems();
    
    // Add scroll event listener for active nav
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial call to set active nav
    updateActiveNavLink();
});

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}