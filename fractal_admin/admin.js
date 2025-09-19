// Admin Panel JavaScript
let currentSection = 'dashboard';
let isEditing = false;
let editingProductId = null;
let editingProductType = null;

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    initializeAdmin();
    loadDashboard();
    updateLastAccess();
});

// Initialize admin functionality
function initializeAdmin() {
    // Load initial data
    loadDashboard();
    
    // Setup event listeners
    setupEventListeners();
    
    // Check for admin authentication (basic implementation)
    checkAuthentication();
}

// Check basic authentication
function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('fractal-admin-auth');
    if (!isAuthenticated) {
        const password = prompt('Digite a senha de administrador:');
        if (password === 'fractal2025admin') {
            localStorage.setItem('fractal-admin-auth', 'true');
            localStorage.setItem('fractal-admin-lastaccess', new Date().toLocaleString());
        } else {
            alert('Acesso negado!');
            window.location.href = '../index.html';
            return;
        }
    }
}

// Update last access time
function updateLastAccess() {
    const lastAccess = localStorage.getItem('fractal-admin-lastaccess');
    if (lastAccess) {
        document.getElementById('lastAccess').textContent = lastAccess;
    }
    localStorage.setItem('fractal-admin-lastaccess', new Date().toLocaleString());
}

// Setup event listeners
function setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            // Update active state
            document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Show section
function showSection(section) {
    currentSection = section;
    
    // Hide dashboard if not dashboard
    const dashboardSection = document.getElementById('dashboard-section');
    const dynamicContent = document.getElementById('dynamic-content');
    
    if (section === 'dashboard') {
        dashboardSection.style.display = 'block';
        dynamicContent.innerHTML = '';
        loadDashboard();
    } else {
        dashboardSection.style.display = 'none';
        loadSectionContent(section);
    }
}

// Load dashboard data
function loadDashboard() {
    // Update counters
    document.getElementById('total-experimentos').textContent = catalogData.experimentos.products.length;
    document.getElementById('total-miniexps').textContent = catalogData.miniexps.products.length;
    document.getElementById('total-souvenirs').textContent = catalogData.souvenirs.products.length;
    document.getElementById('total-sequencias').textContent = catalogData.sequencias.products.length;
    
    // Load popular products (mock data)
    loadPopularProducts();
}

// Load popular products
function loadPopularProducts() {
    const popularProductsContainer = document.getElementById('popular-products');
    
    // Mock data for popular products
    const mockPopularProducts = [
        { name: 'ExP F.01 - LEIS DE NEWTON', category: 'Física', views: 156, status: 'active' },
        { name: 'MINITELESCÓPIO', category: 'MiniExP', views: 134, status: 'active' },
        { name: 'ExP F.09 - LEIS DA ELETRÔNICA', category: 'Física', views: 128, status: 'active' },
        { name: 'MINIBALANÇA MATEMÁTICA', category: 'MiniExP', views: 98, status: 'active' },
        { name: 'Lente Convergente', category: 'Souvenir', views: 76, status: 'active' }
    ];
    
    popularProductsContainer.innerHTML = mockPopularProducts.map(product => `
        <tr>
            <td>${product.name}</td>
            <td><span class="badge bg-primary">${product.category}</span></td>
            <td>${product.views}</td>
            <td><span class="status-badge ${product.status === 'active' ? 'status-active' : 'status-inactive'}">${product.status === 'active' ? 'Ativo' : 'Inativo'}</span></td>
        </tr>
    `).join('');
}

// Load section content
function loadSectionContent(section) {
    const dynamicContent = document.getElementById('dynamic-content');
    
    switch(section) {
        case 'experimentos':
            loadProductManagement('experimentos', 'Experimentos ExP®', 'flask');
            break;
        case 'miniexps':
            loadProductManagement('miniexps', 'MiniExPs', 'microscope');
            break;
        case 'souvenirs':
            loadProductManagement('souvenirs', 'Souvenirs Científicos', 'gift');
            break;
        case 'sequencias':
            loadSequencesManagement();
            break;
        case 'configuracoes':
            loadConfigurationsManagement();
            break;
        default:
            dynamicContent.innerHTML = '<div class="alert alert-warning">Seção não encontrada</div>';
    }
}

