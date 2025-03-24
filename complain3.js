document.addEventListener("DOMContentLoaded", function () {
  // Form elements
  const complaintForm = document.querySelector(".complaint-details");
  const uploadField = document.querySelector(".upload-field");
  const formInputs = document.querySelectorAll(".form-input");
  const submitButton = document.querySelector(".submit-button");

  // Navigation elements
  const servicesDropdown = document.querySelector(".nav-link-group");
  const proceedButton = document.querySelector(".proceed-button");
  const optionCards = document.querySelectorAll(".option-card");

  // Form type toggles
  const formTypes = document.querySelectorAll(".form-type");

  // Handle form type selection
  formTypes.forEach((type) => {
    type.addEventListener("click", function () {
      formTypes.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Handle option card selection
  optionCards.forEach((card) => {
    card.addEventListener("click", function () {
      optionCards.forEach((c) => c.classList.remove("option-card-active"));
      this.classList.add("option-card-active");
    });
  });

  // File upload handling
  uploadField.addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg,.png,.pdf";

    fileInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const validTypes = ["image/jpeg", "image/png", "application/pdf"];
        if (validTypes.includes(file.type)) {
          uploadField.querySelector(".upload-text").textContent = file.name;
        } else {
          alert("Please upload a valid jpg, png, or pdf file");
        }
      }
    });

    fileInput.click();
  });

  // Form validation
  function validateForm() {
    let isValid = true;

    formInputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    return isValid;
  }

  // Form submission
  complaintForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log("Form submitted successfully");
      alert("Complaint submitted successfully!");
      complaintForm.reset();
    } else {
      alert("Please fill in all required fields");
    }
  });

  // Services dropdown interaction
  servicesDropdown.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  // Proceed button interaction
  proceedButton.addEventListener("click", function () {
    document.querySelector(".complaint-options").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Add error styling
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        .form-input.error {
            border: 2px solid #ff0000;
        }
        .nav-link-group.active .dropdown-icon {
            transform: rotate(180deg);
        }
    `;
  document.head.appendChild(styleSheet);
});
