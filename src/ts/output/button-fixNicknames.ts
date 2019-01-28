import { outputScreen, thirdStep } from '../utils/domElements';
import { stepFrom, changeText } from '../utils/general';

outputScreen.buttons.fix.addEventListener('click', () => {

  // Reorder input[name='nicknameInput'] values to match shuffled output order.
  thirdStep.nicknameInputs.forEach((input, index) => {
    input.value = outputScreen.shuffledNicknameValues[index];
  })    
  
  changeText('#content-title', 'Correção');

  stepFrom('outputScreen', 'thirdStep');
});