const wrapper = document.querySelector('.wrapper');  //Todo o corpo tanto do login como do register
const loginLink = document.querySelector('.login-link'); //Clicar no botão no login 
const registerLink = document.querySelector('.register-link'); //Clicar no botão de registro
const btnPopup = document.querySelector('.btnLogin-popup'); //Botão de login no header
const iconClose = document.querySelector('.icon-close'); //Botão para fechar o container

registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
});


loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