// Load product management interface
function loadProductManagement(catalogType, title, icon) {
    const data = catalogData[catalogType];
    const products = data.products;
    
    const content = `
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0"><i class="fas fa-${icon} me-2"></i>${title}</h5>
                <button class="btn btn-primary" onclick="openProductModal('${catalogType}')">
                    <i class="fas fa-plus me-1"></i>Adicionar Produto
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Imagem</th>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${products.map(product => createProductRow(product, catalogType)).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="card mt-4">
            <div class="card-header">
                <h5 class="mb-0"><i class="fas fa-download me-2"></i>Backup e Importação</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <button class="btn btn-outline-primary w-100" onclick="exportCatalog('${catalogType}')">
                            <i class="fas fa-download me-1"></i>Exportar Catálogo
                        </button>
                    </div>
                    <div class="col-md-6">
                        <input type="file" id="import-file-${catalogType}" accept=".json" style="display: none;" onchange="importCatalog('${catalogType}', this)">
                        <button class="btn btn-outline-success w-100" onclick="document.getElementById('import-file-${catalogType}').click()">
                            <i class="fas fa-upload me-1"></i>Importar Catálogo
                        </button>
                    </div>
                </div>
                <div class="mt-3">
                    <small class="text-muted">
                        <i class="fas fa-info-circle me-1"></i>
                        Use as funções de backup para salvar e restaurar seus dados do catálogo.
                    </small>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('dynamic-content').innerHTML = content;
}

// Create product row for table
function createProductRow(product, catalogType) {
    const imageUrl = product.image || 'https://via.placeholder.com/60x60?text=' + encodeURIComponent(product.name.substring(0, 3));
    const price = product.price || 'Consultar';
    
    return `
        <tr>
            <td>
                <img src="${imageUrl}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/60x60?text=IMG'">
            </td>
            <td>
                <strong>${product.name}</strong>
                <br>
                <small class="text-muted">${truncateText(product.description || '', 50)}</small>
            </td>
            <td>
                <span class="badge bg-secondary">${product.category}</span>
            </td>
            <td>${price}</td>
            <td>
                <div class="btn-group btn-group-sm">
                    <button class="btn btn-outline-primary" onclick="editProduct('${catalogType}', '${product.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-outline-danger" onclick="deleteProduct('${catalogType}', '${product.id}')" title="Excluir">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn btn-outline-info" onclick="duplicateProduct('${catalogType}', '${product.id}')" title="Duplicar">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Open product modal
function openProductModal(catalogType, productId = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    const modalTitle = modal.querySelector('.modal-title');
    
    isEditing = !!productId;
    editingProductType = catalogType;
    editingProductId = productId;
    
    // Reset form
    form.reset();
    document.getElementById('productType').value = catalogType;
    
    // Update modal title
    modalTitle.textContent = isEditing ? 'Editar Produto' : 'Adicionar Produto';
    
    // Load categories for this catalog type
    loadCategoriesForProduct(catalogType);
    
    // If editing, load product data
    if (isEditing) {
        loadProductData(catalogType, productId);
    }
    
    // Show modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Load categories for product
function loadCategoriesForProduct(catalogType) {
    const categorySelect = document.getElementById('productCategory');
    const categories = catalogData[catalogType].categories;
    
    categorySelect.innerHTML = '<option value="">Selecione...</option>';
    categories.forEach(category => {
        categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
    });
}

// Load product data for editing
function loadProductData(catalogType, productId) {
    const product = catalogData[catalogType].products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productImage').value = product.image || '';
    document.getElementById('productPrice').value = product.price || '';
    
    // Load features
    if (product.features) {
        document.getElementById('productFeatures').value = product.features.join('\n');
    }
    
    // Load includes
    if (product.includes) {
        document.getElementById('productIncludes').value = product.includes.join('\n');
    }
    
    document.getElementById('productPdf').value = product.pdf || '';
}

// Save product
function saveProduct() {
    const catalogType = document.getElementById('productType').value;
    const productId = document.getElementById('productId').value || generateProductId(catalogType);
    
    const productData = {
        id: productId,
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        price: document.getElementById('productPrice').value,
        features: document.getElementById('productFeatures').value.split('\n').filter(f => f.trim()),
        includes: document.getElementById('productIncludes').value.split('\n').filter(i => i.trim()),
        pdf: document.getElementById('productPdf').value
    };
    
    // Validate required fields
    if (!productData.name || !productData.category) {
        alert('Nome e categoria são obrigatórios!');
        return;
    }
    
    // Save to catalog data
    if (isEditing) {
        const index = catalogData[catalogType].products.findIndex(p => p.id === productId);
        if (index !== -1) {
            catalogData[catalogType].products[index] = productData;
        }
    } else {
        catalogData[catalogType].products.push(productData);
    }
    
    // Update localStorage (for persistence in this demo)
    try {
        localStorage.setItem('fractal-catalog-data', JSON.stringify(catalogData));
        
        // Show success message
        alert(isEditing ? 'Produto atualizado com sucesso!' : 'Produto adicionado com sucesso!');
        
        // Close modal
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
        
        // Reload current section
        showSection(currentSection);
        
    } catch (error) {
        alert('Erro ao salvar produto: ' + error.message);
    }
}

// Generate product ID
function generateProductId(catalogType) {
    const prefix = catalogType.substring(0, 3);
    const timestamp = Date.now().toString().substring(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${timestamp}-${random}`;
}

// Edit product
function editProduct(catalogType, productId) {
    openProductModal(catalogType, productId);
}

// Delete product
function deleteProduct(catalogType, productId) {
    const product = catalogData[catalogType].products.find(p => p.id === productId);
    if (!product) return;
    
    if (confirm(`Tem certeza que deseja excluir "${product.name}"?`)) {
        const index = catalogData[catalogType].products.findIndex(p => p.id === productId);
        if (index !== -1) {
            catalogData[catalogType].products.splice(index, 1);
            
            // Update localStorage
            localStorage.setItem('fractal-catalog-data', JSON.stringify(catalogData));
            
            // Reload section
            showSection(currentSection);
            
            alert('Produto excluído com sucesso!');
        }
    }
}

// Duplicate product
function duplicateProduct(catalogType, productId) {
    const product = catalogData[catalogType].products.find(p => p.id === productId);
    if (!product) return;
    
    const newProduct = {
        ...product,
        id: generateProductId(catalogType),
        name: product.name + ' (Cópia)'
    };
    
    catalogData[catalogType].products.push(newProduct);
    localStorage.setItem('fractal-catalog-data', JSON.stringify(catalogData));
    
    showSection(currentSection);
    alert('Produto duplicado com sucesso!');
}

// Export catalog
function exportCatalog(catalogType) {
    const data = catalogData[catalogType];
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `fractal-${catalogType}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Import catalog
function importCatalog(catalogType, fileInput) {
    const file = fileInput.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (confirm('Isso substituirá todos os dados existentes. Continuar?')) {
                catalogData[catalogType] = importedData;
                localStorage.setItem('fractal-catalog-data', JSON.stringify(catalogData));
                
                showSection(currentSection);
                alert('Catálogo importado com sucesso!');
            }
        } catch (error) {
            alert('Erro ao importar arquivo: ' + error.message);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    fileInput.value = '';
}

// Load sequences management
function loadSequencesManagement() {
    const content = `
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0"><i class="fas fa-list-ol me-2"></i>Sequências Didáticas</h5>
                <button class="btn btn-primary" onclick="openSequenceModal()">
                    <i class="fas fa-plus me-1"></i>Adicionar Sequência
                </button>
            </div>
            <div class="card-body">
                <div class="row">
                    ${catalogData.sequencias.products.map(sequence => `
                        <div class="col-lg-6 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title">${sequence.name}</h6>
                                    <p class="card-text">${sequence.description}</p>
                                    <div class="mb-2">
                                        <small class="text-muted">
                                            <i class="fas fa-tag me-1"></i>${sequence.category} | 
                                            <i class="fas fa-clock me-1"></i>${sequence.duration} | 
                                            <i class="fas fa-graduation-cap me-1"></i>${sequence.level}
                                        </small>
                                    </div>
                                    <div class="mb-2">
                                        <strong>Experimentos:</strong>
                                        <div class="d-flex flex-wrap gap-1 mt-1">
                                            ${sequence.experiments.map(exp => `<span class="badge bg-primary">${exp}</span>`).join('')}
                                        </div>
                                    </div>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="editSequence('${sequence.id}')">
                                            <i class="fas fa-edit"></i> Editar
                                        </button>
                                        <button class="btn btn-outline-danger" onclick="deleteSequence('${sequence.id}')">
                                            <i class="fas fa-trash"></i> Excluir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('dynamic-content').innerHTML = content;
}

// Load configurations management
function loadConfigurationsManagement() {
    const content = `
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0"><i class="fas fa-cog me-2"></i>Configurações do Sistema</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-6">
                        <h6>Informações da Empresa</h6>
                        <form id="companyForm">
                            <div class="mb-3">
                                <label class="form-label">Nome da Empresa</label>
                                <input type="text" class="form-control" value="Fractal Ltda">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Telefone</label>
                                <input type="text" class="form-control" value="(84) 99413-0079">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">E-mail</label>
                                <input type="email" class="form-control" value="contato@fractal.ind.br">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Endereço</label>
                                <textarea class="form-control" rows="3">Av. Odilon Gomes de Lima, 2001
Capim Macio
Natal/RN - 59078-400</textarea>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6">
                        <h6>Configurações do Site</h6>
                        <form id="siteForm">
                            <div class="mb-3">
                                <label class="form-label">Cor Primária</label>
                                <input type="color" class="form-control form-control-color" value="#1e5fa0">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Logo URL</label>
                                <input type="url" class="form-control" value="https://fractal.ind.br/img/logo_site.png">
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" checked>
                                    <label class="form-check-label">Mostrar WhatsApp flutuante</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" checked>
                                    <label class="form-check-label">Ativar modo de manutenção</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <h6>Backup Completo</h6>
                        <p class="text-muted">Faça backup de todos os dados do sistema</p>
                        <div class="btn-group">
                            <button class="btn btn-success" onclick="exportAllData()">
                                <i class="fas fa-download me-1"></i>Exportar Tudo
                            </button>
                            <button class="btn btn-warning" onclick="clearAllData()">
                                <i class="fas fa-exclamation-triangle me-1"></i>Limpar Cache
                            </button>
                            <button class="btn btn-danger" onclick="resetAllData()">
                                <i class="fas fa-undo me-1"></i>Reset Completo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('dynamic-content').innerHTML = content;
}

// Export all data
function exportAllData() {
    const allData = {
        catalog: catalogData,
        timestamp: new Date().toISOString(),
        version: '1.0'
    };
    
    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `fractal-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Clear all data
function clearAllData() {
    if (confirm('Isso limpará todo o cache do navegador. Continuar?')) {
        localStorage.clear();
        sessionStorage.clear();
        alert('Cache limpo com sucesso!');
    }
}

// Reset all data
function resetAllData() {
    if (confirm('ATENÇÃO: Isso irá restaurar todos os dados para o estado original. Todos os dados personalizados serão perdidos. Continuar?')) {
        localStorage.removeItem('fractal-catalog-data');
        location.reload();
    }
}

// Utility function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Load saved data on startup
function loadSavedData() {
    const savedData = localStorage.getItem('fractal-catalog-data');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            // Merge with existing data
            Object.keys(parsedData).forEach(key => {
                if (catalogData[key]) {
                    catalogData[key] = parsedData[key];
                }
            });
        } catch (error) {
            console.error('Error loading saved data:', error);
        }
    }
}

// Initialize saved data
loadSavedData();

// Make functions globally available
window.showSection = showSection;
window.openProductModal = openProductModal;
window.saveProduct = saveProduct;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.duplicateProduct = duplicateProduct;
window.exportCatalog = exportCatalog;
window.importCatalog = importCatalog;
window.exportAllData = exportAllData;
window.clearAllData = clearAllData;
window.resetAllData = resetAllData;