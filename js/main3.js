const h2DOM = document.querySelector('h2')

// klases simba pridejimas. Pirmiausia kreipiamasi i elementa h2DOM, tada reikia prideti klases

h2DOM.classList.add('simba');

const allIngredientsDOM = document.querySelectorAll('.visi');

for (let = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    item.classList.add ('darzove')
}
