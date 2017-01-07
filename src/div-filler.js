DivFiller = function divFiller(id){
  alert(id);
  var element = document.getElementById(id);
  element.style.backgroundColor = 'red';
  element.innerHTML = 'Div Normally Set!';
}

module.exports = DivFiller;
