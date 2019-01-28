import { selectText } from '../utils/textSelection';
import { outputScreen } from '../utils/domElements';

function activateOutputSelection() {
  outputScreen.nicknameOutputContainers.forEach(container => {

    container.addEventListener('click', function(this) {
      selectText(this);
    })

  })
}

export {
  activateOutputSelection
}