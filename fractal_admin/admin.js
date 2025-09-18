// catalogData será populado dinamicamente pelo backend
let catalogData = {
    experimentos: {
        title: "Experimentos",
        categories: [],
        products: []
    },
    miniexps: {
        title: "MiniExPs",
        categories: [],
        products: []
    },
    souvenirs: {
        title: "Souvenirs",
        categories: [],
        products: []
    },
    sequencias: {
        title: "Sequências Didáticas",
        categories: [],
        products: []
    }
};

let currentSection = 'dashboard';
let isEditing = false;
let editingProductId = null;

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadSavedData().then(() => {
        showSection(currentSection);
    });
});

function setupEventListeners() {
    // Event listener para a navegação do sidebar
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            document.querySelectorAll('.sidebar .nav-link').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            const section = event.target.getAttribute('onclick').match(/'(.*?)'/)[1];
            showSection(section);
        });
    });

    // Listener para o formulário do modal
    document.getElementById('productForm').addEventListener('submit', (event) => {
        event.preventDefault();
        saveProduct();
    });

    // Listener para o botão de adicionar produto na página
    document.getElementById('dynamic-content').addEventListener('click', (event) => {
        if (event.target.closest('.add-product-btn')) {
            const sectionType = event.target.closest('.add-product-btn').dataset.sectionType;
            showProductModal(sectionType);
        }
    });

    // Listeners para os botões de Ações Rápidas
    document.querySelectorAll('.btn[onclick^="showSection"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('onclick').match(/'(.*?)'/)[1];
            showSection(section);
        });
    });

    // Listener para o modal
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('hidden.bs.modal', resetModal);
    }
}

async function loadSavedData() {
    try {
        const response = await fetch('backend.php', { method: 'GET' });
        if (!response.ok) {
            if (response.status === 404) {
                console.warn("Arquivo catalog.json não encontrado. Iniciando com dados padrão.");
                return;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        console.log("entrei");
        console.log(data);

        Object.keys(data).forEach(key => {
            if (catalogData[key]) {
                catalogData[key] = data[key];
            }
        });
        
        console.log("Dados do catálogo carregados do servidor com sucesso.");
    } catch (error) {
        console.error("Erro ao carregar dados do servidor:", error);
    }
}

async function saveDataToBackend(data) {
    try {
        const response = await fetch('backend.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (result.status === "success") {
            return true;
        } else {
            console.error('Erro no backend:', result.message);
            alert('Erro ao salvar no servidor: ' + result.message);
            return false;
        }
    } catch (error) {
        console.error('Erro ao enviar dados para o backend:', error);
        alert('Erro ao salvar. Verifique a conexão com o servidor.');
        return false;
    }
}

function showSection(section) {
    currentSection = section;
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');

    // Remove a classe 'active' de todos os botões de navegação e adiciona ao botão da seção atual
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        const sectionName = link.getAttribute('onclick').match(/'(.*?)'/)[1];
        link.classList.remove('active');
        if (sectionName === section) {
            link.classList.add('active');
        }
    });

    if (section === 'dashboard') {
        document.getElementById('dashboard-section').style.display = 'block';
        renderDashboard();
    } else {
        document.getElementById('dynamic-content').style.display = 'block';
        renderCatalogSection(section);
    }
}

function renderDashboard() {
    // Contar o número de produtos em cada categoria
    const totalExperimentos = catalogData.experimentos.products.length;
    const totalMiniexps = catalogData.miniexps.products.length;
    const totalSouvenirs = catalogData.souvenirs.products.length;
    const totalSequencias = catalogData.sequencias.products.length;

    // Atualizar os elementos do dashboard
    document.getElementById('total-experimentos').textContent = totalExperimentos;
    document.getElementById('total-miniexps').textContent = totalMiniexps;
    document.getElementById('total-souvenirs').textContent = totalSouvenirs;
    document.getElementById('total-sequencias').textContent = totalSequencias;

    // Exibir a data do último acesso (se disponível)
    // Isso é apenas um exemplo, o backend precisaria salvar essa informação.
    const now = new Date();
    const lastAccessString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('lastAccess').textContent = lastAccessString;
}

