import { thirdStep } from '../utils/domElements';
import { stepFrom, focusOn, changeText } from '../utils/general';
import { shuffleArray } from '../utils/shuffle';
import { animate } from '../utils/animation';

import { fieldsLeft } from './validation';
import { validateNicknameInputFields } from './validation';
import { distributeNicknames } from './nicknameDistribution';
import { generateExtraRolesOuputFields } from './extraRoles-outputGenerator';

import { activateOutputSelection } from '../output/outputSelection';


thirdStep.buttons.shuffle.addEventListener('click', () => {
  focusOn('#content-title');

  if(fieldsLeft()) {
    validateNicknameInputFields();
    
    animate(thirdStep.feedbackMessage, 'anim-shake');
    
    thirdStep.feedbackMessage.classList.add('text-danger');
  }
  else {
    const nicknameValues = thirdStep.nicknameValues;
    const shuffledNicknameValues = shuffleArray(nicknameValues);

    stepFrom('thirdStep', 'spinner');

    changeText('#content-title', 'Resultados');

    // There's no coming back! 
    // Avoid users getting back to players count and roles, after trying to fix shuffled nicknames.
    // They don't need this functionality and it generates many bugs.
    thirdStep.buttons.shuffle.classList.add('d-none');
    thirdStep.buttons.previous.classList.add('d-none');
    thirdStep.buttons.save.classList.remove('d-none');
    
    generateExtraRolesOuputFields()
    distributeNicknames(shuffledNicknameValues);
    activateOutputSelection();
    
    setTimeout(() => {      
      stepFrom('spinner', 'outputScreen');
    }, 500)
  }
})