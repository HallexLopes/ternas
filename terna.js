document.getElementById('calculate-btn').addEventListener('click', calculateResult);
document.getElementById('clear-btn').addEventListener('click', clearFields);

function calculateResult() {
    // Get values from inputs
    const side1 = Number(document.getElementById('side1').value);
    const side2 = Number(document.getElementById('side2').value);
    const side3 = Number(document.getElementById('side3').value);

    // Clean result
    const result = document.getElementById('result');
    result.innerText = '';

    // Check if all inputs are valid numbers
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        result.innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Create and sort array
    const sides = [side1, side2, side3].sort((a, b) => a - b);

    // Destructure sides into a, b, and c
    const [a, b, c] = sides;

    // Validate if they form a Pythagorean triple
    if (a > 0 && b > 0 && c > 0 && a ** 2 + b ** 2 === c ** 2) {
        result.innerText = `Os valores ${side1}, ${side2} e ${side3} formam uma terna pitagórica. O triângulo é retângulo, com catetos ${a} e ${b}, e hipotenusa ${c}.`;
    } else {
        result.innerText = `Os valores ${side1}, ${side2} e ${side3} não formam uma terna pitagórica. O triângulo não é retângulo.`;
    }
}

function clearFields() {
    document.getElementById('side1').value = '';
    document.getElementById('side2').value = '';
    document.getElementById('side3').value = '';
    document.getElementById('result').innerText = '';
}