function renderCatalogSection(section) {
    const container = document.getElementById('dynamic-content');
    container.innerHTML = '';
    const data = catalogData[section];

    if (!data || !data.products) {
        container.innerHTML = `<p class="alert alert-warning">Dados para a seção '${section}' estão incompletos ou não existem.</p>`;
        return;
    }

    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'mb-4';
    sectionTitle.textContent = data.title;
    container.appendChild(sectionTitle);

    const addButton = document.createElement('button');
    addButton.className = 'btn btn-primary mb-4 add-product-btn';
    addButton.dataset.sectionType = section;
    addButton.innerHTML = `<i class="fas fa-plus me-1"></i> Adicionar ${data.title.replace('Didáticas', '').trim()}`;
    container.appendChild(addButton);

    const table = document.createElement('table');
    table.className = 'table table-striped table-hover';
    table.innerHTML = `
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Categoria</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    const tableBody = table.querySelector('tbody');

    data.products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>
                <button class="btn btn-sm btn-info me-2" onclick="showProductModal('${section}', '${product.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct('${section}', '${product.id}')">
                    <i class="fas fa-trash-alt"></i> Excluir
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    container.appendChild(table);
}

function showProductModal(sectionType, productId = null) {
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    resetModal();
    document.getElementById('productType').value = sectionType;

    // Adapta o título do modal
    const modalTitle = document.querySelector('#productModal .modal-title');
    const productLabels = document.querySelectorAll('#productForm label');

    if (sectionType === 'sequencias') {
        modalTitle.textContent = 'Gerenciar Sequência Didática';
        document.getElementById('productImage').parentElement.style.display = 'block';
        document.getElementById('productPdf').parentElement.style.display = 'block';
        document.getElementById('productPrice').parentElement.style.display = 'none';
        document.getElementById('productFeatures').parentElement.style.display = 'none';
        document.getElementById('productIncludes').parentElement.style.display = 'none';

        productLabels.forEach(label => {
            const labelText = label.textContent;
            if (labelText.includes('Produto')) {
                label.textContent = labelText.replace('Produto', 'Sequência');
            }
        });
    } else {
        modalTitle.textContent = 'Gerenciar Produto';
        document.getElementById('productImage').parentElement.style.display = 'block';
        document.getElementById('productPdf').parentElement.style.display = 'block';
        document.getElementById('productFeatures').parentElement.style.display = 'block';
        document.getElementById('productIncludes').parentElement.style.display = 'block';
        document.getElementById('productPrice').parentElement.style.display = (sectionType === 'miniexps') ? 'block' : 'none';
        
        productLabels.forEach(label => {
            const labelText = label.textContent;
            if (labelText.includes('Sequência')) {
                label.textContent = labelText.replace('Sequência', 'Produto');
            }
        });
    }

    // Preenche as categorias dinamicamente
    const categorySelect = document.getElementById('productCategory');
    categorySelect.innerHTML = '<option value="">Selecione...</option>';
    if (catalogData[sectionType] && catalogData[sectionType].categories) {
        catalogData[sectionType].categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    }

    if (productId) {
        isEditing = true;
        editingProductId = productId;
        const product = catalogData[sectionType].products.find(p => p.id === productId);
        if (product) {
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productImage').value = product.image || '';
            document.getElementById('productPdf').value = product.pdf || '';
            if (product.price) document.getElementById('productPrice').value = product.price;
            if (product.features) document.getElementById('productFeatures').value = product.features.join('\n');
            if (product.includes) document.getElementById('productIncludes').value = product.includes.join('\n');
        }
    }

    modal.show();
}

function saveProduct() {
    const catalogType = document.getElementById('productType').value;
    const productId = document.getElementById('productId').value || generateProductId(catalogType);
    
    const productData = {
        id: productId,
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        description: document.getElementById('productDescription').value || '',
    };
    
    if (catalogType !== 'sequencias') {
        productData.features = document.getElementById('productFeatures').value.split('\n').filter(f => f.trim());
        productData.includes = document.getElementById('productIncludes').value.split('\n').filter(i => i.trim());
    }

    productData.image = document.getElementById('productImage').value || '';
    productData.pdf = document.getElementById('productPdf').value || '';

    if (catalogType === 'miniexps') {
        productData.price = document.getElementById('productPrice').value || '';
    }

    if (!productData.name || !productData.category) {
        alert('Nome e categoria são obrigatórios!');
        return;
    }
    
    if (isEditing) {
        const index = catalogData[catalogType].products.findIndex(p => p.id === productId);
        if (index !== -1) {
            catalogData[catalogType].products[index] = productData;
        }
    } else {
        catalogData[catalogType].products.push(productData);
    }
    
    saveDataToBackend(catalogData).then(success => {
        if (success) {
            alert(isEditing ? 'Item atualizado com sucesso!' : 'Item adicionado com sucesso!');
            bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
            showSection(currentSection);
        }
    });
}

function deleteProduct(catalogType, productId) {
    const product = catalogData[catalogType].products.find(p => p.id === productId);
    if (!product) return;
    
    if (confirm(`Tem certeza que deseja excluir "${product.name}"?`)) {
        const index = catalogData[catalogType].products.findIndex(p => p.id === productId);
        if (index !== -1) {
            catalogData[catalogType].products.splice(index, 1);
            saveDataToBackend(catalogData).then(success => {
                if (success) {
                    showSection(currentSection);
                    alert('Item excluído com sucesso!');
                }
            });
        }
    }
}

function resetModal() {
    isEditing = false;
    editingProductId = null;
    document.getElementById('productForm').reset();
    document.querySelector('#productModal .modal-title').textContent = 'Adicionar Novo Produto';
}

function generateProductId(type) {
    const prefix = {
        experimentos: 'exp-',
        miniexps: 'miniexp-',
        souvenirs: 'souvenir-',
        sequencias: 'seq-'
    }[type];
    return prefix + Date.now();
}

function exportCatalog() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(catalogData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "catalog_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

async function importCatalog(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            if (importedData && typeof importedData === 'object') {
                const success = await saveDataToBackend(importedData);
                if (success) {
                    await loadSavedData();
                    alert("Dados importados com sucesso!");
                    showSection(currentSection);
                }
            } else {
                alert("O arquivo não contém um JSON válido.");
            }
        } catch (error) {
            alert("Erro ao ler o arquivo JSON.");
            console.error("Erro ao importar:", error);
        }
    };
    reader.readAsText(file);
}

document.getElementById('importFile').addEventListener('change', importCatalog);