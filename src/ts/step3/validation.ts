import { thirdStep } from '../utils/domElements';
import { playersCount } from '../utils/general';

function validateStepThreeFeedbackMessage(): void {
  switch(fieldsLeft()) {
    case 0:
      thirdStep.feedbackMessage.classList.add('d-none');
      thirdStep.feedbackMessage.classList.remove('text-danger');
      break;
    case 1:
      thirdStep.feedbackMessage.classList.remove('d-none');
      thirdStep.feedbackMessage.querySelector('span').innerText = `mais 1 campo`;
      break;
    case playersCount():
      thirdStep.feedbackMessage.classList.remove('d-none');
      thirdStep.feedbackMessage.querySelector('span').innerText = `os ${fieldsLeft()} campos`;
      break;
    default:
      thirdStep.feedbackMessage.classList.remove('d-none');
      thirdStep.feedbackMessage.querySelector('span').innerText = `mais ${fieldsLeft()} campos`;
  }
}

function validateNicknameInputFields() {
  thirdStep.nicknameInputs.forEach(input => {

    if(input.value == '') {
      input.classList.add('is-invalid');
    } 
    else {
      input.classList.remove('is-invalid');
    }

    // Style field after user tries to fix it
    input.addEventListener('input', () => {      
      if(input.value == '') {
        input.classList.add('is-invalid');
      } 
      else {          
        input.classList.remove('is-invalid');
      }
    })

  })
}

function fieldsLeft(): number {
  return thirdStep.nicknameInputs
                  .filter(input => input.value == '')
                  .length;
}

export {
  validateStepThreeFeedbackMessage,
  validateNicknameInputFields,
  fieldsLeft
}