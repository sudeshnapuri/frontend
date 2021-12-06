"use strict";

const output = document.querySelector("section#superheroes");

axios
.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
.then(response => {
    const superhero = response.data;
    console.log("RES:", response.data);

    const subheadingOne = document.createElement("h3");
    subheadingOne.innerText = "Information";
    output.appendChild(subheadingOne);

    const homeTown = document.createElement("h4");
    homeTown.innerText = `Home town : ${superhero.homeTown}`;
    output.appendChild(homeTown);

    const secretBase = document.createElement("h4");
    secretBase.innerText = `Secret Base : ${superhero.secretBase}`;
    output.appendChild(secretBase);

    const squadName = document.createElement("h4");
    squadName.innerText = `Squad Name : ${superhero.squadName}`;
    output.appendChild(squadName);

    const subheadingTwo = document.createElement("h3");
    subheadingTwo.innerText = "Members";
    output.appendChild(subheadingTwo);

    const members = superhero.members;
    for(let i = 0; i<members.length; i++) {
        const member = document.createElement("h4");
        member.innerTest = `Members : ${members[i].name}`;
        output.appendChild(member);
    }

})
.catch(err => console.error(err));