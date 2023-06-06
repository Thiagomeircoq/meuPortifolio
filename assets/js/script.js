$(document).ready(function() {
  let active = false;
  let clickedOnce = false;

  function closeMenu() {
    active = false;
    $('.infos-bar').css('transform', 'translateX(-100%)');
    $('.hamburger').css('transform', 'translateX(0%)');
    $('.content').css('opacity', '1');
    $('.hamburger').removeClass("is-active");
  }

  function openMenu() {
    active = true;
    $('.infos-bar').css('transform', 'translateX(0)');
    $('.hamburger').css('transform', 'translateX(365%)');
    $('.content').css('opacity', '0.2');
    $('.hamburger').addClass("is-active");
  }

  $(".hamburger").click(function() {
    clickedOnce = true;
    if (active) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $(window).on("orientationchange resize", function() {
    if (clickedOnce) {
      if ($(window).width() >= 1210 && !active) {
        $('.infos-bar').css('transform', 'translateX(0%)');
        $('.hamburger').css('transform', 'translateX(365%)');
      } else if ($(window).width() < 1210 && active) {
        $('.hamburger').css('transform', 'translateX(365%)');
        $('.content').css('opacity', '0.2');
      } else if ($(window).width() >= 1210 && active) {
        $('.infos-bar').css('transform', 'translateX(0)');
        $('.content').css('opacity', '1');
      }
    }
  });
});

const projetos = {
    LojaVirtual: {
      img: 'projeto-loja.png',
      icon: 'fa-solid fa-calculator',
      video: '1TijK0Slfxk',
      title: 'Loja Virtual',
      descricao: 'Minha Loja Virtual oferece uma experiência completa aos clientes, com recursos de cadastro, login, busca, visualização e compra de produtos, além de funcionalidades exclusivas para administradores, como gerenciamento de produtos, usuários e promoções personalizadas.',
      tecnologias: {
        html: true,
        css: true,
        js: true,
        php: true,
        mysql: true
      },
      buttonDemo: '',
      buttonRepositorio: ''
    },
    catalogoFilmes: {
      img: 'projeto-catalogo-filmes.png',
        icon: 'fa-solid fa-film',
        video: 'rl3Hln_scJs',
        title: 'Catalogo de Filmes',
        descricao: 'Com o catálogo de filmes, você terá acesso fácil aos filmes mais populares de cada categoria. Explore trailers, informações de elenco, avaliações de usuários e adicione seus filmes favoritos. Utilize nossa busca inteligente para encontrar filmes específicos e desfrute de uma experiência completa de cinema em nossa plataforma.',
        tecnologias: {
          html: true,
          css: true,
          js: true,
          php: true,
          mysql: true,
          laravel: true
        },
        buttonDemo: '',
        buttonRepositorio: 'https://github.com/Thiagomeircoq/catalogo_filmes'
    },
    pokedex: {
      img: 'projeto-pokedex.png',
      icon: 'fa-solid fa-calculator',
      video: 'EuSWB6HxOzM',
      title: 'Pokedex',
      descricao: 'Com a Pokedex, você pode facilmente buscar informações sobre qualquer pokemon, seja pelo seu nome ou ID. Além disso, você pode filtrar pokemons por tipo para encontrar exatamente o que está procurando. Ao clicar em um pokemon, você terá acesso a informações detalhadas sobre suas estatísticas, vantagens, fraquezas e evoluções. Esses detalhes são cruciais para formular estratégias vencedoras em batalhas pokemon.',
      tecnologias: {
        html: true,
        css: true,
        js: true,
        php: false,
        mysql: false
      },
      buttonDemo: 'https://wonderful-klepon-05fbb6.netlify.app/',
      buttonRepositorio: 'https://github.com/Thiagomeircoq/pokedex'
    },
    chatOnline: {
      img: 'projeto-chat-online.png',
      icon: 'fa-solid fa-calculator',
      video: 'iJGc0dluN8A',
      title: 'Chat Online',
      descricao: 'Desenvolvi um sistema de chat online que permite aos usuários criar perfis, enviar e editar mensagens, além de personalizar suas informações. É uma plataforma interativa para comunicação conveniente entre usuários, promovendo colaboração e engajamento.',
      tecnologias: {
        html: true,
        css: true,
        js: true,
        php: true,
        mysql: true
      },
      buttonDemo: '',
      buttonRepositorio: 'https://github.com/Thiagomeircoq/chatOnline'
    },
    calculadora: {
        img: 'projeto-calculadora.png',
        icon: 'fa-solid fa-calculator',
        video: '',
        title: 'Calculadora',
        descricao: 'A calculadora oferece uma maneira fácil e rápida de realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Simplifique seus cálculos e obtenha resultados precisos com esta ferramenta eficiente.',
        tecnologias: {
          html: true,
          css: true,
          js: true,
          php: false,
          mysql: false
        },
        buttonDemo: 'https://main--dreamy-centaur-10a9c3.netlify.app/',
        buttonRepositorio: 'https://github.com/Thiagomeircoq/calculadora'
    },
    jogoDaVelha: {
      img: 'projeto-jogo-da-velha.png',
      icon: 'fa-solid fa-calculator',
      video: '',
      title: 'Jogo da Velha',
      descricao: 'O jogo da velha proporciona uma experiência clássica e divertida para jogadores de todas as idades. Desafie seus amigos  neste jogo de estratégia. Busque a vitória ao formar uma linha com três símbolos iguais em um tabuleiro 3x3. Divirta-se e aproveite momentos de diversão com o jogo da velha!',
      tecnologias: {
        html: true,
        css: true,
        js: true,
        php: false,
        mysql: false
      },
      buttonDemo: 'https://jovial-basbousa-cf9066.netlify.app/',
      buttonRepositorio: ''
  }
    
}

for (let projeto in projetos) {
  if (projetos.hasOwnProperty(projeto)) {
      criarEstrutura(projetos[projeto]);
  }
}

async function criarEstrutura(projeto) {
    const cardWrapper = document.querySelector('.card-wrapper');
    const slideContainer = document.querySelector('.slide-container');
    const card = document.createElement('div');
    const imageContent = document.createElement('div');
    const mudarImgDiv = document.createElement('div');
    const iconPlay = document.createElement('i');
    const overlay = document.createElement('span');
    const cardImage = document.createElement('div');
    const img = document.createElement('img');
    const iconGitHub = document.createElement('i');

    const cardContent = document.createElement('div');
    const nameProjeto = document.createElement('h2');
    const descricao = document.createElement('p');
    const projetosTec = document.createElement('ul');
    const buttons = document.createElement('div');
    const buttonDemo = document.createElement('a');
    const buttonRepos = document.createElement('a');
    const spanButton = document.createElement('span');
    const spanButton2 = document.createElement('span');

    cardWrapper.classList.add('card-wrapper', 'swiper-wrapper');
    card.classList.add('card', 'swiper-slide');
    imageContent.classList.add('image-content');
    mudarImgDiv.classList.add('mudar-img-div');
    overlay.classList.add('overlay');
    cardImage.classList.add('card-image');
    img.classList.add('card-img');
    iconPlay.classList.add('fa-solid', 'fa-circle-play');
    iconGitHub.classList.add('fa-brands', 'fa-github');

    cardContent.classList.add('card-content');
    nameProjeto.classList.add('name');
    descricao.classList.add('description');
    projetosTec.classList.add('projetos-tec');
    buttons.classList.add('buttons');
    buttonDemo.classList.add('button');
    buttonRepos.classList.add('button', 'border');
    buttonDemo.target = '__blank';
    buttonRepos.target = '__blank';

    cardWrapper.appendChild(card);
    card.appendChild(imageContent);
    imageContent.appendChild(overlay);
    imageContent.appendChild(cardImage);
    cardImage.appendChild(img);
    cardImage.appendChild(mudarImgDiv);
    mudarImgDiv.appendChild(iconPlay);    

    card.appendChild(cardContent);
    cardContent.appendChild(nameProjeto);
    cardContent.appendChild(descricao);
    cardContent.appendChild(projetosTec);
    cardContent.appendChild(buttons);
    buttons.appendChild(buttonDemo);
    buttons.appendChild(buttonRepos);
    buttonDemo.appendChild(spanButton);
    buttonRepos.appendChild(spanButton2);
    buttonRepos.appendChild(iconGitHub);

    img.src = 'assets/img/' + projeto.img;
    nameProjeto.innerText = projeto.title;
    descricao.innerText = projeto.descricao;
    if (!projeto.buttonDemo) {
      buttonDemo.addEventListener('click', () => {
        console.log('teste');
        alert('Desculpe, demo indisponivel!');
      })
    } else {
      buttonDemo.href = projeto.buttonDemo;
    }
    if (!projeto.buttonRepositorio) {
      buttonRepos.addEventListener('click', () => {
        alert('Desculpe, repositório indisponivel!');
      })
    } else {
      buttonRepos.href = projeto.buttonRepositorio;
    }
    spanButton.innerText = 'Visitar o Site';
    spanButton2.innerText = 'repositório';
    
    let tecnologias = projeto.tecnologias;
    for (let tecnologia in tecnologias) {
      if (tecnologias.hasOwnProperty(tecnologia)) {
        if (tecnologias[tecnologia] === true) {
          if (tecnologia === 'html') {
            const html = document.createElement('i');
            html.classList.add('fa-brands', 'fa-html5');
            projetosTec.appendChild(html);
          } 
          if (tecnologia === 'css') {
            const css = document.createElement('i');
            css.classList.add('fa-brands', 'fa-css3-alt');
            projetosTec.appendChild(css);
          } 
          if (tecnologia === 'js') {
            const js = document.createElement('i');
            js.classList.add('fa-brands', 'fa-square-js');
            projetosTec.appendChild(js);
          }
          if (tecnologia === 'php') {
            const php = document.createElement('i');
            php.classList.add('fa-brands', 'fa-php');
            projetosTec.appendChild(php);
          }
          if (tecnologia === 'mysql') {
            const mysql = document.createElement('img');
            mysql.src = 'assets/img/MySql-icon.png';
            mysql.style.width = '40px';
            projetosTec.appendChild(mysql);
          }
          if (tecnologia === 'laravel') {
            const laravel = document.createElement('i');
            laravel.classList.add('fa-brands', 'fa-laravel');
            projetosTec.appendChild(laravel);
          }
        }
      }
    }

    if (projeto.video) {
      cardImage.addEventListener('click', () => {
          playVideo(projeto.video)
      })
    } else {
      cardImage.addEventListener('click', () => {
        alert('Desculpe, video indisponivel!');
      })
    }
}

function playVideo(videoProjeto) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay-opacity');

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoProjeto}`
  iframe.classList.add('projects-video');
  iframe.allowFullscreen = true;

  const body = document.getElementsByTagName('body')[0];
  body.appendChild(overlay);
  overlay.appendChild(iframe);

  overlay.addEventListener('click', () => {
    overlay.remove();
  })
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    centerSlide: true,
    fade: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: "#right-arrow",
      prevEl: "#left-arrow",
    },
});
