
let counterValue = 0;
  const counterElement = document.getElementById('counter');

  function updateCounter() {
    counterElement.textContent = counterValue;
    counterElement.className = counterValue > 0 ? 'positive' : (counterValue < 0 ? 'negative' : '');
  }

  function increase() {
    counterValue++;
    updateCounter();
  }

  function decrease() {
    counterValue--;
    updateCounter();
  }

  function reset() {
    counterValue = 0;
    updateCounter();
  }
