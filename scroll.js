const menuItems = document.querySelectorAll (`header a[href^="#"]`);

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick () {
    console.log('CLICOU')
}





    