import { buttons, extraPlayersCount, stepFrom } from './utilities';

buttons.step3.sort.addEventListener('click', () => {
  stepFrom('step3', 'spinner');

  setTimeout(() => {stepFrom('spinner', 'result')}, 500)
})

buttons.step3.previous.addEventListener('click', () => {
  if(extraPlayersCount() > 0) {
    stepFrom('step3', 'step2');
  } else {
    stepFrom('step3', 'step1');    
  }
})