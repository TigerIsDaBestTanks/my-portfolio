function toggleDarkMode() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }
    
    darkModeToggle.addEventListener("click", toggleDarkMode);
});
