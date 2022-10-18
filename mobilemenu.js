var menuBar = document.querySelector('.mobile a.icon-menu');

menuBar.addEventListener('click',(e)=>{
    e.preventDefault()
    
    let menuMobile = document.querySelector('.mobile ul')
    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu');
    }else{

    
    menuMobile.classList.add('show-menu')}
});

$(document).ready(function(){



    $("a").on('click', function(event) {



      if (this.hash !== "") {

        event.preventDefault();


        var hash = this.hash;



        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){


          window.location.hash = hash;
        });
      } 
    });
  });

