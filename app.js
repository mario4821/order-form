'use strict';

Items.allItems = [];
var catalog = document.getElementById('catalog');
var selections = document.getElementById('selections');
var option = document.createElement('option');

// constructor function
function Items(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Items.allItems.push(this);
}

//object instances of the constructor
new Items('images/bag.jpg', 'bag');
new Items('images/banana.jpg', 'banana');
new Items('images/bathroom.jpg', 'bathroom');
new Items('images/boots.jpg', 'boots');
new Items('images/breakfast.jpg', 'breakfast');
new Items('images/bubblegum.jpg', 'bubblegum');
new Items('images/chair.jpg', 'chair');
new Items('images/cthulhu.jpg', 'cthulhu');
new Items('images/dog-duck.jpg', 'dog-duck');
new Items('images/dragon.jpg', 'dragon');
new Items('images/pen.jpg', 'pen');
new Items('images/pet-sweep.jpg', 'pet-sweep');
new Items('images/scissors.jpg', 'scissors');
new Items('images/shark.jpg', 'shark');
new Items('images/sweep.png', 'sweep');
new Items('images/tauntaun.jpg', 'tauntaun');
new Items('images/unicorn.jpg', 'unicorn');
new Items('images/usb.gif', 'usb');
new Items('images/water-can.jpg', 'water-can');
new Items('images/wine-glass.jpg', 'wine-glass');

function renderCatalog() {
  for(var i in Items.allItems) {
    option = document.createElement('option');
    option.textContent = Items.allItems[i].name;
    catalog.appendChild(option);
    option.src = Items.allItems[i].filepath;
    option.alt = Items.allItems[i].name;
    console.log(option.alt); 
  }
}


function populateOrder(e) {
  console.log(e);
  
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = e.target.value;
  trEl.appendChild(tdEl);
  
  var inputQuantity = document.createElement('input');
  inputQuantity.setAttribute('type', 'number');
  trEl.appendChild(inputQuantity);


  selections.appendChild(trEl);
}

catalog.addEventListener('change', populateOrder);

renderCatalog();