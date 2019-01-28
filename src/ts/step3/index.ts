import { thirdStep } from '../utils/domElements';

import { validateStepThreeFeedbackMessage } from './validation';

import './button-previous';
import './button-shuffle';
import './button-save';

function activateInputListeners() {
  thirdStep.nicknameInputs.forEach(input => {
    input.addEventListener('input', () => {
      validateStepThreeFeedbackMessage();
    })
  })
}

export {
  activateInputListeners
}

