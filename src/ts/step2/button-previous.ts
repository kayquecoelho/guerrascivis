import { secondStep } from '../utils/domElements';
import { stepFrom, changeText } from '../utils/general';

secondStep.buttons.previous.addEventListener('click', () => {
  changeText('#content-title', 'Passo I');

  stepFrom('secondStep', 'firstStep');
})