//Retourne l'élément body
var body = document.querySelector('body');

//Retourne la liste des boutons
var buttons = document.querySelectorAll('.buttons button');

//On assigne un comportement au clic pour chacun des boutons
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',changeColor);
}

function changeColor(){
  //On réinitialise les classes de l'élément body
  body.className = '';
  
  //On ajoute la classe correspondant à la couleur à l'élément body
  body.classList.add(this.dataset.color);
}