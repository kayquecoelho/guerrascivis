import { buttons, stepFrom } from './utilities';

buttons.step2.next.addEventListener('click', () => {
  stepFrom('step2', 'step3');
})

buttons.step2.previous.addEventListener('click', () => {
  stepFrom('step2', 'step1');
})