const myLogin = "Vadym";
const myPassword = "Kononenko";

const enterLogin = prompt("Please enter your login:");
const isCorrectLogin = myLogin === enterLogin;

let isCorrectPassword = false;
let repeatPassword = true;


while (repeatPassword) {
     const enterPassword = prompt("Please enter your password");
     isCorrectPassword = enterPassword === myPassword;
     if (!isCorrectLogin || isCorrectPassword) break;
     repeatPassword = confirm("Incorrect password. Try again");
}

let noticeMessage;

if (!isCorrectLogin) {
     noticeMessage = 'Incorrect login';
} else if (!isCorrectPassword) {
     noticeMessage = 'Incorrect password. Bye';
} else {
     noticeMessage = `Hello, ${myLogin}`;
}

alert(noticeMessage);