document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded!");
    const themeSelector = document.getElementById("theme-selector");
    
    // Cek localStorage dan atur tampilan sesuai pilihan sebelumnya
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeSelector.value = savedTheme;
    }

    themeSelector.addEventListener("change", function () {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(this.value);
        localStorage.setItem("theme", this.value);
    });
});
