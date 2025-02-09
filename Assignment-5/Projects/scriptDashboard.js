let products = [];
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const modal = document.getElementById('productModal');

// Fetch all products
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        renderProducts(products);
        loadCategories();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Render products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <p>${product.category}</p>
            <button class="btn" onclick="editProduct(${product.id})">Edit</button>
            <button class="btn" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
    `).join('');
}

// Load categories
async function loadCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        categoryFilter.innerHTML += categories.map(category => 
            `<option value="${category}">${category}</option>`
        ).join('');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Filter by category
async function filterByCategory() {
    const category = categoryFilter.value;
    if (category) {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const filtered = await response.json();
        renderProducts(filtered);
    } else {
        renderProducts(products);
    }
}

// Apply limit
function applyLimit() {
    const limit = document.getElementById('limitInput').value;
    if (limit) {
        const limited = products.slice(0, parseInt(limit));
        renderProducts(limited);
    }
}

// Modal functions
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Add Product';
    document.getElementById('productForm').reset();
    modal.style.display = 'block';
}

function logout() {
    window.location.href = "index.html";
}

function closeModal() {
    modal.style.display = 'none';
}

async function handleProductSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });
        const result = await response.json();
        console.log('Product added:', result);
        closeModal();
        fetchProducts();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Delete product
async function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE'
            });
            fetchProducts();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

// Initial load
fetchProducts();