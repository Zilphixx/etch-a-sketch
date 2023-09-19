const container = document.querySelector('.container');

function addingDivs() {
  const boxSize = +prompt('Enter box sizes (16, 32, 64)');
  const TOTAL_BOX_SIZE = 512 * 512;
  let totalDimensions = boxSize * boxSize;
  const total = TOTAL_BOX_SIZE / totalDimensions;
  for (let i = 1; i <= total; i++) {
    const divs = document.createElement('div');
    divs.classList.add('grids');
    divs.style.width = `${boxSize}px`;
    divs.style.height = `${boxSize}px`;
    container.appendChild(divs);
  }
}

const bttn = document.querySelector('#size');

bttn.addEventListener('click', () => {
  if (container.hasChildNodes()) {
    while (container.lastElementChild) {
      container.removeChild(container.lastChild);
    }
  }
  addingDivs();
});
