// Problemas para fazer funcionar o js da sidebar
document.addEventListener("DOMContentLoaded", () => {
    const sidebarRoot = document.getElementById("sidebar-root");
    const toggle = document.getElementById("toggle");

    sidebarRoot.innerHTML = `
        <aside class="sidebar" id="sidebar">
            <nav class="sidebar__nav">
                <h2 class="sidebar__titulo">Navegação</h2>
                <a href="index.html">Início</a>
                <a href="TodosProjetos.html">Projetos</a>
                <a href="Certificados.html">Certificados</a>
                <a href="Curriculo.html">Currículo</a>

                <div class="sidebar__divisor"></div>

                <h2 class="sidebar__titulo">Redes</h2>
                <a href="https://github.com/AlexsanderWeigee" target="_blank">GitHub</a>
                <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                <a href="https://instagram.com" target="_blank">Instagram</a>
            </nav>
        </aside>
    `;

    const sidebar = document.getElementById("sidebar");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar--open");
        toggle.classList.toggle("active");
    });
});