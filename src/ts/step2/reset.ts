import { secondStep } from '../utils/domElements';

function resetCheckedRoles() {
  secondStep.extraRoles.forEach(extraRole => {
    extraRole.disabled = false;
    extraRole.parentElement.classList.remove('disabled');

    extraRole.checked = false;
    extraRole.parentElement.classList.remove('active');
  })
}

export {
  resetCheckedRoles
}