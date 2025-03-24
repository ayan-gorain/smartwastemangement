// DOM Elements
const searchInput = document.querySelector(".search-title");
const productGrid = document.querySelector(".product-grid");
const menuIcon = document.querySelector(".menu-icon");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const sizeSelectors = document.querySelectorAll(".size-selector");

// Cart State
let cartItems = [];

// Search Functionality
searchInput.addEventListener("click", function () {
  // Convert div to input when clicked
  if (this.tagName.toLowerCase() === "h2") {
    const input = document.createElement("input");
    input.value = this.textContent;
    input.className = this.className;
    input.style.width = "100%";
    input.style.border = "none";
    input.style.outline = "none";
    input.style.background = "transparent";
    this.parentNode.replaceChild(input, this);
    input.focus();

    // Handle search
    input.addEventListener("input", function (e) {
      filterProducts(e.target.value);
    });
  }
});

function filterProducts(searchTerm) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    const title = product
      .querySelector(".product-title")
      .textContent.toLowerCase();
    const description = product
      .querySelector(".product-description")
      .textContent.toLowerCase();
    const shouldShow =
      title.includes(searchTerm.toLowerCase()) ||
      description.includes(searchTerm.toLowerCase());
    product.style.display = shouldShow ? "block" : "none";
  });
}

// Cart Functionality
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const productCard = e.target.closest(".product-card");
    const product = {
      id: Date.now(), // Unique ID for the cart item
      title: productCard.querySelector(".product-title").textContent,
      price: productCard.querySelector(".product-price").textContent,
      size: productCard.querySelector(".size-text").textContent,
      image: productCard.querySelector(".product-image").src,
    };

    addToCart(product);
    showCartNotification();
  });
});

function addToCart(product) {
  cartItems.push(product);
  updateCartCount();
  // Save to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function updateCartCount() {
  // Update cart icon or counter
  const cartCount = document.createElement("span");
  cartCount.className = "cart-count";
  cartCount.textContent = cartItems.length;
  // Add to DOM where needed
}

function showCartNotification() {
  const notification = document.createElement("div");
  notification.className = "cart-notification";
  notification.textContent = "Item added to cart!";
  document.body.appendChild(notification);

  // Remove notification after 2 seconds
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Size Selection
sizeSelectors.forEach((selector) => {
  selector.addEventListener("click", function () {
    const sizes = ["Low", "Medium", "High"];
    const currentSize = this.querySelector(".size-text").textContent;
    const currentIndex = sizes.indexOf(currentSize);
    const nextSize = sizes[(currentIndex + 1) % sizes.length];
    this.querySelector(".size-text").textContent = nextSize;
  });
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Trigger load if it's a URL_XX placeholder
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});

// Mobile Menu Toggle
menuIcon.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
  // Add your mobile menu implementation here
});

// Initialize from localStorage
window.addEventListener("load", function () {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartCount();
  }
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add CSS for notifications
const style = document.createElement("style");
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #079789;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        animation: slideIn 0.3s ease-out;
        z-index: 1000;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .cart-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: #f19b4b;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        min-width: 20px;
        text-align: center;
    }
`;
document.head.appendChild(style);
