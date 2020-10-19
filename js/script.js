
let enterLogin = prompt("Login:");

while (enterLogin != "cat") {
     alert("Wrong login!");
     enterLogin = prompt("Please enter login again:");
}

let enterPassword = prompt("Password:");

while (enterPassword != "dog") {
     alert("Wrong password!");
     enterPassword = prompt("Please enter password again:");
}

alert("Добро пожаловать!")