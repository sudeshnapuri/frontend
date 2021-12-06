"use strict";

const counter = document.querySelector("input#counter");

// to create history section to see numbers created
// const output = document.querySelector("section#history");

document.querySelector("button#subFive").addEventListener("click", () => updateCounter(-5));

// const subFive = () => {
//     const current = counter.value;
//     const newValue = Number.parseInt(current) - 5;
//     console.log("NEW", newValue); //to check what number is being printed, optional

//     counter.value = newValue;

    // const newHistory = document.createElement("p");
    // newHistory.innerText = `${current} -5 = ${newValue}`;
    // output.appendChild(newHistory);
// }

const subOne = () => {
    const current = counter.value;
    const newValue = Number.parseInt(current) - 1;
 
    counter.value = newValue;
}

const reset = () => {
    counter.value = 0;
}

const addOne = () => {
    const current = counter.value;
    const newValue = Number.parseInt(current) + 1;

    counter.value = newValue;
}

const addFive = () => {
    const current = counter.value;
    const newValue = Number.parseInt(current) + 5;

    counter.value = newValue;
}
