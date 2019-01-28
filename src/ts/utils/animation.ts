function animate(element: HTMLElement, className: string, iteration: number = 1): void {
    element.style.animationIterationCount = `${iteration}`;
    element.classList.add(className);

    element.addEventListener('animationend', function(this: HTMLElement) {
      this.classList.remove(className);

      this.removeEventListener('animationend', () => {});
    });
}

export {
  animate
}