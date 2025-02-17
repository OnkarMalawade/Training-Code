var productsGrid = document.getElementById("productsGrid");
var categoryGrid = document.getElementById("categoryGrid");
var jewGrid = document.getElementById("JewGrid");
var categoryFilter = document.getElementById("categoryFilter");
var modal = document.getElementById("productModal");
var products = [];
function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        products = data;
        renderProducts(products);
        loadCategories();
    })
        .catch(function (error) { return console.error("Error:", error); });
}
function fetchCategory(url, renderFunction) {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (products) { return renderFunction(products); })
        .catch(function (error) { return console.error("Error:", error); });
}
function renderProducts(productsToRender) {
    if (productsGrid) {
        productsGrid.innerHTML = productsToRender
            .map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-3\" style=\"width:300px; height:100%;\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top pt-4\" alt=\"").concat(product.title, "\" style=\"height: 200px; object-fit: contain;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p class=\"card-text\">$").concat(product.price, "</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">").concat(product.category, "</small></p>\n                    </div>\n                    <div class=\"d-flex justify-content-center mb-4\">\n                        <button class=\"btn btn-warning mx-2\" onclick=\"editProduct(").concat(product.id, ")\">Edit</button>\n                        <button class=\"btn btn-danger mx-2\" onclick=\"deleteProduct(").concat(product.id, ")\">Delete</button>\n                    </div>\n                </div>\n            </div>\n        "); })
            .join("");
    }
}
function renderCategory(products) {
    if (categoryGrid) {
        categoryGrid.innerHTML = products
            .map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top p-3\" alt=\"").concat(product.title, "\" style=\"height: 250px; object-fit: contain; border-radius: 10px;\">\n                    <div class=\"card-body text-center\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p class=\"card-text font-weight-bold\">$").concat(product.price, "</p>\n                        <p class=\"card-text text-muted\">").concat(product.category, "</p>\n                    </div>\n                </div>\n            </div>\n        "); })
            .join("");
    }
}
function renderCategoryJew(products) {
    if (jewGrid) {
        jewGrid.innerHTML = products
            .map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top p-3\" alt=\"").concat(product.title, "\" style=\"height: 250px; object-fit: contain; border-radius: 10px;\">\n                    <div class=\"card-body text-center\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p class=\"card-text font-weight-bold\">$").concat(product.price, "</p>\n                        <p class=\"card-text text-muted\">").concat(product.category, "</p>\n                    </div>\n                </div>\n            </div>\n        "); })
            .join("");
    }
}
function loadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
        .then(function (response) { return response.json(); })
        .then(function (categories) {
        if (categoryFilter) {
            categoryFilter.innerHTML += categories
                .map(function (category) { return "<option value=\"".concat(category, "\">").concat(category, "</option>"); })
                .join("");
        }
    })
        .catch(function (error) { return console.error("Error:", error); });
}
function filterByCategory() {
    if (categoryFilter) {
        var category = categoryFilter.value;
        if (category) {
            fetch("https://fakestoreapi.com/products/category/".concat(category))
                .then(function (response) { return response.json(); })
                .then(function (filtered) { return renderProducts(filtered); })
                .catch(function (error) { return console.error("Error:", error); });
        }
        else {
            renderProducts(products);
        }
    }
}
function applyLimit() {
    var limitInput = document.getElementById("limitInput");
    if (limitInput) {
        var limit = parseInt(limitInput.value);
        if (limit) {
            renderProducts(products.slice(0, limit));
        }
    }
}
function openAddModal() {
    var modalTitle = document.getElementById("modalTitle");
    if (modalTitle && modal) {
        modalTitle.textContent = "Add Product";
        var productForm = document.getElementById("productForm");
        if (productForm)
            productForm.reset();
        modal.style.display = "block";
    }
}
function closeModal() {
    if (modal)
        modal.style.display = "none";
}
function logout() {
    window.location.href = "index.html";
}
fetchProducts();
fetchCategory("https://fakestoreapi.com/products/category/electronics", renderCategory);
fetchCategory("https://fakestoreapi.com/products/category/jewelery", renderCategoryJew);
