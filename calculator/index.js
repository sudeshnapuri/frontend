"use strict";

const numOne = document.querySelector("input#numOne");
const numTwo = document.querySelector("input#numTwo");
const result = document.querySelector("input#result");
const output = document.querySelector("section#history");

const add = () => {
    const numberOne = numOne.value;
    const numberTwo = numTwo.value;
    const newValue = Number.parseInt(numberOne) + Number.parseInt(numberTwo);

    result.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = `${numberOne} + ${numberTwo} = ${newValue}`;
    output.appendChild(newHistory);
}

const subtract = () => {
    const numberOne = numOne.value;
    const numberTwo = numTwo.value;
    const newValue = Number.parseInt(numberOne) - Number.parseInt(numberTwo);

    result.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = `${numberOne} - ${numberTwo} = ${newValue}`;
    output.appendChild(newHistory);
}

const multiply = () => {
    const numberOne = numOne.value;
    const numberTwo = numTwo.value;
    const newValue = Number.parseInt(numberOne) * Number.parseInt(numberTwo);

    result.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = `${numberOne} x ${numberTwo} = ${newValue}`;
    output.appendChild(newHistory);
}

const divide = () => {
    const numberOne = numOne.value;
    const numberTwo = numTwo.value;
    const newValue = Number.parseInt(numberOne) / Number.parseInt(numberTwo);

    result.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = `${numberOne} / ${numberTwo} = ${newValue}`;
    output.appendChild(newHistory);
}

const reset = () => {
    result.value = 0;
    numOne.value = 0;
    numTwo.value = 0;
}
