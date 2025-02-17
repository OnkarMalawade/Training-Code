var productsGrid = document.getElementById('productsGrid');
var categoryGrid = document.getElementById('categoryGrid');
var jewGrid = document.getElementById('JewGrid');

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(function (response) { return response.json(); })
        .then(function (products) { return renderProducts(products); })
        .catch(function (error) { return console.error('Error:', error); });
}
function fetchCategory(url, renderFunction) {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (products) { return renderFunction(products); })
        .catch(function (error) { return console.error('Error:', error); });
}
function renderProducts(products) {
    if (productsGrid) {
        productsGrid.innerHTML = products.map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-3\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top\" alt=\"").concat(product.title, "\" style=\"height: 200px; object-fit: contain;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p class=\"card-text\">$").concat(product.price, "</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">").concat(product.category, "</small></p>\n                    </div>\n                </div>\n            </div>\n        "); }).join('');
    }
}
function renderCategory(products) {
    if (categoryGrid) {
        categoryGrid.innerHTML = products.map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-3\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top\" alt=\"").concat(product.title, "\" style=\"height: 200px; object-fit: contain;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p class=\"card-text\">$").concat(product.price, "</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">").concat(product.category, "</small></p>\n                    </div>\n                </div>\n            </div>\n        "); }).join('');
    }
}
function renderCategoryJew(products) {
    if (jewGrid) {
        jewGrid.innerHTML = products.map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-3\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top\" alt=\"").concat(product.title, "\" style=\"height: 200px; object-fit: contain;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p class=\"card-text\">$").concat(product.price, "</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">").concat(product.category, "</small></p>\n                    </div>\n                </div>\n            </div>\n        "); }).join('');
    }
}
fetchProducts();
fetchCategory('https://fakestoreapi.com/products/category/electronics', renderCategory);
fetchCategory('https://fakestoreapi.com/products/category/jewelery', renderCategoryJew);
