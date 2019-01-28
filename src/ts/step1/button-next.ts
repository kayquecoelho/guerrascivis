import { firstStep } from '../utils/domElements';
import { extraPlayersCount, stepFrom, changeText } from '../utils/general';

import { validateStepTwoFeedbackMessage } from '../step2/validation';
import { createInputs } from '../step2/nickname-InputGenerator';
import { resetCheckedRoles } from '../step2/reset';

import { validateStepThreeFeedbackMessage } from '../step3/validation';
import { activateInputListeners } from '../step3/index';

firstStep.buttons.next.addEventListener('click', () => {
  changeText('#content-title', 'Passo II');

  // Prepares the third step, for when the user chooses to go with 12 players.
  createInputs();
  activateInputListeners();
  validateStepThreeFeedbackMessage();

  // Prepares the second step, when the user chooses to go with more than 12 players.
  resetCheckedRoles();
  validateStepTwoFeedbackMessage();

  // Avoids second step, for when the user chooses to go with 12 players.
  if(extraPlayersCount() > 0) {
    stepFrom('firstStep', 'secondStep');
  } else {
    stepFrom('firstStep', 'thirdStep');
  }
})