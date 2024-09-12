const input1 = document.getElementById("side1");
const input2 = document.getElementById("side2");
const input3 = document.getElementById("side3");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const cleanBtn = document.getElementById("clean_btn");

btn.addEventListener("click", calculateResult);
cleanBtn.addEventListener("click", cleanAllFields);

function calculateResult() {
    // Cleaning result paragraph
    result.innerText = "";

    // Getting values from inputs
    const a = Number(input1.value);
    const b = Number(input2.value);
    const c = Number(input3.value);

    // Validate inputs
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        alert("Por favor, introduzca solo valores enteros.");
        return;
    }
    if (a <= 0 || b <= 0 || c <= 0) {
        alert("Por favor, introduzca solo valores mayores a cero (0).");
        return;
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        alert("Los datos introducidos no corresponden a los lados de un triángulo, ya que no cumplen con el Teorema de Desigualdad Triangular.");
        return;
    }

    // Create and sort the array
    const sides = [a, b, c].sort((x, y) => x - y);

    // Calculate squared values
    const [side1, side2, hypotenuse] = sides;
    const side1Sq = side1 * side1;
    const side2Sq = side2 * side2;
    const hypotenuseSq = hypotenuse * hypotenuse;

    // Determine if it forms a Pythagorean triple
    if (side1Sq + side2Sq === hypotenuseSq) {
        result.innerText = `Los valores ${a}, ${b} y ${c} forman una terna pitagórica. El triángulo es rectángulo, sus catetos miden ${side1} y ${side2} y su hipotenusa mide ${hypotenuse}.`;
    } else {
        result.innerText = `Los valores ${a}, ${b} y ${c} no forman una terna pitagórica. El triángulo no es rectángulo.`;
    }
}

function cleanAllFields() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    result.innerText = "";
}
