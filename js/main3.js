const h1DOM = document.querySelector('h1')

// klases simba pridejimas. Pirmiausia kreipiamasi i elementa h2DOM, tada reikia prideti klases

h1DOM.classList.add('simba');

const allLiDOM = document.querySelectorAll('li');
// eik per kiekvieną elementą ir padaryk analogišką komandą: h1DOM.classList.add, t.y. kreipkis i kiekviena
//to ind.list'o klasiu sarasa ir pridek klase
for (let i = 0; i < allIngredientsDOM.length; i++) {
    const itemDOM = allLiDOM[i]; //itasis visu DOM elementu narys
    itemDOM.classList.add ('darzove'); // pridedam klase 'darzove'
}
