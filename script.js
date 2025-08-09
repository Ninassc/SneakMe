const botaoMenu = document.getElementById('botao-menu');
const menu = document.querySelector('.menu-aberto');
const fecharMenu = document.getElementById('fechar-menu'); 

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

fecharMenu.addEventListener('click', () => {
  menu.classList.remove('ativo');
});