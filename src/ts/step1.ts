import { buttons, extraPlayersCount, stepFrom } from './utilities';

buttons.step1.next.addEventListener('click', () => {

  if(extraPlayersCount() > 0) {
    stepFrom('step1', 'step2');
  } else {
    stepFrom('step1', 'step3');
  }
})