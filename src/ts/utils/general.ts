import { animate } from './animation';

// How many players will play
function playersCount(): number {
  let checkedOption = Array.from(document.querySelectorAll('input[name="quantity"]') as NodeListOf<HTMLInputElement>)
                              .find(element => element.checked);

  return Number(checkedOption.value);
}

// How many players will play beyond the default 12
function extraPlayersCount(): number {
  return playersCount() - 12;
}

// Toggle screens
function stepFrom(currentId: string, otherId: string): void {
  const currentElement: HTMLElement = document.getElementById(currentId);
  const otherElement: HTMLElement = document.getElementById(otherId);

  currentElement.classList.toggle('show');

  setTimeout(() => {
    currentElement.classList.toggle('d-none');

    otherElement.classList.toggle('d-none');
    otherElement.classList.toggle('show');
  }, 200)
}

function focusOn(id: string): void {
  location.href = `${id}`;
}

function changeText(elementId: string, msg: string) {
  const element: HTMLElement = document.querySelector(elementId);

  animate(element, 'anim-pulse');

  element.innerHTML = msg;
  focusOn(elementId);
}

export {
  playersCount,
  extraPlayersCount,
  stepFrom,
  focusOn,
  changeText
}