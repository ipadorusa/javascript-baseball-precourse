const MAXNUMBER = 9;

function makeRandomNumber() {
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let digit = Math.floor(Math.random() * MAXNUMBER + 1);

    if (!randomNumber.includes(digit)) {
      randomNumber.push(digit);
    }
  }
  return randomNumber;
}

function verifyInput(input) {
  let inputArr = input.split('');
  return isThreeChk(inputArr) || isValidateDigit(inputArr) || isUnique(inputArr);
}



function isThreeChk(val) {
  if(val.length !== 3) {
    return alert('3자리 숫자 입력해주세요');
  }
}

function isValidateDigit(val) {
  for (let i=0;i<val.length;i++) {
    if(val[i] === '0') alert('1부터 9사이의 숫자를 입력해주세요');
    else if(!(val[i] >= '1' && val[i] <= '9')) alert('숫자로 입력해주세요');
  }
}

function isUnique(val) {
  const set = new Set(val);
  if (val.length !== set.size) {
    return alert('중복되지 않는 숫자로 입력해주세요.');
  }
}

function ballAndStrike(computerInputNumbers, userInputNumbers) {
  let ball = 0,
    strike = 0;
  for(let i = 0;i<=computerInputNumbers.length - 1;i++) {
    if(computerInputNumbers[i] === userInputNumbers[i]) strike ++;
    else if (computerInputNumbers.includes(userInputNumbers[i]) === true) {
      ball ++;
    }
  }
  return [ball, strike];
}

export {makeRandomNumber, verifyInput, ballAndStrike};