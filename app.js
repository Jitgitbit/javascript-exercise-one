document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [        // TWO OF EACH for the game
    {
      name: 'blank',
      img: 'images/blank.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'white',
      img: 'images/white.png'
    },
    {
      name: 'blank',
      img: 'images/blank.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'white',
      img: 'images/white.png'
    },
  ]

  const grid = document.querySelector('.grid')   // div from html picked up

  function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }
  createBoard()
})