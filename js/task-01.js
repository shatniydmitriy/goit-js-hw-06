const categoriesItemEl = document.querySelectorAll('.item');
console.log(categoriesItemEl.length);

categoriesItemEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const listEL = item.lastElementChild;
    console.log(`Elements: ${listEL.children.length}`);
});

