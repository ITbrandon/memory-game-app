class OpenModals {
  constructor(overlay, closeBtn, settings, settingsBtn, increase, decrease, handicap){
    this.overlay = overlay;
    this.closeBtn = closeBtn;
    this.settings = settings;
    this.settingsBtn = settingsBtn;
    this.increase = increase;
    this.decrease = decrease;
    this.handicap = handicap;
    this.livesCounter = 10;
    this.init();
  }

  init = () => {
    this.closeBtn.addEventListener('click', this.closeModals);
    this.settingsBtn.addEventListener('click', this.openSettings);
    this.increase.addEventListener('click', this.livesUp);
    this.decrease.addEventListener('click', this.livesDown);
  }

  closeModals = () => {
    this.overlay.classList.toggle('hidden');
    this.settings.classList.toggle('hidden');
  }

  openSettings = () => {
    this.overlay.classList.toggle('hidden');
    this.settings.classList.toggle('hidden');
  }

  livesUp = () => {
    if(this.livesCounter < 20)
    {
      this.livesCounter++
      this.handicap.textContent = this.livesCounter;
    }
  }

  livesDown = () => {
    if(this.livesCounter > 1)
    {
      this.livesCounter--
      this.handicap.textContent = this.livesCounter;
    }
  }
}

const action = new OpenModals(
  document.querySelector('#overlay'),
  document.querySelector('#close'),
  document.querySelector('#settings-modal'),
  document.querySelector('#settings-button'),
  document.querySelector('#up'),
  document.querySelector('#down'),
  document.querySelector('#handicap')
);


