'use strict';

StrictDivFiller = function strictDivFiller(id){
  alert(id);
  var element = document.getElementById(id);
  element.style.backgroundColor = 'blue';
  element.innerHTML = 'Div Strictly Set!';
}

module.exports = StrictDivFiller;
