"use strict";

class OpenModals {
  constructor(overlay, closeBtn, settings, settingsBtn, increase, decrease, handicap, review, reviewBtn, closeReview, form, textArea, howTo, howToBtn, closeHowTo, mobileHowToBtn, mobileReviewBtn){
    this.overlay = overlay; // The overlay element
    this.closeBtn = closeBtn; // The close button element
    this.settings = settings; // The settings modal element
    this.settingsBtn = settingsBtn; // The settings button element
    this.increase = increase; // The increase lives button element
    this.decrease = decrease; // The decrease lives button element
    this.handicap = handicap; // The handicap element displaying lives
    this.review = review; // The review modal element
    this.reviewBtn = reviewBtn; // The review button element
    this.closeReview = closeReview; // The close review button element
    this.form = form; // The form element
    this.textArea = textArea; // The textarea element
    this.howTo = howTo; // The how-to-play modal element
    this.howToBtn = howToBtn; // The how-to-play button element
    this.closeHowTo = closeHowTo; // The close how-to-play button element
    this.mobileHowToBtn = mobileHowToBtn; // The mobile how-to-play button element
    this.mobileReviewBtn = mobileReviewBtn; // The mobile review button element
    this.livesCounter = 10; // Initial lives counter
    this.init(); // Initialize event listeners
  }

  // Initialize the Client
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
    // Retrieve lives counter from local storage and update display
    this.livesCounter = localStorage.getItem('lives');
    this.handicap.textContent = localStorage.getItem('lives');
  }

  //Close the settings modal
  closeSettings = () => {
    this.overlay.classList.toggle('hidden');
    this.settings.classList.toggle('hidden');
    localStorage.setItem('lives', this.livesCounter);
  }

 //Open the settings modal
  openSettings = () => {
    this.overlay.classList.toggle('hidden');
    this.settings.classList.toggle('hidden');
  }

 //Increase the lives counter
  livesUp = () => {
    if(this.livesCounter < 20)
    {
      this.livesCounter++
      this.handicap.textContent = this.livesCounter;
    }
  }

 //Decrease the lives counter
  livesDown = () => {
    if(this.livesCounter > 1)
    {
      this.livesCounter--
      this.handicap.textContent = this.livesCounter;
    }
  }
 
  //Open the review form modal
  openForm = () => {
    this.overlay.classList.toggle('hidden');
    this.review.classList.remove('hidden');
  }

  //Close the review form modal
  closeForm = () => {
    this.overlay.classList.toggle('hidden');
    this.review.classList.add('hidden');
  }
 
  //Submit the review form
  submitForm = () => {
    event.preventDefault();

  //Error Handling
    if(!this.textArea.value)
    {
      console.error('You Did Not Write Anything')
      const submit = document.querySelector('#submit-btn')
      submit.textContent = "No Value Input";
      setTimeout(() => {
        submit.textContent = "Submit"
      },1500)
      return;
    }
    
    this.closeForm();
    this.textArea.value = "";
  }

 //Open the how-to-play modal
  openHowToPlay = () => {
    this.overlay.classList.toggle('hidden');
    this.howTo.classList.toggle('hidden');
  }

  //Close the how-to-play modal
  closeHowToPlay = () => {
    this.overlay.classList.toggle('hidden');
    this.howTo.classList.toggle('hidden');
  }
}

//Initialize OpenModals instance with appropriate DOM elements
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
