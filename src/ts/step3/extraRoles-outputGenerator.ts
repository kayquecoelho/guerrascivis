import { secondStep } from '../utils/domElements';

function generateMarkup(array: string[]) {
  let markup: string = '';

  array.forEach(chosenRole => {
    markup += `<tr>
                  <th scope='row' class='w-50'>${chosenRole}<span class='sr-only'>:</span></th>
                  <td><!-- Nicknames will be dinamically placed here --></td>
                </tr>`
  });

  return markup
}

function generateExtraRolesOuputFields() {
  let mafiaMarkup: string = generateMarkup(secondStep.chosenRoles.mafia);
  let civilMarkup: string = generateMarkup(secondStep.chosenRoles.civil);

  document.querySelector(`#mafiaRolesContainer`).innerHTML += mafiaMarkup;
  document.querySelector(`#civilRolesContainer`).innerHTML += civilMarkup;
}

export {
  generateExtraRolesOuputFields
}