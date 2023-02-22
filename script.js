const sectionMenu = document.querySelectorAll('.section-menu');
const arrows = document.querySelectorAll('.arrow-icon');
const sectionNames = document.querySelectorAll('.section-name');

/*const meals = [
  {
    key: "refeicoes-com-peixe",
    meal: "REFEIÇÕES COM PEIXE",
    img: "img/down-arrows.png",
    items: [
      {
        title: "PEIXADA NA TELHA",
        subtitle: "PINTADO AO MOLHO COM PIMENTÕES",
        ingredients: "(arroz, pirão, mandioca frita, tilápia frita, salada à moda da casa e farofa)",
        serves: "SERVE 3 PESSOAS",
        price: "R$140",
      },
      {
        title: "TILÁPIA À PARMEGIANA",
        subtitle: "ARROZ, BATATA E SALADA À MODA DA CASA",
        ingredients: "(alface americana, palmito, tomate cereja, pepino, cebola roxa e molho especial)",
        serves: "SERVE 3 PESSOAS",
        price: "R$90",
        estoque: 0,
      },
      {
        title: "FRANGO",
        subtitle: "ARROZ, BATATA E SALADA À MODA DA CASA",
        ingredients: "(alface americana, palmito, tomate cereja, pepino, cebola roxa e molho especial)",
        serves: "SERVE 4 PESSOAS",
        price: "R$50",
      }
    ], 
  }, 
]

function createMeals(meals) {
  for (let index = 0; index < meals.length; index += 1) {
    const main = document.getElementsByTagName("main")[0]
    const section = document.createElement("section")
    const divSection = document.createElement("div")
    const h2 = document.createElement("h2")
    const div = document.createElement("div")

    main.appendChild(section)
    section.id = meals[index].key

    section.appendChild(divSection)
    divSection.className = "section-name"
    divSection.appendChild(h2)
    h2.innerText = meals[index].meal

    section.appendChild(div)
    div.className = "section-menu"

    const items = meals[index].items
    
    
    for (let index2 = 0; index2 < items.length; index2 += 1) {

      const div2 = document.createElement("div")
      div.appendChild(div2)
      div2.className = "items"
      const div3 = document.createElement("div")
      div2.appendChild(div3)


      const pTitle = document.createElement("p")
      const spanTitle = document.createElement("span")
      const pSubtitle = document.createElement("p")
      const spanSubtitle = document.createElement("span")
      const pIngredients = document.createElement("p")
      const pServe = document.createElement("p")
      const pPrice = document.createElement("p")
      
      div3.appendChild(pTitle)
      pTitle.appendChild(spanTitle)
      spanTitle.className = "item-name"
      spanTitle.innerHTML = items[index2].title
      
      div3.appendChild(pSubtitle)
      pSubtitle.appendChild(spanSubtitle)
      spanSubtitle.className = "item-name"
      spanSubtitle.innerHTML = items[index2].subtitle

      div3.appendChild(pIngredients)
      pIngredients.innerHTML = items[index2].ingredients
      div3.appendChild(pServe)
      pServe.innerHTML = items[index2].serves
      div2.appendChild(pPrice)
      pPrice.className = "price"
      pPrice.innerHTML = items[index2].price
    }
  }
}*/

window.onload = () => {
  // createMeals(meals)
  for (const section of sectionNames) {
    section.addEventListener('click', () => {
      const next = section.nextElementSibling.style;
      if (next.display === '') {
        next.display = 'flex';
        section.nextElementSibling.classList.add('show');
        section.lastElementChild.src = 'img/up-arrows.png';
      } else {
        next.display = '';
        section.lastElementChild.src = 'img/down-arrows.png';
      }
    })
  }
}
