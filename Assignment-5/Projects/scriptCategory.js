const productsGrid = document.getElementById('categoryGrid');
// https://fakestoreapi.com/products/category/jewelery
async function fetchCategory() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
        renderCategory(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderCategory(products) {
    productsGrid.innerHTML = products.map(product => `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                    <p class="card-text"><small class="text-muted">${product.category}</small></p>
                </div>
            </div>
        </div>
    `).join('');
}

fetchCategory();

const jewGrid = document.getElementById('JewGrid');
async function fetchCategoryJew() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
        renderCategoryjew(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderCategoryjew(products) {
    jewGrid.innerHTML = products.map(product => `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                    <p class="card-text"><small class="text-muted">${product.category}</small></p>
                </div>
            </div>
        </div>
    `).join('');
}

fetchCategoryJew();
