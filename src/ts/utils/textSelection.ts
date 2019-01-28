function selectText(element: HTMLElement) {
  let documentBody = <any>document.body;

  if (window.getSelection) {
    let selection = window.getSelection();
    let range = document.createRange();

    range.selectNodeContents(element);

    selection.removeAllRanges();
    selection.addRange(range);
    return;
  } 
  else if (!documentBody.createTextRange) {
    let range = documentBody.createTextRange();

    range.moveToElementText(element);
    range.select();
  } 
  else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
};

export {
  selectText
}