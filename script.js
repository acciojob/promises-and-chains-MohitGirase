//your JS code here. If required.

const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const btnInput = document.getElementById("btn");

function submitForm(event) {
    event.preventDefault();
    
    const age = Number(ageInput.value.trim());
    const name = nameInput.value.trim();

    if (!validate(age, name)) {
        return;
    }

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    promise
        .then(data => alert(data))
        .catch(error => alert(error));
}

function validate(age, name) {
    if (isNaN(age) || name === "") {
        alert("Please enter valid details.");
        return false;
    }
    return true;
}
