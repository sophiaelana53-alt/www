// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
    
    // Setup event listeners
    setupEventListeners();
    
    // Handle navigation
    setupNavigation();
    
    // Setup search functionality
    setupSearch();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup animations
    setupAnimations();
});

// Initialize application
function initializeApp() {
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Setup WhatsApp float button
    setupWhatsAppFloat();
    
    // Initialize team carousel
    initializeTeamCarousel();
}

// Initialize team carousel
function initializeTeamCarousel() {
    const teamCarousel = document.getElementById('teamCarousel');
    if (teamCarousel) {
        // Auto-advance carousel every 5 seconds
        setInterval(() => {
            const carousel = bootstrap.Carousel.getInstance(teamCarousel) || new bootstrap.Carousel(teamCarousel);
            carousel.next();
        }, 5000);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Modal events
    setupModalEvents();
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Handle catalog links
            if (this.hasAttribute('onclick')) {
                e.preventDefault();
                return;
            }
            
            // Handle anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Hide catalog section if showing
                    const catalogSection = document.getElementById('catalog-section');
                    if (catalogSection && catalogSection.style.display !== 'none') {
                        showHomePage();
                    }
                    scrollToElement(targetElement);
                }
            }
        });
    });
}

// Show home page function
function showHomePage() {
    const catalogSection = document.getElementById('catalog-section');
    const heroSection = document.getElementById('home');
    const sobreSection = document.getElementById('sobre');
    const productsSection = document.querySelector('.products-showcase');
    const equipeSection = document.getElementById('equipe');
    const contatoSection = document.getElementById('contato');
    
    // Show main sections
    if (heroSection) heroSection.style.display = 'block';
    if (sobreSection) sobreSection.style.display = 'block';
    if (productsSection) productsSection.style.display = 'block';
    if (equipeSection) equipeSection.style.display = 'block';
    if (contatoSection) contatoSection.style.display = 'block';
    
    // Hide catalog
    if (catalogSection) catalogSection.style.display = 'none';
    
    // Update page title
    document.title = 'Fractal - Experimentos Científicos Portáteis';
    
    // Update URL
    history.pushState({ page: 'home' }, '', '/');
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Setup WhatsApp float button
function setupWhatsAppFloat() {
    const whatsappFloat = document.getElementById('whatsapp-float');
    
    if (whatsappFloat) {
        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                whatsappFloat.style.display = 'block';
            } else {
                whatsappFloat.style.display = 'block'; // Always show
            }
        });
    }
}

// Show catalog function
let currentCatalogType = '';
let currentProducts = [];
let filteredProducts = [];

function showCatalog(catalogType) {
    currentCatalogType = catalogType;
    const catalogData = getCatalogData(catalogType);
    currentProducts = catalogData.products;
    filteredProducts = [...currentProducts];
    
    // Update page title
    document.title = `${catalogData.title} - Fractal`;
    
    // Show catalog section
    const catalogSection = document.getElementById('catalog-section');
    const heroSection = document.getElementById('home');
    const sobreSection = document.getElementById('sobre');
    const productsSection = document.querySelector('.products-showcase');
    const equipeSection = document.getElementById('equipe');
    const contatoSection = document.getElementById('contato');
    
    if (catalogSection) {
        // Hide other sections
        if (heroSection) heroSection.style.display = 'none';
        if (sobreSection) sobreSection.style.display = 'none';
        if (productsSection) productsSection.style.display = 'none';
        if (equipeSection) equipeSection.style.display = 'none';
        if (contatoSection) contatoSection.style.display = 'none';
        
        // Show catalog
        catalogSection.style.display = 'block';
        
        // Update catalog title
        document.getElementById('catalog-title').textContent = catalogData.title;
        
        // Setup filters
        setupFilters(catalogData.categories);
        
        // Render products
        renderProducts(filteredProducts);
        
        // Scroll to catalog
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update URL without reload
        history.pushState({ catalog: catalogType }, '', `#catalog-${catalogType}`);
    }
}

// Setup filters
function setupFilters(categories) {
    const filtersContainer = document.getElementById('catalog-filters');
    const btnGroup = filtersContainer.querySelector('.btn-group');
    
    // Clear existing filters
    btnGroup.innerHTML = '<button type="button" class="btn btn-outline-primary active" data-filter="all">Todos</button>';
    
    // Add category filters
    categories.forEach(category => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-primary';
        button.textContent = category;
        button.setAttribute('data-filter', category);
        btnGroup.appendChild(button);
    });
    
    // Add event listeners to filter buttons
    btnGroup.addEventListener('click', function(e) {
        if (e.target.matches('button[data-filter]')) {
            // Update active state
            btnGroup.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter products
            const filterValue = e.target.getAttribute('data-filter');
            const searchQuery = document.getElementById('search-input').value;
            
            let filtered = filterProducts(currentProducts, filterValue);
            filtered = searchProducts(filtered, searchQuery);
            
            filteredProducts = filtered;
            renderProducts(filteredProducts);
        }
    });
}

// Render products
function renderProducts(products) {
    const container = document.getElementById('catalog-content');
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>Nenhum produto encontrado</h4>
                <p class="text-muted">Tente ajustar sua pesquisa ou filtros</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add click event listeners to cards
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            showProductDetails(productId);
        });
    });
}

