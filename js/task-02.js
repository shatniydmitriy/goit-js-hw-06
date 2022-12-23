const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elementIngridientsRef = ingredients.map(ingredient => {

const itemRef = document.createElement('li');
itemRef.textContent = ingredient;
itemRef.classList.add('item');
return itemRef;

});


ingredientsEl.append(...ingredientsEl);





