import { secondStep } from '../utils/domElements';
import { animate } from '../utils/animation';
import { stepFrom, focusOn, changeText } from '../utils/general';

import { optionsLeft } from './validation';

secondStep.buttons.next.addEventListener('click', () => {
  focusOn('#content-title');

  if(optionsLeft()) {
    animate(secondStep.feedbackMessage, 'anim-shake');

    secondStep.feedbackMessage.classList.add('text-danger');
  } else {
    changeText('#content-title', 'Passo III');    

    stepFrom('secondStep', 'thirdStep');
  }
})