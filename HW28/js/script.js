'use strict'

//получить рандомное число с шансом 50%
//promise
const requestURL = 'https://async-demo.herokuapp.com';

function sendRequest(method, url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url + '/unstable?maxRandom=20&prob=50');
		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		};
		xhr.onerror = () => {
			reject(xhr.response);
		};
		xhr.send();
	});
}

sendRequest("GET", requestURL)
.then(data => {
	for (let i = 0; i < data; i++) {
		console.log("Hello World!");
	}
})
.catch(err => console.error(err));

//-----------------------------------------------------------------------------------------------

//async await
const url = 'https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50';

async function fetchAsyncTodos() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		for (let i = 0; i < data; i++) {
			console.log("Hello World!");
		}
	} catch (err) {
		console.error("Error:", err);
	}
}

fetchAsyncTodos();