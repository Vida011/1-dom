const allIngredientsDOM = document.querySelectorAll('li');

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    const itemName = item.innerText;
    console.log(itemName);
}
