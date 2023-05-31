let buttons = document.querySelectorAll('button');
let lists = document.querySelectorAll('.listPoint');
let lis = document.querySelectorAll('li');
let list = document.querySelector('.categoriess');
let cards = document.querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.nextElementSibling.classList.toggle('active');
      button.classList.toggle('up');
    })
  })

  // lis.forEach(li => {
  //   li.addEventListener('click', () => {
  //     li.classList.toggle('checked');
  //   })
  // })

  function filter() {
    list.addEventListener('click', event => {
      const tragetId = event.target.dataset.id;
      console.log(tragetId);

      switch(tragetId) {
        case 'acsessuars': 
        console.log('hello');
          cards.forEach(card => {
            if (card.classList.contains('acsessuars')) {
              card.style.display = 'block'
              console.log('hello1');
            } else {
              card.style.display = 'none'
            }
          });
        case 'shue':
          cards.forEach(card => {
            if (card.classList.contains('shue')) {
              card.style.display = 'block'
            } else {
              card.style.display = 'none'
            }
          });
        case 'clothe':
          cards.forEach(card => {
            if (card.classList.contains('clothe')) {
              card.style.display = 'block'
            } else {
              card.style.display = 'none'
            }
          });
        case 'parts':
          cards.forEach(card => {
            if (card.classList.contains('parts')) {
              card.style.display = 'block'
            } else {
              card.style.display = 'none'
            }
          });
      }
    })
  }
  filter()