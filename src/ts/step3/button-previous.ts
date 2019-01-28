import { thirdStep, } from '../utils/domElements';
import { extraPlayersCount, stepFrom, changeText } from '../utils/general';

thirdStep.buttons.previous.addEventListener('click', () => {
  if(extraPlayersCount() > 0) {
    changeText('#content-title', 'Passo II');

    stepFrom('thirdStep', 'secondStep');
  } else {
    changeText('#content-title', 'Passo I');

    stepFrom('thirdStep', 'firstStep');    
  }
})