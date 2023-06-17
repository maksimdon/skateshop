let buttons = document.querySelectorAll('button');
let lists = document.querySelectorAll('.listPoint');
let lis = document.querySelectorAll('li');
let categoriess = document.querySelector('.categoriess');
let price = document.querySelector('.price2');
let color = document.querySelector('.colors');
let cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('active');
    button.classList.toggle('up');
  })
})


categoriess.addEventListener('click', event => {
  filter();
})

price.addEventListener('click', event => {
  filter();
})

color.addEventListener('click', event => {
  filter();
})

function filter() {
  const targetId = event.target.dataset.id;
  cards.forEach(card => {
    if (card.classList.contains(targetId)) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  });
}