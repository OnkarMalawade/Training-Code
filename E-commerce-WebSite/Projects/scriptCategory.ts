const productsGrid = document.getElementById('productsGrid') as HTMLElement | null;
const categoryGrid = document.getElementById('categoryGrid') as HTMLElement | null;
const jewGrid = document.getElementById('JewGrid') as HTMLElement | null;


interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((products: Product[]) => renderProducts(products))
        .catch(error => console.error('Error:', error));
}

function fetchCategory(url: string, renderFunction: (products: Product[]) => void) {
    fetch(url)
        .then(response => response.json())
        .then((products: Product[]) => renderFunction(products))
        .catch(error => console.error('Error:', error));
}

function renderProducts(products: Product[]): void {
    if (productsGrid) {
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
}

function renderCategory(products: Product[]): void {
    if (categoryGrid) {
        categoryGrid.innerHTML = products.map(product => `
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
}

function renderCategoryJew(products: Product[]): void {
    if (jewGrid) {
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
}

fetchProducts();
fetchCategory('https://fakestoreapi.com/products/category/electronics', renderCategory);
fetchCategory('https://fakestoreapi.com/products/category/jewelery', renderCategoryJew);
