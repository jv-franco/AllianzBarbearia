var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
  if (ul.classList.contains('open')){
    ul.classList.remove('open');
  }else{
    ul.classList.add('open');
  }
}

function fechar(){
  ul.classList.remove('open');
}

const menu = document.querySelector('header');

function activeScroll(){
menu.classList.toggle('ativo', scrollY > 100);
}

window.addEventListener('scroll', activeScroll);


