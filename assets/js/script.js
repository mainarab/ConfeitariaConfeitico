function showMenu() {
  menuHamburger.style.display = "none"
  closeMenu.style.display = "inline"
  menu.style.display = "block"
}

function closeMenuHamburger() {
  menuHamburger.style.display = "inline"
  closeMenu.style.display = "none"
  menu.style.display = "none"
}

menuHamburger.addEventListener("click", showMenu)
closeMenu.addEventListener("click", closeMenuHamburger)


function windowVerification() {
  if (innerWidth < 1280) {
    menuHamburger.style.display = "inline"
    closeMenu.style.display = "none"
    menu.style.display = "none"
  } else {
    menuHamburger.style.display = "none"
    closeMenu.style.display = "none"
    menu.style.display = "flex"
  }
}
//O evento resize verifica o redimensionamento da tela
window.addEventListener("resize", windowVerification)

//Começo dos slides
//Troca os slides, utilizando o botão
function slide1() {
  //Passa pro slide 1
  imgSlider1.classList.remove("off") //Para aparecer, remove off
  imgSlider2.classList.remove("on");//Para não aparecer, remove on
  imgSlider3.classList.remove("on") //Para não aparecer, remove on

  imgSlider1.classList.add("on") //Para aparecer, adiciona on
  imgSlider2.classList.add("off") //Para não aparecer, adiciona off
  imgSlider3.classList.add("off") //Para não aparecer, adiciona off

  //Troca as imagens dos cupcakes
  cup1.setAttribute("src", "assets/img/cupcakePink.svg")
  cup2.setAttribute("src", "assets/img/cupcakeBrown.svg")
  cup3.setAttribute("src", "assets/img/cupcakeBrown.svg")
}

cup1.addEventListener("click", slide1)

function slide2() {
  //Passa pro slide 2
  imgSlider1.classList.remove("on") //Para não aparecer, remove on
  imgSlider2.classList.remove("off") //Para aparecer, remove off
  imgSlider3.classList.remove("on") //Para não aparecer, remove on

  imgSlider1.classList.add("off") //Para não aparecer, adiciona off
  imgSlider2.classList.add("on") //Para aparecer, adiciona on
  imgSlider3.classList.add("off") //Para não aparecer, adiciona off

  //Troca as imagens dos cupcakes
  cup1.setAttribute("src", "assets/img/cupcakeBrown.svg")
  cup2.setAttribute("src", "assets/img/cupcakePink.svg")
  cup3.setAttribute("src", "assets/img/cupcakeBrown.svg")
}

cup2.addEventListener("click", slide2)

function slide3() {
  //Passa pro slide 3
  imgSlider1.classList.remove("on") //Para não aparecer, remove on
  imgSlider2.classList.remove("on") //Para não aparecer, remove on
  imgSlider3.classList.remove("off") //Para aparecer, remove off

  imgSlider1.classList.add("off") //Para não aparecer, adiciona off
  imgSlider2.classList.add("off") //Para não aparecer, adiciona off
  imgSlider3.classList.add("on") //Para aparecer, adiciona on

  //Troca as imagens dos cupcakes
  cup1.setAttribute("src", "assets/img/cupcakeBrown.svg")
  cup2.setAttribute("src", "assets/img/cupcakeBrown.svg")
  cup3.setAttribute("src", "assets/img/cupcakePink.svg")
}

cup3.addEventListener("click", slide3)

//Faz o slide passar automaticamente
let slide = 1

function autoSlide() {
  slide++
  if (slide > 3) slide = 1

  switch (slide) {
    case 1:
      slide1()
      break
    case 2:
      slide2()
      break
    case 3:
      slide3()
      break
  }
}
setInterval(autoSlide, 5000)
//Fim dos slides
