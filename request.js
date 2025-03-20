const districtData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Delhi": ["New Delhi", "South Delhi", "East Delhi"],
    "West Bengal": ["Kolkata", "Howrah", "Siliguri"]
};

// Populate states
const stateSelect = document.getElementById("state");
Object.keys(districtData).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

// Populate districts when state is selected
stateSelect.addEventListener("change", function () {
    const state = this.value;
    const districtSelect = document.getElementById("district");

    districtSelect.disabled = false;
    districtSelect.innerHTML = '<option value="">Select District</option>';

    if (districtData[state]) {
        districtData[state].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});

// Handle form submission
document.getElementById("pickup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const date = document.getElementById("date").value;

    if (!state || !district || !date || !name) {
        alert("Please fill all fields.");
        return;
    }

    const request = { name, state, district, date };
    let requests = JSON.parse(localStorage.getItem("pickupRequests")) || [];

    requests.push(request);
    localStorage.setItem("pickupRequests", JSON.stringify(requests));

    alert("Pickup request submitted successfully!");
    window.location.href = "schedule.html";
});
