const districtData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat", "Roing"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    "Haryana": ["Chandigarh", "Faridabad", "Gurugram", "Panipat", "Ambala"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Kullu"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Palakkad"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
    "Manipur": ["Imphal", "Bishnupur", "Churachandpur", "Senapati", "Ukhrul"],
    "Meghalaya": ["Shillong", "Tura", "Nongstoin", "Baghmara", "Jowai"],
    "Mizoram": ["Aizawl", "Lunglei", "Serchhip", "Kolasib", "Champhai"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Berhampur"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirapalli"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Haldwani"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
};

// Dummy Waste Collection Schedule
const scheduleData = {
    "Mumbai": ["March 22, 2025", "March 29, 2025"],
    "Pune": ["March 23, 2025", "March 30, 2025"],
    "Bangalore": ["March 24, 2025", "March 31, 2025"],
    "Kolkata": ["March 25, 2025", "April 1, 2025"],
    "Chennai": ["March 26, 2025", "April 2, 2025"],
    "Delhi": ["March 27, 2025", "April 3, 2025"]
};

// Populate States Dynamically
const stateSelect = document.getElementById("state");
Object.keys(districtData).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

// Populate Districts Based on Selected State
stateSelect.addEventListener("change", function () {
    const state = this.value;
    const districtSelect = document.getElementById("district");

    // Enable District Select
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

// Show Schedule Based on District
document.getElementById("district").addEventListener("change", function () {
    const district = this.value;
    const scheduleList = document.getElementById("schedule-list");

    if (scheduleData[district]) {
        scheduleList.innerHTML = scheduleData[district].map(date => `<li>📅 ${date}</li>`).join("");
    } else {
        scheduleList.innerHTML = "<li>No schedule available.</li>";
    }
});
