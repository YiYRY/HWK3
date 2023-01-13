function init() {
    addListeners();
    document.getElementById('elements');

    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('custom');
    submitCustom.addEventListener("click", onClickCustom);
}


function onClick() {
    onClickClear();
    for (let i = 1; i < 101; i++) {
        const element = document.createElement('div');
        element.className = "element" + i;
        elements.appendChild(element);
        if (i % 3 === 0 && i % 5 === 0) {
            element.setAttribute("id", "element" + i);
            element.setAttribute("class", "FizzBuzz");
            element.innerText = "FizzBuzz " + i;
        }
        else if (i % 3 === 0 && i % 5 !== 0) {
            element.setAttribute("id", "element" + i);
            element.setAttribute("class", "Fizz");
            element.innerText = "Fizz " + i;

        }

        else if (i % 5 === 0 && i % 3 !== 0) {
            element.setAttribute("id", "element" + i);
            element.setAttribute("class", "Buzz");
            element.innerText = "Buzz " + i;

        }

        else if (i % 3 !== 0 && i % 5 !== 0) {
            element.setAttribute("id", "element" + i);
            element.setAttribute("class", "Empty");
            element.innerText = i;

        }
    }
}

function onClickClear() {
    while (elements.firstChild) {
        console.log("while");
        elements.removeChild(elements.firstChild);
    }

}

function onClickCustom() {
    onClickClear();
    var startValue = Number(document.getElementById('startValue').value);
    var endValue = Number(document.getElementById('endValue').value);
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    var fizzColor = document.getElementById('fizzColor').value;
    var buzzColor = document.getElementById('buzzColor').value;
    var fizzBuzzColor = document.getElementById('fizzBuzzColor').value;
    var noneColor = document.getElementById('noneColor').value;

    console.log("Start");
    for (startValue; startValue <= endValue; startValue++) {
        const element = document.createElement('div');
        element.id = "element" + startValue;
        console.log("loop");
        elements.appendChild(element);
        if (startValue % fizzValue === 0 && startValue % buzzValue === 0) {
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "FizzBuzz");
            element.innerText = "FizzBuzz " + startValue;
            element.style.backgroundColor = fizzBuzzColor;
        }
        else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0) {
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "Fizz");
            element.innerText = "Fizz " + startValue;
            element.style.backgroundColor = fizzColor;
        }

        else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0) {
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "Buzz");
            element.innerText = "Buzz " + startValue;
            element.style.backgroundColor = buzzColor;
        }

        else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0) {
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "Empty");
            element.innerText = startValue;
            element.style.backgroundColor = noneColor;

        }
    }
}

function addListeners() {
    const submit = document.getElementById('default');
    submit.onclick = onClick;
}



init();




document.addEventListener('DOMContentLoaded', () => {
    findClassAndHide('fizz', 'Fizz');
    findClassAndHide('buzz', 'Buzz');
    findClassAndHide('fizzbuzz', 'FizzBuzz');
    findClassAndHide('empty', 'Empty');
});

function findClassAndHide(elementId, className) {
    document.getElementById(elementId).addEventListener('click', function () {
        const elements = document.getElementById('elements');
        for (let i = 0; i < elements.children.length; i++) {
            if (!elements.children[i].classList.contains(className)) {
                elements.children[i].style.display = 'none';
            } else {
                elements.children[i].style.display = 'block';
            }
        }
    });
}

