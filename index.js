const resultElement = document.getElementById('result');
    let WISLEY = '';  

    function appendToResult(value) {
        WISLEY += value;
      resultElement.innerText = WISLEY;
    }

    function calculate() {
      try {
        WISLEY = eval(WISLEY);
        resultElement.innerText = WISLEY;
      } catch (error) {
        resultElement.innerText = 'Error';
      }
    }

    function clearResult() {
        WISLEY = '';
      resultElement.innerText = '0';
    }