// Create product card HTML
function createProductCard(product) {
    const price = product.price ? `<div class="product-badge">${product.price}</div>` : '';
    const categoryClass = product.category.toLowerCase().replace(/\s+/g, '-');
    const imageUrl = product.image || `https://fractal.ind.br/img/${product.id}.jpg`;
    
    return `
        <div class="col-lg-4 col-md-6">
            <div class="product-card ${categoryClass}" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${imageUrl}" 
                         alt="${product.name}" loading="lazy">
                    ${price}
                </div>
                <div class="product-content">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="product-description">${truncateText(product.description, 100)}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); showProductDetails('${product.id}')">
                            <i class="fas fa-eye me-1"></i>Detalhes
                        </button>
                        <a href="https://wa.me/5584994130079?text=${generateWhatsAppMessage(product, currentCatalogType)}" 
                           target="_blank" class="btn btn-success btn-sm" onclick="event.stopPropagation();">
                            <i class="fab fa-whatsapp me-1"></i>WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show product details in modal
function showProductDetails(productId) {
    const product = getProductById(currentCatalogType, productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const title = document.getElementById('productModalTitle');
    const body = document.getElementById('productModalBody');
    const whatsappBtn = document.getElementById('whatsappButton');
    
    title.textContent = product.name;
    
    const imageUrl = product.image || `https://fractal.ind.br/img/${product.id}.jpg`;
    
    // Generate modal content
    let content = `
        <div class="row">
            <div class="col-md-6">
                <img src="${imageUrl}" 
                     class="img-fluid rounded" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h6 class="text-primary">Categoria: ${product.category}</h6>
                ${product.price ? `<h5 class="text-success mb-3">${product.price}</h5>` : ''}
                <p>${product.description}</p>
    `;
    
    if (product.features && product.features.length > 0) {
        content += `
            <h6 class="mt-3">O que você vai aprender:</h6>
            <ul class="list-unstyled">
                ${product.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
            </ul>
        `;
    }
    
    if (product.includes && product.includes.length > 0) {
        content += `
            <h6 class="mt-3">Inclui:</h6>
            <ul class="list-unstyled">
                ${product.includes.map(item => `<li><i class="fas fa-box text-primary me-2"></i>${item}</li>`).join('')}
            </ul>
        `;
    }
    
    content += `</div></div>`;
    
    // Add videos section
    if (product.videos && product.videos.length > 0) {
        content += `
            <div class="row mt-4">
                <div class="col-12">
                    <h6>Vídeos:</h6>
                    <div class="d-flex flex-wrap gap-2">
                        ${product.videos.map(video => `
                            <button class="btn btn-outline-primary btn-sm" onclick="playVideo('${video.url}', '${video.title}')">
                                <i class="fas fa-play me-1"></i>${video.title}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add PDF link
    if (product.pdf) {
        content += `
            <div class="row mt-3">
                <div class="col-12">
                    <a href="${product.pdf}" target="_blank" class="btn btn-outline-info btn-sm">
                        <i class="fas fa-file-pdf me-1"></i>Manual PDF
                    </a>
                </div>
            </div>
        `;
    }
    
    // Add experiments for sequences
    if (product.experiments) {
        content += `
            <div class="row mt-4">
                <div class="col-12">
                    <h6>Experimentos relacionados:</h6>
                    <div class="d-flex flex-wrap gap-1">
                        ${product.experiments.map(exp => `<span class="badge bg-secondary">${exp}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    if (product.duration) {
        content += `<p class="mt-3"><strong>Duração:</strong> ${product.duration}</p>`;
    }
    
    if (product.level) {
        content += `<p><strong>Nível:</strong> ${product.level}</p>`;
    }
    
    body.innerHTML = content;
    
    // Update WhatsApp button
    whatsappBtn.href = `https://wa.me/5584994130079?text=${generateWhatsAppMessage(product, currentCatalogType)}`;
    
    // Show modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Play video in modal
function playVideo(videoUrl, title) {
    const videoModal = document.getElementById('videoModal');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const modalVideo = document.getElementById('modalVideo');
    
    videoModalTitle.textContent = title;
    modalVideo.src = videoUrl;
    
    const bsModal = new bootstrap.Modal(videoModal);
    bsModal.show();
}

// Setup modal events
function setupModalEvents() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    videoModal.addEventListener('hidden.bs.modal', function() {
        modalVideo.pause();
        modalVideo.src = '';
    });
}

// Handle search
function handleSearch() {
    const searchQuery = document.getElementById('search-input').value;
    const activeFilter = document.querySelector('#catalog-filters .btn.active');
    const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
    
    let filtered = filterProducts(currentProducts, filterValue);
    filtered = searchProducts(filtered, searchQuery);
    
    filteredProducts = filtered;
    renderProducts(filteredProducts);
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        // Add search icon click event
        const searchIcon = document.querySelector('.search-icon');
        if (searchIcon) {
            searchIcon.addEventListener('click', handleSearch);
        }
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('onclick')) return; // Skip if has onclick
            
            const href = this.getAttribute('href');
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                scrollToElement(target);
            }
        });
    });
}

// Scroll to element with smooth animation
function scrollToElement(element) {
    const navbarHeight = document.getElementById('mainNav').offsetHeight;
    const targetPosition = element.offsetTop - navbarHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Setup animations
function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .product-category-card, .contact-item, .team-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Handle browser back/forward
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.catalog) {
        showCatalog(event.state.catalog);
    } else if (event.state && event.state.page === 'home') {
        showHomePage();
    } else {
        // Show home page
        showHomePage();
    }
});

// Export functions for global access
window.showCatalog = showCatalog;
window.showHomePage = showHomePage;
window.showProductDetails = showProductDetails;
window.playVideo = playVideo;
window.generateWhatsAppMessage = generateWhatsAppMessage;