"use strict";

const getOutput = document.querySelector("#getOutput");

const getUsers = () => {
    axios
    .get("https://reqres.in/api/users")
    .then(response => {
        const users = response.data.data;
        getOutput.innerHTML = "";
        for (let user of users) {
            const userCol = document.createElement("div");
            userCol.classList.add("col");

            const userCard = document.createElement("div");
            userCard.classList.add("card");

            const userBody = document.createElement("div");
            userBody.classList.add("card-body");

            const userId = document.createElement("h5");
            userId.classList.add("card-title");
            userId.innerText = `ID: ${user.id}`;
            userBody.appendChild(userId);

            const userEmail = document.createElement("p");
            userEmail.classList.add("card-text");
            userEmail.innerText = `Email: ${user.email}`;
            userBody.appendChild(userEmail);

            const firstName = document.createElement("p");
            firstName.classList.add("card-text");
            firstName.innerText = `First name: ${user.first_name}`;
            userBody.appendChild(firstName);

            const lastName = document.createElement("p");
            lastName.classList.add("card-text");
            lastName.innerText = `Last name: ${user.last_name}`;
            userBody.appendChild(lastName);

            const avatar = document.createElement("img");
            avatar.classList.add("card-text");
            avatar.src = user.avatar;
            userBody.appendChild(avatar);

            userCard.appendChild(userBody);
            userCol.appendChild(userCard);

            getOutput.appendChild(userCol);
        }
    })
    .catch(err => console.error(err));
}

getUsers();


document.querySelector("#userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const data = {
        name: form.userName.value,
        job: form.job.value,
    };

    axios
        .post("https://reqres.in/api/users", data)
        .then((response) => {
                getUsers();
                form.reset();
                form.userName.focus();
                console.log(response);
        })
        .catch(err => console.error(err));
    });

