"use strict";

var header = document.querySelector('header');
var currentIndex = 0;
var slides = document.querySelector('.carousel-slide');
var totalSlides = document.querySelectorAll('.carousel-slide img').length;
$(document).ready(function () {
  $(document).ready(function () {
    $('#contactForm').submit(function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      // Simulação de envio de e-mail (substitua por sua lógica real)
      // Aqui, você pode adicionar a chamada ao serviço que lida com o envio de e-mails
      // Depois que o e-mail é enviado com sucesso, esconde o formulário e exibe a imagem

      hideFormAndShowImage();
    });

    function hideFormAndShowImage() {
      // Oculta o formulário
      $('#formContainer').fadeOut('slow', function () {
        // Exibe a imagem
        $('#imageContainer').fadeIn('slow');
      });
    }
  }); // Máscara para telefone

  $('#telefone').inputmask('(99) 99999-9999', {
    placeholder: ' '
  }); // Máscara para CNPJ

  $('#cnpj').inputmask('99.999.999/9999-99', {
    placeholder: ' '
  });
}); // Adicionando a validação no envio do formulário

$('form').submit(function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Impede o envio do formulário se a validação falhar
  }
});

function validateForm() {
  var telefone = $('#telefone').val().replace(/\D/g, ''); // Remove caracteres não numéricos

  var cnpj = $('#cnpj').val().replace(/\D/g, ''); // Remove caracteres não numéricos
  // Validar se os campos de telefone e CNPJ estão totalmente preenchidos

  if (telefone.length !== 11 || cnpj.length !== 14) {
    alert('Por favor, preencha corretamente os campos de Telefone e CNPJ.');
    return false;
  }

  return true;
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateCarousel();
}

function updateCarousel() {
  var translateValue = -currentIndex * 100 + '%';
  slides.style.transform = "translateX(".concat(translateValue, ")");
} // Autoplay


setInterval(function () {
  changeSlide(1);
}, 8000); // if (window.screen.width <= 425){
//     header.style.backgroundImage = 'url(./assets/images/backgroundHeader/background_header425.png)';
// } else if (window.screen.width <= 768){
//     header.style.backgroundImage = 'url(./assets/images/backgroundHeader/background_header768.png)';
// } else {
//     header.style.backgroundImage = 'url(./assets/images/backgroundHeader/background_header.png)';
// }

var menuCelular = document.getElementById('menuCelular');
menuCelular.addEventListener('click', function () {
  header.classList.toggle('ativouMenu');
}); // Colocar produtos

var modeloProduto = document.getElementById('modeloNovoProduto').childNodes[1];
produtosEletrica.map(function (e, i) {
  var eletricaFileira = document.querySelectorAll('#eletrica .fileira')[0];
  var novoProduto = modeloProduto.cloneNode(true);
  novoProduto.childNodes[1].src = e.img;
  novoProduto.childNodes[3].innerHTML = e.nome;
  novoProduto.childNodes[5].innerHTML = e.rolo;
  eletricaFileira.appendChild(novoProduto);
});
produtosPintura.map(function (e, i) {
  var produtosPintura = document.querySelectorAll('#pintura .fileira')[0];
  var novoProduto = modeloProduto.cloneNode(true);
  novoProduto.childNodes[1].src = e.img;
  novoProduto.childNodes[3].innerHTML = e.nome;
  novoProduto.childNodes[5].innerHTML = e.preco;
  produtosPintura.appendChild(novoProduto);
});

if (window.screen.width <= 375) {
  var _produtosEletrica = document.querySelectorAll('#eletrica .fileira--elemento');

  document.querySelector('#eletrica .fileira').style.width = "".concat(_produtosEletrica.length * 200, "px");

  var _produtosPintura = document.querySelectorAll('#pintura .fileira--elemento');

  document.querySelector('#pintura .fileira').style.width = "".concat(_produtosPintura.length * 200, "px");
} // Ver produto


document.addEventListener('click', function (e) {
  var elementoClicado = e.target;

  if (elementoClicado.classList[0] === 'imagemProduto' || elementoClicado.classList[0] === 'nomeProduto') {
    var modeloProdutoEscolhido = document.getElementById('modeloProdutoEscolhido');
    modeloProdutoEscolhido.style.display = 'flex';
    var produtoEscolhido = elementoClicado.parentNode.childNodes;
    modeloProdutoEscolhido.childNodes[1].childNodes[1].src = produtoEscolhido[1].src;
    modeloProdutoEscolhido.childNodes[3].childNodes[3].innerHTML = produtoEscolhido[3].innerText;
    modeloProdutoEscolhido.childNodes[3].childNodes[5].innerHTML = produtoEscolhido[5].innerText;
  }
});
document.getElementById('fecharEscolhido').addEventListener('click', function () {
  return document.getElementById('modeloProdutoEscolhido').style.display = 'none';
});