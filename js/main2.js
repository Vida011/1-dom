const allIngredientsDOM = document.querySelectorAll('li'); //pereina per sąrašą
let a = [];

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    const itemName = item.innerText; // su innerText išgaunam reikšmę
    console.log(itemName);
    // keitimas žodiu i didziasias raides
    const nameInUpperCase = itemName.toUpperCase();
    a.push(nameInUpperCase);
}
console.log(a);
