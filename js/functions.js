function display(value) {
    document.getElementById('result').value += value;
}


function clearScreen() {
    document.getElementById('result').value = '';
}

function calc() {
    const getResult = document.getElementById('result').value;
    const setResult = eval(getResult);
    document.getElementById('result').value = setResult;
}