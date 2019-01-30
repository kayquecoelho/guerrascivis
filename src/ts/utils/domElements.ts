const firstStep = {
  buttons: {
    next: document.querySelector(`#firstStepNextButton`) as HTMLButtonElement
  }
}

const secondStep = {
  buttons: {
    previous: document.querySelector(`#secondStepPreviousButton`) as HTMLButtonElement,
    next: document.querySelector(`#secondStepNextButton`) as HTMLButtonElement
  },

  chosenRoles: {
    get mafia() {
      return secondStep.mafiaExtraRoles
                        .filter(role => role.checked)
                        .map(role => role.value);
    },
  
    get civil() {
      return secondStep.civilExtraRoles
                        .filter(role => role.checked)
                        .map(role => role.value);
    },

    get all() {
      return secondStep.extraRoles.filter(extraRole => extraRole.checked);
    }
  },

  mafiaExtraRoles: Array.from(document.querySelectorAll(`#mafiaExtraRoles input[name='extraRole']`) as NodeListOf<HTMLInputElement>),

  civilExtraRoles: Array.from(document.querySelectorAll(`#civilExtraRoles input[name='extraRole']`) as NodeListOf<HTMLInputElement>),

  feedbackMessage: document.querySelector(`#secondStepFeedbackMsg`) as HTMLHeadingElement,

  get extraRoles() {
    return Array.from(document.querySelectorAll(`input[name='extraRole']`) as NodeListOf<HTMLInputElement>);
  }
}

const thirdStep = {
  buttons: {
    previous: document.querySelector(`#thirdStepPreviousButton`) as HTMLButtonElement,
    shuffle: document.querySelector(`#shuffleNicknamesButton`) as HTMLButtonElement,
    save: document.querySelector(`#thirdStepSaveButton`) as HTMLButtonElement
  },

  feedbackMessage: document.querySelector(`#thirdStepFeedbackMsg`) as HTMLHeadingElement,

  nicknamesInputContainer: document.querySelector(`#nicknamesInputContainer`) as HTMLButtonElement,

  get nicknameInputs() {
    return Array.from(thirdStep.nicknamesInputContainer.querySelectorAll(`input[name='nicknameInput']`) as NodeListOf<HTMLInputElement>);
  },

  get nicknameValues(): string[] {
    return thirdStep.nicknameInputs.map(field => field.value);
  }
}

const outputScreen = {
  buttons: {
    fix: document.querySelector(`#fixNicknamesButton`) as HTMLButtonElement,
    reshuffle: document.querySelector(`#ReshuffleNicknamesButton`) as HTMLButtonElement,
    newGame: document.querySelector(`#newGameButton`) as HTMLButtonElement
  },

  get nicknameOutputContainers() {
    return Array.from(document.querySelectorAll(`#outputScreen tr`) as NodeListOf<HTMLTableRowElement>);
  },

  get nicknameOutputFields() {
    return Array.from(document.querySelectorAll(`#outputScreen td`) as NodeListOf<HTMLTableDataCellElement>);
  },

  get shuffledNicknameValues() {
    return outputScreen.nicknameOutputFields
                        .map(outputField => {
                          // Rreturns only shuffled player nicknames. (don't touch the whitespaces)
                          const nickname = outputField.innerText.replace(` / `, '');
  
                          return nickname
                        })
  }
}

const contentTitle: HTMLElement = document.querySelector('#content-title');

export {
  firstStep,
  secondStep,
  thirdStep,
  outputScreen,
  contentTitle,
}