const  toggleBTN = document.getElementsByClassName('toggle')[0]
const navLinks = document.getElementsByClassName('nav-link')[0]


toggleBTN.addEventListener('click', ()  => {
    navLinks.classList.toggle('active')
});