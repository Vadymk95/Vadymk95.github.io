const name = "Vadym";
const age = 25;
const role = "Admin";
const occupation = "programmer";

const user = !!name && age > 18;
console.log(user);

const fieldOfActivity = role === "Admin" || occupation === "CEO";
console.log(fieldOfActivity);

const proffesion = occupation ?? role;
console.log(proffesion);

const userInfo = !!name && age > 18 || role === "Admin";
console.log(userInfo);