// Adiciona ouvintes de eventos aos botões quando o DOM é carregado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculate-btn').addEventListener('click', calculateResult);
    document.getElementById('clear-btn').addEventListener('click', clearFields);
});

function calculateResult() {
    // Obtém valores dos campos de entrada
    const side1 = Number(document.getElementById('side1').value);
    const side2 = Number(document.getElementById('side2').value);
    const side3 = Number(document.getElementById('side3').value);

    // Obtém o elemento do resultado
    const result = document.getElementById('result');
    result.innerText = '';

    // Depuração: Verifica os valores obtidos
    console.log('Valores dos lados:', side1, side2, side3);

    // Verifica se todos os valores são números válidos
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        result.innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Cria e ordena o array
    const sides = [side1, side2, side3].sort((a, b) => a - b);

    // Desestrutura os lados em a, b e c
    const [a, b, c] = sides;

    // Depuração: Verifica os valores após ordenação
    console.log('Valores ordenados:', a, b, c);

    // Verifica se eles formam uma terna pitagórica
    if (a > 0 && b > 0 && c > 0 && a ** 2 + b ** 2 === c ** 2) {
        result.innerText = `Os valores ${side1}, ${side2} e ${side3} formam uma terna pitagórica. O triângulo é retângulo, com catetos ${a} e ${b}, e hipotenusa ${c}.`;
    } else {
        result.innerText = `Os valores ${side1}, ${side2} e ${side3} não formam uma terna pitagórica. O triângulo não é retângulo.`;
    }
}

function clearFields() {
    // Limpa os campos de entrada e o resultado
    document.getElementById('side1').value = '';
    document.getElementById('side2').value = '';
    document.getElementById('side3').value = '';
    document.getElementById('result').innerText = '';
}
