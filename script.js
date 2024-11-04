document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as seções com a classe .fade-in
    const sections = document.querySelectorAll('.fade-in');

    // Configurações do Intersection Observer
    const observerOptions = {
        root: null, // Usa a viewport como root
        rootMargin: '0px',
        threshold: 0.1 
    };

    // Cria uma instância do Intersection Observer (declara antes de usar na função de callback)
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Função de callback do observer
    function observerCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Desobserva o elemento após ser visível para otimização
                observer.unobserve(entry.target);
            }
        });
    }

    // Observa cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

    // Botão "Voltar ao Topo"
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Exibe o botão baseado na rolagem
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block'; 
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Adiciona a funcionalidade de rolagem suave ao botão
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave para o topo
        });
    });

    // Rolagem suave para links de âncoras
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });
});
