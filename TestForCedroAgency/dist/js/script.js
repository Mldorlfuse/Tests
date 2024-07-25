document.addEventListener('DOMContentLoaded', ()=>{

    checkCountLike();

    let arrCard = document.querySelectorAll('.card__line');

    for (let i = 0; i < arrCard.length; i++) {
        if (i % 2 !== 0) {
            arrCard[i].style.background = '#EA976F';
        }
    }

    $('.slider').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false
            }
          }
        ]
      });

    document.querySelector('.header__nav-button').addEventListener('click', ()=>{
        document.querySelector('.header__info').style.display = 'none'
        document.querySelector('.nav').classList.remove('hidden')
        document.querySelector('.header__nav-button-esc').classList.remove('hidden')        
    })

    document.querySelector('.header__nav-button-esc').addEventListener('click', ()=>{
        document.querySelector('.header__info').style.display = 'flex'
        document.querySelector('.nav').classList.add('hidden')
        document.querySelector('.header__nav-button-esc').classList.add('hidden')    
    })

    function checkCountLike() {
        if(document.querySelector('.counter').children[0].innerHTML == '0') {
            document.querySelector('.counter').style.display = 'none'
        } else {
            document.querySelector('.counter').style.display = 'flex'
        }
    }

    document.querySelectorAll('.card__like').forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('card__like_active')
            document.querySelector('.counter').children[0].innerHTML = `${document.querySelectorAll('.card__like_active').length}`
            checkCountLike();
        })
    })    
})
