const districtData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirapalli"]
};

const scheduleData = {
    "Mumbai": ["March 22, 2025", "March 29, 2025"],
    "Pune": ["March 23, 2025", "March 30, 2025"],
    "Bangalore": ["March 24, 2025", "March 31, 2025"],
    "Kolkata": ["March 25, 2025", "April 1, 2025"],
    "Chennai": ["March 26, 2025", "April 2, 2025"]
};

// Function to populate states
function populateStates() {
    const stateSelect = document.getElementById("state");
    stateSelect.innerHTML = '<option value="">Select State</option>';
    Object.keys(districtData).forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

// Function to populate districts based on state selection
function populateDistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    const selectedState = stateSelect.value;
    
    districtSelect.disabled = !selectedState;
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (selectedState && districtData[selectedState]) {
        districtData[selectedState].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Function to display the waste collection schedule
function showSchedule() {
    const districtSelect = document.getElementById("district");
    const selectedDistrict = districtSelect.value;
    const scheduleList = document.getElementById("schedule-list");
    
    if (selectedDistrict && scheduleData[selectedDistrict]) {
        scheduleList.innerHTML = scheduleData[selectedDistrict]
            .map(date => `<li>📅 ${date}</li>`)
            .join("");
    } else {
        scheduleList.innerHTML = "<li>No schedule available.</li>";
    }
}

// Event listeners
window.onload = populateStates;
document.getElementById("state").addEventListener("change", populateDistricts);
document.getElementById("district").addEventListener("change", showSchedule);
