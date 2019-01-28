import { secondStep } from '../utils/domElements';

import { validateStepTwoFeedbackMessage, validateOptions } from './validation';

import './button-previous';
import './button-next';

secondStep.extraRoles.forEach(extraRole => {

  extraRole.addEventListener('click', () => {

    validateOptions(extraRole);
    
    validateStepTwoFeedbackMessage();
  })

})