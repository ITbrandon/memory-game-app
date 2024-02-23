class MemoryGame {
  constructor(square, overlay, modal, playAgain, lives, result) {
    this.square = square;
    this.overlay = overlay;
    this.modal = modal;
    this.playAgain = playAgain;
    this.lives = lives;
    this.result = result;
    this.colorArray = ['red','blue','green','lime','orange','pink', 'red','blue','green','lime','orange','pink'];
    this.state = [];
    this.handicap = 10;
    this.lifeCount = this.handicap;
    this.matches = 0;
    this.init();
  }

  init = () => {
    this.randomizeSquares();
    this.hideSquares();
    this.play();
    this.playAgain.addEventListener('click', this.reset)
    this.lives.textContent = this.lifeCount;
  }

  randomizeSquares = () => {
    this.square.forEach(square => {
    let randomNumber = Math.floor(Math.random() * this.colorArray.length);
      square.classList.add(`bg-${this.colorArray[randomNumber]}-500`);
      this.colorArray.splice(randomNumber, 1);
    });
  }

  hideSquares = () => {
    this.square.forEach(square => {
      square.classList.add('bg-white');
    })
  }

  play = () => {
    this.square.forEach(square => {
      square.addEventListener('click', (event) => {
        square.classList.toggle('bg-white');
        this.state.push(event.target);

        if(this.state.length === 2)
        {
          this.checkMatch(this.state[0], this.state[1]);
          this.state = [];
        }

      })
    })
  }

  checkMatch = (first, second) => {

    const firstColor = first.classList[this.getColorIndex(first)];
    const secondColor = second.classList[this.getColorIndex(second)];

    if(first !== second)
    {
    
      if(firstColor === secondColor)
      {
        first.classList.add('invisible');
        second.classList.add('invisible');
        this.matches++;

        if(this.matches === 6)
        {
          this.result.textContent = "Congratulations";
          this.playAgain.classList.remove('bg-red-600');
          this.playAgain.classList.add('bg-green-600');
          setTimeout(() => {
          this.gameOver();
          },500)
        }
      }

      else
      {
        setTimeout(() => {
        first.classList.add('bg-white');
        second.classList.add('bg-white');
        }, 500) 

        this.lifeCount--;
        this.lives.textContent = this.lifeCount;

        if(this.lifeCount === 0)
        {
          this.result.textContent = "Sorry You Lose";
          this.playAgain.classList.remove('bg-green-600');
          this.playAgain.classList.add('bg-red-600');
          this.gameOver();
        }
      }
    }
  }

  gameOver = () => {
    this.overlay.classList.toggle('hidden');
    this.modal.classList.toggle('hidden');
    this.modal.classList.toggle('flex');
  }

  reset = () => {
    this.matches = 0;
    this.overlay.classList.toggle('hidden');
    this.modal.classList.toggle('hidden');
    this.modal.classList.toggle('flex');
    this.colorArray = ['red','blue','green','lime','orange','pink', 'red','blue','green','lime','orange','pink'];
    
    this.square.forEach(square => {
      square.classList.remove('bg-red-500');
      square.classList.remove('bg-blue-500');
      square.classList.remove('bg-green-500');
      square.classList.remove('bg-lime-500');
      square.classList.remove('bg-orange-500');
      square.classList.remove('bg-pink-500');
    })

    this.randomizeSquares();
    this.hideSquares();

    this.square.forEach(square => {
      square.classList.remove('invisible');
    })

    this.lifeCount = this.handicap;
    this.lives.textContent = this.lifeCount;
  }

  getColorIndex = (square) => {
    console.log(square.classList)
    let classArray = Array.from(square.classList)
    let colorIndex = null;

    if(square.classList.contains('bg-red-500'))
    {
      colorIndex = classArray.indexOf('bg-red-500')
    }

    else if(square.classList.contains('bg-blue-500'))
    {
      colorIndex = classArray.indexOf('bg-blue-500')
    }

    else if(square.classList.contains('bg-green-500'))
    {
      colorIndex = classArray.indexOf('bg-green-500')
    }

    else if(square.classList.contains('bg-pink-500'))
    {
      colorIndex = classArray.indexOf('bg-pink-500')
    }

    else if(square.classList.contains('bg-lime-500'))
    {
      colorIndex = classArray.indexOf('bg-lime-500')
    }

    else
    {
      colorIndex = classArray.indexOf('bg-orange-500')
    }

    return colorIndex;
  }
  }


const action = new MemoryGame(
  document.querySelectorAll('#square'),
  document.querySelector('#overlay'),
  document.querySelector('#modal'),
  document.querySelector('#play-again'),
  document.querySelector('#lives'),
  document.querySelector('#result')
)