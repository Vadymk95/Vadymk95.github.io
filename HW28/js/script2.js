'use strict'


//promise
let createdObj11;
let id;

const user0087 = {
	firstName: "Vadym",
	lastName: "Kononenko",
}

function sendRequest(
	method,
	url,
	{ body, headers = {} } = {},
) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);

		Object.keys(headers).forEach((key) => {
			xhr.setRequestHeader(key, headers[key]);
		});

		xhr.addEventListener('load', () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		});
		xhr.send(body);
	});
}

sendRequest('POST', 'https://async-demo.herokuapp.com/objects/?prob=20', {
	body: JSON.stringify(user0087),
	headers: {'Content-type': 'application/json; charset=utf-8'},
	}
)
.then(response => {
	createdObj11 = JSON.parse(response);
	console.log("Object created:", createdObj11);
	({id} = createdObj11);
	const extension = { age: 25, hasPet: true };
	return sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
		body: JSON.stringify(extension),
		headers: {'Content-type': 'application/json; charset=utf-8'},
	})
})
.then(response => {
	createdObj11 = JSON.parse(response);
	console.log('Changed:', createdObj11);
	console.log('DELETED!');
	return sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}/?prob=20`)
})
.catch(err => console.error('Error:', err));

//-------------------------------------------------------------------------------------------

//async await

let createdObj11;
let id;
let url0120 = 'https://async-demo.herokuapp.com/objects';
const user1001 = {
	firstName: "Vadym",
	lastName: "Kononenko",
}

async function fetchAsyncTodos() {
	try {
		const response = await fetch(url0120 + '/?prob=20', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(user1001),
		});
		if (!response.ok) {
			throw new Error("Error!");
		}

		createdObj11 = await response.json();
		console.log("Object created:", createdObj11);

		({id} = createdObj11);
		const extension = { age: 25, hasPet: true };

		const responseChanged = await fetch(url0120 + `/${id}/?prob=20`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(extension),
		});
		if (!responseChanged.ok) {
			throw new Error("Error!");
		}
		createdObj11 = await responseChanged.json();
		console.log("Changed created:", createdObj11);

		const responseDeleted = await fetch(url0120 + `/${id}/?prob=20`, {
			method: 'DELETED'
		});
		if (!responseDeleted.ok) {
			throw new Error("Error!");
		}
		console.log('DELETED!');

	} catch (err) {
		console.error("Error:", err);
	}
}

fetchAsyncTodos();