const buttons = {
  step1: {
    next: document.querySelector('#step1Next') as HTMLButtonElement
  },

  step2: {
    previous: document.querySelector('#step2Previous') as HTMLButtonElement,
    next: document.querySelector('#step2Next') as HTMLButtonElement
  },

  step3: {
    previous: document.querySelector('#step3Previous') as HTMLButtonElement,
    sort: document.querySelector('#step3Next')
  },

  result: {
    fix: document.querySelector('#fixButton') as HTMLButtonElement,
    sort: document.querySelector('#sortButton') as HTMLButtonElement,
    new: document.querySelector('#newGameButton') as HTMLButtonElement
  }
}

function getPlayersCount() {
  const checkedOption = Array.from(document.querySelectorAll('input[name="quantity"]') as NodeListOf<HTMLInputElement>)
                              .find(element => element.checked);

  return Number(checkedOption.value)
}

function extraPlayersCount() {
  return getPlayersCount() - 12;
}

function stepFrom(current: string, next: string): void {
  document.getElementById(current).classList.toggle('d-none');
  document.getElementById(next).classList.toggle('d-none');
}

export {
  buttons,
  extraPlayersCount,
  stepFrom
}