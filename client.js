class OpenModals {
  constructor(overlay, closeBtn, settings, settingsBtn, increase, decrease, handicap, review, reviewBtn, closeReview, form, textArea, howTo, howToBtn, closeHowTo, mobileHowToBtn, mobileReviewBtn){
    this.overlay = overlay;
    this.closeBtn = closeBtn;
    this.settings = settings;
    this.settingsBtn = settingsBtn;
    this.increase = increase;
    this.decrease = decrease;
    this.handicap = handicap;
    this.review = review;
    this.reviewBtn = reviewBtn;
    this.closeReview = closeReview;
    this.form = form;
    this.textArea = textArea;
    this.howTo = howTo;
    this.howToBtn = howToBtn;
    this.closeHowTo = closeHowTo;
    this.mobileHowToBtn = mobileHowToBtn;
    this.mobileReviewBtn = mobileReviewBtn;
    this.livesCounter = 10;
    this.init();
  }

  init = () => {
    this.closeBtn.addEventListener('click', this.closeSettings);
    this.settingsBtn.addEventListener('click', this.openSettings);
    this.increase.addEventListener('click', this.livesUp);
    this.decrease.addEventListener('click', this.livesDown);
    this.reviewBtn.addEventListener('click', this.openForm);
    this.mobileReviewBtn.addEventListener('click', this.openForm);
    this.closeReview.addEventListener('click', this.closeForm);
    this.form.addEventListener('submit', this.submitForm);
    this.howToBtn.addEventListener('click', this.openHowToPlay);
    this.mobileHowToBtn.addEventListener('click', this.openHowToPlay);
    this.closeHowTo.addEventListener('click', this.closeHowToPlay);
    this.livesCounter = localStorage.getItem('lives');
    this.handicap.textContent = localStorage.getItem('lives');
  }

  closeSettings = () => {
    this.overlay.classList.toggle('hidden');
    this.settings.classList.toggle('hidden');
    localStorage.setItem('lives', this.livesCounter);
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

  openForm = () => {
    this.overlay.classList.toggle('hidden');
    this.review.classList.remove('hidden');
  }

  closeForm = () => {
    this.overlay.classList.toggle('hidden');
    this.review.classList.add('hidden');
  }

  submitForm = () => {
    event.preventDefault();
    this.closeForm();
    this.textArea.value = "";
  }

  openHowToPlay = () => {
    this.overlay.classList.toggle('hidden');
    this.howTo.classList.toggle('hidden');
  }

  closeHowToPlay = () => {
    this.overlay.classList.toggle('hidden');
    this.howTo.classList.toggle('hidden');
  }
}

const action = new OpenModals(
  document.querySelector('#overlay'),
  document.querySelector('#close'),
  document.querySelector('#settings-modal'),
  document.querySelector('#settings-button'),
  document.querySelector('#up'),
  document.querySelector('#down'),
  document.querySelector('#handicap'),
  document.querySelector('#review-modal'),
  document.querySelector('#review-btn'),
  document.querySelector('#close-review'),
  document.querySelector('#review-form'),
  document.querySelector('#text-area'),
  document.querySelector('#how-to-modal'),
  document.querySelector('#how-to-btn'),
  document.querySelector('#close-how-to'),
  document.querySelector('#mobile-how-to-btn'),
  document.querySelector('#mobile-review-btn')
);
