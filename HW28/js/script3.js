'use strict'

const requestURL = 'https://async-demo.herokuapp.com';

function User(name,lastName) {
	this.name = name;
	this.lastName = lastName;
}

const user01 = new User('Vadym', 'Kononenko');
const user02 = new User('Vasya', 'Ivanov');
const user03 = new User('Petya', 'Petrov');
let arr = [user01,user02,user03];
//--------------------------------------------------------------------

//promise
function sendRequest(method, url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		};
		xhr.send();
	});
}

sendRequest('GET', requestURL + '/stable?maxRandom=100&prob=5')
.then(data => {
	user01.age = data;
	return sendRequest('GET', requestURL + '/stable?maxRandom=100&prob=5');
})
.then(data => {
	user02.age = data;
	return sendRequest('GET', requestURL + '/stable?maxRandom=100&prob=5');
})
.then(data => {
	user03.age = data;
	return sendRequest('GET', requestURL + '/stable?maxRandom=2&prob=5');
})
.then(data => {
	let num = +data + 1;
	const newObj = arr[num - 1];
	arr = [newObj];
})
.catch(err => console.error(err));


//----------------------------------------------------------------------------

//async await
async function getRandomUser() {
	try {
		let response = async function (value, maxNum) {
					value = await fetch(requestURL + `/stable?maxRandom=${maxNum}&prob=5`);
				if (!value.ok) {
					throw new Error("Error!");
				}
				return value.json();
			}
			await Promise.all([response(response, 100), response(response, 100), response(response, 100)])
			.then(ages => {
				ages.forEach(age => {
					for (let i = 0; i < arr.length; i++) {
						arr[i].age = age;
					}
				});
			})
			.catch (err => console.error(err));
		const num = (await response(response, 2)) + 1;
		const newObj = arr[num - 1];
		arr = [newObj];
		console.log(arr);
	} catch (err) {
		console.log("Error:", err);
	}
}
getRandomUser();