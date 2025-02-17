const productsGrid = document.getElementById(
  "productsGrid"
) as HTMLElement | null;
const categoryGrid = document.getElementById(
  "categoryGrid"
) as HTMLElement | null;
const jewGrid = document.getElementById("JewGrid") as HTMLElement | null;
const categoryFilter = document.getElementById(
  "categoryFilter"
) as HTMLSelectElement | null;
const modal = document.getElementById("productModal") as HTMLElement | null;

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

let products: Product[] = [];

function fetchProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data: Product[]) => {
      products = data;
      renderProducts(products);
      loadCategories();
    })
    .catch((error) => console.error("Error:", error));
}

function fetchCategory(
  url: string,
  renderFunction: (products: Product[]) => void
) {
  fetch(url)
    .then((response) => response.json())
    .then((products: Product[]) => renderFunction(products))
    .catch((error) => console.error("Error:", error));
}

function renderProducts(productsToRender: Product[]): void {
  if (productsGrid) {
    productsGrid.innerHTML = productsToRender
      .map(
        (product) => `
            <div class="col-md-4">
                <div class="card mb-3" style="width:300px; height:100%;">
                    <img src="${product.image}" class="card-img-top pt-4" alt="${product.title}" style="height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                        <p class="card-text"><small class="text-muted">${product.category}</small></p>
                    </div>
                    <div class="d-flex justify-content-center mb-4">
                        <button class="btn btn-warning mx-2" onclick="editProduct(${product.id})">Edit</button>
                        <button class="btn btn-danger mx-2" onclick="deleteProduct(${product.id})">Delete</button>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

function renderCategory(products: Product[]): void {
  if (categoryGrid) {
    categoryGrid.innerHTML = products
      .map(
        (product) => `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 250px; object-fit: contain; border-radius: 10px;">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text font-weight-bold">$${product.price}</p>
                        <p class="card-text text-muted">${product.category}</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

function renderCategoryJew(products: Product[]): void {
  if (jewGrid) {
    jewGrid.innerHTML = products
      .map(
        (product) => `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 250px; object-fit: contain; border-radius: 10px;">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text font-weight-bold">$${product.price}</p>
                        <p class="card-text text-muted">${product.category}</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

function loadCategories() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((categories: string[]) => {
      if (categoryFilter) {
        categoryFilter.innerHTML += categories
          .map((category) => `<option value="${category}">${category}</option>`)
          .join("");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function filterByCategory() {
  if (categoryFilter) {
    const category = categoryFilter.value;
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((filtered: Product[]) => renderProducts(filtered))
        .catch((error) => console.error("Error:", error));
    } else {
      renderProducts(products);
    }
  }
}

function applyLimit() {
  const limitInput = document.getElementById(
    "limitInput"
  ) as HTMLInputElement | null;
  if (limitInput) {
    const limit = parseInt(limitInput.value);
    if (limit) {
      renderProducts(products.slice(0, limit));
    }
  }
}

function openAddModal() {
  const modalTitle = document.getElementById(
    "modalTitle"
  ) as HTMLElement | null;
  if (modalTitle && modal) {
    modalTitle.textContent = "Add Product";
    const productForm = document.getElementById(
      "productForm"
    ) as HTMLFormElement | null;
    if (productForm) productForm.reset();
    modal.style.display = "block";
  }
}

function closeModal() {
  if (modal) modal.style.display = "none";
}

function logout() {
  window.location.href = "index.html";
}

fetchProducts();
fetchCategory(
  "https://fakestoreapi.com/products/category/electronics",
  renderCategory
);
fetchCategory(
  "https://fakestoreapi.com/products/category/jewelery",
  renderCategoryJew
);
