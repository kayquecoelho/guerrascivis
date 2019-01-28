import { secondStep } from '../utils/domElements';
import { extraPlayersCount } from '../utils/general';

function validateStepTwoFeedbackMessage(): void {
  switch(optionsLeft()) {
    case 0:
      secondStep.feedbackMessage.classList.add('d-none');
      secondStep.feedbackMessage.classList.remove('text-danger');
      break;
    case 1:
      secondStep.feedbackMessage.classList.remove('d-none');
      secondStep.feedbackMessage.querySelector('span').innerText = `mais ${optionsLeft()} personagem`;
      break;
    case extraPlayersCount():
      secondStep.feedbackMessage.classList.remove('d-none');
      secondStep.feedbackMessage.querySelector('span').innerText = `${optionsLeft()} personagens`;
      break;
    default:
      secondStep.feedbackMessage.classList.remove('d-none');
      secondStep.feedbackMessage.querySelector('span').innerText = `mais ${optionsLeft()} personagens`;
  }
}

function validateOptions(option: HTMLElement): void {
  // Set background-color for checked options.
  if(!option.parentElement.classList.contains('disabled')){
    option.parentElement.classList.toggle('active');
  }

  // Disable other checkboxes, when user reach choice limit.
  switch(optionsLeft()) {
    case 0:
      secondStep.extraRoles.forEach(extraRole => {
        if(!extraRole.checked) {
          extraRole.disabled = true;

          extraRole.parentElement.classList.toggle('disabled');
        }
      })

      break;
    default:
      secondStep.extraRoles.forEach(extraRole => {
        if(extraRole.disabled) {
          extraRole.disabled = false;

          extraRole.parentElement.classList.toggle('disabled');
        }
      })
  }
}

// Calculates how many options the user has left
function optionsLeft(): number {
  return extraPlayersCount() - secondStep.chosenRoles.all.length;
}

export {
  validateStepTwoFeedbackMessage,
  validateOptions,
  optionsLeft
}