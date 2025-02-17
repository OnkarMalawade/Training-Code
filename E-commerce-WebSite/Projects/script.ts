const productsGrid = document.getElementById('productsGrid') as HTMLElement | null;

if (!productsGrid) {
    throw new Error('Products grid element not found');
}

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((products: Product[]) => renderProducts(products))
        .catch(error => console.error('Error:', error));
}

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
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

fetchProducts();
