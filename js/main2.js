const allIngredientsDOM = document.querySelectorAll('li'); //pereina per sąrašą
const ingredientai = [];

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    const itemName = item.innerText; // su innerText išgaunam reikšmę
    
    // keitimas žodiu i didziasias raides
    const nameInUpperCase = itemName.toUpperCase();
    console.log(itemName);

    ingredientai.push(nameInUpperCase);
}
console.log(ingredientai);
