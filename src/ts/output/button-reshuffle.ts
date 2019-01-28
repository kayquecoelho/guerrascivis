import { outputScreen, thirdStep } from '../utils/domElements';
import { shuffleArray } from '../utils/shuffle';
import { focusOn } from '../utils/general';

import { distributeNicknames } from '../step3/nicknameDistribution';

outputScreen.buttons.reshuffle.addEventListener('click', () => {
  let nicknameValues = thirdStep.nicknameValues;

  focusOn('#content-title');

  distributeNicknames(shuffleArray(nicknameValues));
});