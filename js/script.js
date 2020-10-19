
const enterLogin = prompt("Login:");

while (enterLogin != "cat") {
     alert("Wrong login!");
break;
}
let enterPassword = prompt("Password:");

while (enterPassword != "dog") {
     enterPassword = prompt("Please enter password again:");
break;
}
while (enterPassword === "dog") {
    alert("Добро пожаловать!");
break;
}