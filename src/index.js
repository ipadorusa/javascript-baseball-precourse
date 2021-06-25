import {makeRandomNumber, verifyInput, ballAndStrike} from './util.js'

export default class BaseballGame {
  constructor() {
    this.btnSubmit = document.getElementById('submit');
    this.input = document.getElementById('user-input');
    this.strike = 0;
    this.ball = 0;
    this.init();
  }
  init() {
    this.bindEvt();
  }
  bindEvt() {    
    this.btnSubmit.addEventListener('click', () => {
      let alertMsg = verifyInput(this.input.value);      
      if (alertMsg !== undefined) {
        alert(alertMsg);
        this.input.focus();
        return;
      }
      const computerInputNumbers = makeRandomNumber();
      const inputValue = [...this.input.value].map(Number);
      this.play(computerInputNumbers,inputValue);
    });
  }
  play(computerInputNumbers, userInputNumbers) {
    let [ball, strike] = ballAndStrike(computerInputNumbers, userInputNumbers);
    console.log(ball, strike)
  }
  checkValidation() {

  }
}


new BaseballGame();
