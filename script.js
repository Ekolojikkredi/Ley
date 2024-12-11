// Menü Tıklamalarıyla İçerik Gösterimi
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll("section");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = document.querySelector(btn.dataset.target);

        // Diğer bölümleri gizle
        sections.forEach((section) => section.classList.add("hidden"));

        // Tıklanan bölümü göster
        target.classList.remove("hidden");
    });
});
