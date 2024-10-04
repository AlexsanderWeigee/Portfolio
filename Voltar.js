document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links que navegam para outras páginas com a classe 'btn1'
    const links = document.querySelectorAll('a');

    console.log(`Número de links com a classe 'btn1' encontrados: ${links.length}`);

    if (links.length === 0) {
        console.warn("Nenhum link com a classe 'btn1' foi encontrado. Verifique se a classe está aplicada corretamente.");
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            // Salva a posição atual de rolagem no sessionStorage
            sessionStorage.setItem('scrollPosition', window.scrollY);
            console.log(`Posição de rolagem salva: ${window.scrollY}`);
        });
    });

    // Utiliza o evento 'pageshow' para restaurar a posição de rolagem
    window.addEventListener('pageshow', (event) => {
        console.log(`Evento pageshow disparado. Persisted: ${event.persisted}`);
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        console.log(`Posição de rolagem recuperada: ${scrollPosition}`);
        if (scrollPosition) {
            // Restaura a posição de rolagem
            window.scrollTo(0, parseInt(scrollPosition));
            console.log(`Rolando para a posição: ${scrollPosition}`);
            // Remove a posição salva para evitar restaurar novamente
            sessionStorage.removeItem('scrollPosition');
        }
    });
    
});
