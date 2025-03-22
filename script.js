// Mobile Navigation
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");

mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("nav-open");
  mobileMenuBtn.setAttribute(
    "aria-expanded",
    mainNav.classList.contains("nav-open"),
  );
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      mainNav.classList.remove("nav-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// Form Validation
const contactForm = document.querySelector(".contact-form");
const formInputs = contactForm.querySelectorAll(".form-input");
const fileInput = document.querySelector(".file-input");

const showError = (input, message) => {
  const formGroup = input.closest(".form-group");
  const error =
    formGroup.querySelector(".error-message") || document.createElement("div");
  error.className = "error-message";
  error.textContent = message;
  if (!formGroup.querySelector(".error-message")) {
    formGroup.appendChild(error);
  }
  input.classList.add("error");
};

const clearError = (input) => {
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error-message");
  if (error) {
    error.remove();
  }
  input.classList.remove("error");
};

const validateInput = (input) => {
  const value = input.value.trim();

  if (input.hasAttribute("required") && !value) {
    showError(input, "This field is required");
    return false;
  }

  if (input.id === "house-number" && value) {
    const houseNumberPattern = /^[0-9A-Za-z/-]+$/;
    if (!houseNumberPattern.test(value)) {
      showError(input, "Please enter a valid house number");
      return false;
    }
  }

  clearError(input);
  return true;
};

// File Upload Handling
const handleFileUpload = (input) => {
  const file = input.files[0];
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!file) {
    showError(input, "Please select a file");
    return false;
  }

  if (!allowedTypes.includes(file.type)) {
    showError(input, "Please upload a JPG, PNG, or PDF file");
    return false;
  }

  if (file.size > maxSize) {
    showError(input, "File size must be less than 5MB");
    return false;
  }

  clearError(input);

  // Update file name display
  const fileNameDisplay = document.querySelector(".file-name");
  if (fileNameDisplay) {
    fileNameDisplay.textContent = file.name;
  }

  return true;
};

// Form Submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Validate all inputs
  formInputs.forEach((input) => {
    if (!validateInput(input)) {
      isValid = false;
    }
  });

  // Validate file if selected
  if (fileInput.files.length > 0) {
    if (!handleFileUpload(fileInput)) {
      isValid = false;
    }
  }

  if (isValid) {
    // Here you would typically send the form data to a server
    console.log("Form is valid, submitting...");
    // Add your form submission logic here
  }
});

// Real-time validation
formInputs.forEach((input) => {
  input.addEventListener("blur", () => validateInput(input));
  input.addEventListener("input", () => {
    if (input.classList.contains("error")) {
      validateInput(input);
    }
  });
});

// File input change handler
fileInput.addEventListener("change", () => handleFileUpload(fileInput));

// Search functionality
const searchForm = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Add your search handling logic here
    console.log("Searching for:", searchTerm);
  }
});
