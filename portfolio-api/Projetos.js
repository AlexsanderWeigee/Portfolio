// Estrutura dos dados

document.addEventListener('DOMContentLoaded', () => {
  // TODO o seu c�digo JS aqui

  const projetos = [
    {
      id: 1,
      title: "Jogo do Número Secreto",
      description: "Um jogo onde o usuário tenta adivinhar um número secreto e tem um contador de tentativas, aquele que acertar com um número menor de tentativas ganha. Ideal para quem quer se divertir com a familha, também adicionei uma voz no jogo, pra tentar deixar mais imercivo e também testar novas ferramentas.",
      image: "Assents/JogoDoNumeroSecreto.png",
      technologies: [
        "Assents/icons8-html-48.png",
        "Assents/icons8-css-48.png",
        "Assents/icons8-js-48.png"
      ],
      link: "https://alexsanderweigee.github.io/Jogo-do-n-mero-secreto/",
      github: "https://github.com/AlexsanderWeigee/Jogo-do-n-mero-secreto",
      date: "2024-07-04",
      principal: true
    },

    {
      id: 2,
      title: "Calculadora de Churrasco",
      description: "Essa foi uma das atividades que tive que realizar na faculdade de ADS, onde tinha um desafio, criar uma calculadora de churrasco baseando-se nas informações: quantidade de homens, mulheres e crianças, com base na formula disponibilizada pela faculdade tinha que aparecer a quantidade de carne bovina, frango, linguiça, refri e serveja. A forma da struturação de HTML, CSS ficava de acordo com a criatividade, o importante era a lógica de programação, que foi feita em JS.",
      image: "Assents/CalculadoraDeChurrasco.png",
      technologies: [
        "Assents/icons8-html-48.png",
        "Assents/icons8-css-48.png",
        "Assents/icons8-js-48.png"
      ],
      link: "https://alexsanderweigee.github.io/Calculadora-de-churrasco/",
      github: "https://github.com/AlexsanderWeigee/Calculadora-de-churrasco",
      date: "2024-07-04",
      principal: true
    },

    {
      id: 3,
      title: "Carrinho de Compras",
      description: "Um dos primeiros projetos que começei a útilizar um pouco de tudo que eu já tinha aprendido, ele faz parte dos projetos que a Alura usa para ensinar o basico de HTML, CSS e JS.",
      image: "Assents/CarrinhoDeCompras.png",
      technologies: [
        "Assents/icons8-html-48.png",
        "Assents/icons8-css-48.png",
        "Assents/icons8-js-48.png"
      ],
      link: "https://alexsanderweigee.github.io/Carrinho-de-compras/",
      github: "https://github.com/AlexsanderWeigee/Carrinho-de-compras",
      date: "2024-07-08",
      principal: true
    },

    {
      id: 4,
      title: "Sorteador de números",
      description: "Um jogo onde você pode escolher uma quantidade de números que quer que sejam sorteados dentro de um determindado intervalo de número que também são determinados pelo jogador. Seguindo os mesmos principios dos números secretos, só que dessa vez é o jogo que te entrega o número, ideal para brincar de sorteio com a família.",
      image: "Assents/SorteadorDeNumero.png",
      technologies: [
        "Assents/icons8-html-48.png",
        "Assents/icons8-css-48.png",
        "Assents/icons8-js-48.png"
      ],
      link: "https://alexsanderweigee.github.io/Sorteador-de-numeros/",
      github: "https://github.com/AlexsanderWeigee/Sorteador-de-numeros",
      date: "2024-07-05",
      principal: false
    },

    {
      id: 5,
      title: "Entrada",
      description: "Uma plataforma que simula a compra de ingressos para algum evento, ele deixa amostra a quantidade disponível de ingressos restantes, o usuario pode escolher a quantidade de compras por categoria, e após vinalizar a compra é diminuído a quantidade de ingressos disponíveis.",
      image: "Assents/CompraIngresso.png",
      technologies: [
        "Assents/icons8-html-48.png",
        "Assents/icons8-css-48.png",
        "Assents/icons8-js-48.png"
      ],
      link: "https://alexsanderweigee.github.io/Ingresso/",
      github: "https://github.com/AlexsanderWeigee/Ingresso",
      date: "2024-07-08",
      principal: false
    },

    {
      id: 6,
      title: "Minhas Músicas",
      description: "Um dos primeiros projetos em Java através da plataforma Alura, ele não tem uma interface iterativa, pois não criei nenhum html, ele só roda em uma IDE, eu utilizei Intellij, apesar de um usuario não poder interagir de forma facil como outros projetos, ele foi importante para o meu desenvolvimento em Java.",
      image: "Assents/MinhasMusicas.png",
      technologies: [
        "Assents/icons8-java-48.png",
      ],
      link: "",
      github: "https://github.com/AlexsanderWeigee/Minhas-Musicas",
      date: "2024-07-23",
      principal: false
    },

    {
      id: 7,
      title: "Transferencia Bancaria",
      description: "Um trabalho da materia de Programação avançada da faculdade, onde eu tinha que realizar 6 projetos em um único trabalho, 1° pessoa (onde ele busca e armazena dados digitados pelo usuário e depois retorna); 2° Retângulo (Realiza o calcula da area do ratangulo baseado nas medidas digitadas); 3° Conta Bancaria (Realizar as principais transações, deposito, saque, saldo e encerrar); 4° Produto (deve exibir o produto e o preço); 5° funcionario (Deve apresentar os salarios de dois funcionarios e os bônus); 6° Sistema de Veículo (Deve aparecer uma mensagem que o carro se move mais rápido que a bicicleta) e 7° Encerrar. A amioria dos projetos achei muito sem graça, então adicionei coisas a mais depois de já ter entregado a atividade, como por exemplo, deixar o projeto rodando até encerrar tudo, permitindo que o usiário possa interagir com todos os projetos indefinidamente, até decidir encerrar o projeto que está e ir pra o próximo ou encerrar tudo, sem ter que ficar reiniciando o código a cada projeto. Pelo fato de ser algo muito simples, não tem interface facil de mexer, só com uma IDE para testar a aplicação, talvez, ESSE, no futuro eu possa dar uma encrementada e melhorar o conceito de alguns projetos.",
      image: "Assents/TransferenciaBancaria.png",
      technologies: [
        "Assents/icons8-java-48.png",
      ],
      link: "",
      github: "https://github.com/AlexsanderWeigee/Transferencia-bancaria",
      date: "2024-07-25",
      principal: false
    },

    {
      id: 8,
      title: "Amigo Secreto",
      description: "Um jogo em que um usuário adiciona nomes e o algorito sorteias para o amigo secreto, ideial par ase brincar com a família ou criar grupos.",
      image: "Assents/JogoDoAmigoSecreto.png",
      technologies: [
        "Assents/icons8-html-48.png",
        "Assents/icons8-css-48.png",
        "Assents/icons8-js-48.png"
      ],
      link: "https://alexsanderweigee.github.io/Amigo-secreto/",
      github: "https://github.com/AlexsanderWeigee/Amigo-secreto",
      date: "2024-07-09",
      principal: false
    },

    // outros projetos...
  ];

  // Fun��o que monta o card
  function criarCard(projeto) {
    const tecnologiasHTML = projeto.technologies
      .map(tech => `<img src="${tech}" alt="tecnologia">`)
      .join("");

    return `
     <div class="cards">
       <div class="cards__card">
         <div class="cards__imgTecnologia">
           <img class="Img" src="${projeto.image}" alt="Imagem do card">
           <li class="tecnologias">
             ${tecnologiasHTML}
           </li>
         </div>
       </div>
   
       <div class="cards__separacao">
         <div class="cards__Textos">
           <h1 class="cards__Titulo">${projeto.title}</h1>
   
           <p class="card__Texto">${projeto.description}</p>
   
           <small class="card__data">
             ${new Date(projeto.date + "T00:00:00").toLocaleDateString("pt-BR")}
           </small>
   
           <div class="card__btn">
           <div class="btn">
             <a href="${projeto.link}" class="explorar">Explorar</a>
           </div>
           <div class="btn">
             <a href="${projeto.github}" class="explorar">GitHub</a>
           </div>
           </div>
         </div>
       </div>
     </div>
   `;
  }

  function ordenarProjetos(lista) {
  return lista.sort((a, b) => {
    // 1. Prioridade primeiro
    if (a.principal !== b.principal) {
      return b.principal - a.principal; // true vem antes
    }

    // 2. Dentro da mesma prioridade, ordenar por data (desc)
    return new Date(b.date) - new Date(a.date);
  });
}

const projetosOrdenados = ordenarProjetos(projetos);

const containerPrincipal = document.getElementById("cards-principais");

if (containerPrincipal) {
  projetosOrdenados
    .filter(p => p.principal)
    .forEach(p => {
      containerPrincipal.innerHTML += criarCard(p);
    });
}
const containerTodos = document.getElementById("todos-os-projetos");

if (containerTodos) {
  projetosOrdenados.forEach(p => {
    containerTodos.innerHTML += criarCard(p);
  });
}

});