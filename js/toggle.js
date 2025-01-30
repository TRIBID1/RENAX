// Get references to elements
const themeStyle = document.getElementById("theme-style");
const toggleButton = document.getElementById("theme-toggle");

// Check localStorage for the saved theme, default to 'light'
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme
themeStyle.href = savedTheme === "dark" ? "css/dark.css" : "css/light.css";

// Update button text based on theme
toggleButton.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    if (themeStyle.href.includes("light.css")) {
        themeStyle.href = "css/dark.css";
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        themeStyle.href = "css/light.css";
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "Switch to Dark Mode";
    }
});