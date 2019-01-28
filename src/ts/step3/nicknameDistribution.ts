import { outputScreen } from '../utils/domElements';

function distributeNicknames(nicknamesArray: string[]) {
  outputScreen.nicknameOutputFields
              .forEach((field, index) => {
                field.innerHTML = `${nicknamesArray[index]}<span class='sr-only'> /</span>`;
              })
}

export {
  distributeNicknames
}