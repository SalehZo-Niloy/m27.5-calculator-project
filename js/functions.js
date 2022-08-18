function display(value) {
    document.getElementById('result').value += value;
    document.getElementById('result').scrollLeft += 200;
}


function clearScreen() {
    document.getElementById('result').value = '';
}

function calc() {
    const getResult = document.getElementById('result').value;
    const setResult = eval(getResult);
    document.getElementById('result').value = setResult;
}
document.getElementById('result').scrollRight(0);