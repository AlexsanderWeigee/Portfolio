// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados dos Projetos
let projects = [
    {
        id: 1,
        title: "Jogo do Número Secreto",
        description: "Um jogo onde o usuário tenta adivinhar um número secreto.",
        image: "Assents/JogoDoNumeroSecreto.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://seu-projeto.com/jogo",
        github: "https://github.com/seu-usuario/jogo",
        date: "2023-08-15",
        principal: true

    },

    {
        id: 2,
        title: "Teste 1",
        description: "Isso é apenas um teste, não é um texto de verdade. Espero que de certo de primeira. Só estou escrevendo para almentar o número de caracteres e testar se deu certo a parte que divide o texto e a scrolbar.",
        image: "Assents/JogoDoNumeroSecreto.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://seu-projeto.com/jogo",
        github: "https://github.com/seu-usuario/jogo",
        date: "15-08-2024",
        principal: true
    }
    // Adicione mais projetos aqui
];

// Dados dos Certificados
let certificates = [
    {
        id: 1,
        title: "Certificado de JavaScript",
        description: "Certificado emitido pela plataforma XYZ.",
        image: "Assents/certificado-js.png",
        link: "https://seu-certificado.com/js",
        date: "2023-07-10"
    },

    {
        id: 2,
        title: "Teste 1",
        description: "Certificado emitido pela plataforma XYZ.",
        image: "Assents/certificado-js.png",
        link: "https://seu-certificado.com/js",
        date: "2023-07-10"
    },
    // Adicione mais certificados aqui
];

// Endpoint para obter Projetos
app.get('/api/projects', (req, res) => {
    // Ordenar Projetos
    const principais = projects
        .filter(proj => proj.principal)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4);

    const comuns = projects
        .filter(proj => !proj.principal)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json([...principais, ...comuns]);
});

// Endpoint para obter Certificados
app.get('/api/certificates', (req, res) => {
    const sortedCertificates = certificates.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(sortedCertificates);
});

// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Função para criar um card de projeto
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('cards__card');

    // Imagem e Tecnologias
    const imgTecnologia = document.createElement('div');
    imgTecnologia.classList.add('cards__imgTecnologia');
    const img = document.createElement('img');
    img.classList.add('Img');
    img.src = project.image;
    img.alt = `Imagem de ${project.title}`;
    imgTecnologia.appendChild(img);

    // Tecnologias
    const techList = document.createElement('ul');
    techList.classList.add('tecnologias');
    project.technologies.forEach(tech => {
        const li = document.createElement('li');
        const techImg = document.createElement('img');
        // Aqui você pode mapear a tecnologia para um ícone correspondente
        techImg.src = `Assents/icons8-${tech.toLowerCase()}-48.png`;
        techImg.alt = tech;
        li.appendChild(techImg);
        techList.appendChild(li);
    });
    imgTecnologia.appendChild(techList);

    // Texto
    const separacao = document.createElement('div');
    separacao.classList.add('cards__separacao');

    const textos = document.createElement('div');
    textos.classList.add('cards__Textos');

    const titulo = document.createElement('h1');
    titulo.classList.add('cards__Titulo');
    titulo.textContent = project.title;

    const descricao = document.createElement('p');
    descricao.classList.add('card__Texto');
    descricao.textContent = project.description;

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn');
    const explorarBtn = document.createElement('a');
    explorarBtn.classList.add('explorar');
    explorarBtn.href = project.link;
    explorarBtn.textContent = 'Explorar';
    btnDiv.appendChild(explorarBtn);

    textos.appendChild(titulo);
    textos.appendChild(descricao);
    textos.appendChild(btnDiv);

    separacao.appendChild(textos);

    card.appendChild(imgTecnologia);
    card.appendChild(separacao);

    return card;
}

// Função para carregar os projetos
async function loadProjects() {
    try {
        const response = await fetch('http://localhost:3000/api/projects');
        const projects = await response.json();

        const container = document.getElementById('projects-container');
        container.innerHTML = ''; // Limpa o container

        projects.forEach(project => {
            const card = createProjectCard(project);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
    }
}

// Função para criar um card de certificado
function createCertificateCard(certificate) {
    const card = document.createElement('div');
    card.classList.add('cards__card');

    // Imagem
    const imgTecnologia = document.createElement('div');
    imgTecnologia.classList.add('cards__imgTecnologia');
    const img = document.createElement('img');
    img.classList.add('Img');
    img.src = certificate.image;
    img.alt = `Imagem de ${certificate.title}`;
    imgTecnologia.appendChild(img);

    // Texto
    const separacao = document.createElement('div');
    separacao.classList.add('cards__separacao');

    const textos = document.createElement('div');
    textos.classList.add('ccards__Textos');

    const titulo = document.createElement('h1');
    titulo.classList.add('ccards__Titulo');
    titulo.textContent = certificate.title;

    const descricao = document.createElement('p');
    descricao.classList.add('card__Texto');
    descricao.textContent = certificate.description;

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('container__Explorar');
    const explorarBtn = document.createElement('a');
    explorarBtn.classList.add('explorar');
    explorarBtn.href = certificate.link;
    explorarBtn.textContent = 'Explorar';
    btnDiv.appendChild(explorarBtn);

    textos.appendChild(titulo);
    textos.appendChild(descricao);
    textos.appendChild(btnDiv);

    separacao.appendChild(textos);

    card.appendChild(imgTecnologia);
    card.appendChild(separacao);

    return card;
}

// Função para carregar os certificados
async function loadCertificates() {
    try {
        const response = await fetch('http://localhost:3000/api/certificates');
        const certificates = await response.json();

        const container = document.getElementById('certificates-container');
        container.innerHTML = ''; // Limpa o container

        certificates.forEach(certificate => {
            const card = createCertificateCard(certificate);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar os certificados:', error);
    }
}

// Chamar a função ao carregar a página
window.onload = () => {
    loadProjects();
    loadCertificates();
};

// Chamar a função ao carregar a página
window.onload = loadProjects;

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
