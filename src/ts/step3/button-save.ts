import { thirdStep } from '../utils/domElements';
import { stepFrom, changeText } from '../utils/general';
import { animate } from '../utils/animation';

import { fieldsLeft } from './validation';
import { validateNicknameInputFields } from './validation';
import { distributeNicknames } from './nicknameDistribution';

thirdStep.buttons.save.addEventListener('click', () => {
  let nicknameValues = thirdStep.nicknameValues;

  if(fieldsLeft()) {
    validateNicknameInputFields();

    animate(thirdStep.feedbackMessage, 'anim-shake');

    thirdStep.feedbackMessage.classList.add('text-danger');
  }
  else {
    distributeNicknames(nicknameValues);
    
    changeText('#content-title', 'Resultados');

    stepFrom('thirdStep', 'outputScreen');
  }
})