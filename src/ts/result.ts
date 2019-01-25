import { buttons, stepFrom } from './utilities';

buttons.result.fix.addEventListener('click', () => {
  stepFrom('result', 'step3');
})