import { playersCount } from '../utils/general';
import { thirdStep } from '../utils/domElements';

function createInputs() {
  let inputMarkup: string;

  for(let i = 0, max = playersCount(); i < max; i++){
    if(i == 0) {
      inputMarkup = `<div class='col-sm-6 mb-1'>
                        <input class='form-control form-control-sm'
                              name='nicknameInput'
                              type='text'
                              placeholder='Digite aqui...'>
                    </div>`;
    }
    else {
      inputMarkup += `<div class='col-sm-6 mb-1'>
                        <input class='form-control form-control-sm'
                                name='nicknameInput'
                                type='text'>
                      </div>`;
    }
  }

  thirdStep.nicknamesInputContainer.innerHTML = inputMarkup;
}

export {
  createInputs
}