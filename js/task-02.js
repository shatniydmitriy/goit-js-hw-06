const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

for (const obj of ingredients) {
  const newEl = document.createElement('li');
  newEl.textContent = obj;
  newEl.classList.add('item');
  ingredientsEl.append(newEl);
}



