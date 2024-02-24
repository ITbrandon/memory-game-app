class TopPlayers {
  constructor(gallery){
    this.gallery = gallery;
    this.players = [
    {
      name: 'Alex Mullen',
      picture: 'alex.jpg' 
    }, 
       
    {
      name: "Dom O'Brien",
      picture: 'dom.jpg'
    }, 

    {
      name: 'Joshua Foer',
      picture: 'josh.jpg'
    },

    {
      name: 'Ed Cooke',
      picture: 'ed.jpg'
    },

    {
      name: 'Nelson Dellis',
      picture: 'nelson.jpg' 
    }, 
       
    {
      name: "Stephen Wilt",
      picture: 'stephen.jpg'
    }, 

    {
      name: 'Safran Foer',
      picture: 'safran.jpg'
    },

    {
      name: 'Kathy Pennell',
      picture: 'kathy.jpg'
    }
  ];
    this.init();
  }

  init = () => {
    this.getObjects();
  }

  getObjects = () => {
    for(let i = 0; i < this.players.length; i++)
    {
      this.createCards(this.players[i]);
    }
  }

  createCards = (player) => {
    const card = document.createElement('article');
    card.classList.add('bg-white');
    card.classList.add('text-black');
    card.classList.add('font-retro');
    card.classList.add('flex');
    card.classList.add('flex-col');
    card.classList.add('items-center');
    card.classList.add('justify-center');
    card.classList.add('gap-4');
    card.classList.add('w-68');
    card.classList.add('border-2');
    card.classList.add('border-solid');
    card.classList.add('border-white');
    card.classList.add('rounded-xl');
    card.classList.add('p-4');
    
    const frame = document.createElement('img');
    frame.setAttribute('src', `images/${player.picture}`);
    frame.setAttribute('alt', player.name);
    frame.classList.add('w-full');
    frame.classList.add('h-52')
    frame.classList.add('border-2');
    frame.classList.add('border-solid');
    frame.classList.add('border-black');

    const name = document.createElement('h3');
    name.classList.add('p-4');
    name.textContent = player.name;

    card.appendChild(frame);
    card.appendChild(name);

    this.displayCard(card);
  }

  displayCard = (card) => {
    this.gallery.appendChild(card);
  }

}

const action = new TopPlayers(document.querySelector('#gallery'))