'use strict'

//получить рандомное число с шансом 50%
const requestURL = 'https://async-demo.herokuapp.com';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL + '/unstable?maxRandom=20&prob=50');

xhr.send();

xhr.onload = () => {
	if (xhr.status >= 400) {
		console.error(xhr.response);
	} else {
		for (let i = 0; i < xhr.response; i++) {
			console.log("Hello World!");
		}
	}
}



// функция с методом, адресом, обьектом и колбеком
let createdObj;
function sendRequest(
   method,
   url,
   { body, headers = {} } = {},
   callback
   ) {

   const xhr = new XMLHttpRequest();
   xhr.open(method, url);

   Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
   });

   xhr.addEventListener('load', () => {
      if (xhr.status >= 400) {
         callback(xhr.response);
      } else {
         callback(null, xhr.response);
      }
   });
   xhr.send(body);
   }



//создать обьект
let user0070 = {
firstName: "Vadym",
lastName: "Kononenko",
}
//делаем запрос, создаем обьект
sendRequest('POST', 'https://async-demo.herokuapp.com/objects/&prob=20', {
body: JSON.stringify(user0070),
headers: {
   'Content-type': 'application/json; charset=utf-8',
}
}, (err,response) => {
   if (err) {
   console.error(err); 
   return;
   }
   try {
   createdObj = JSON.parse(response);
   } catch (err) {
   console.error(err);
   return;
   }
   const {id} = createdObj;
const extension = { age: 25, name2: "Хагани" };
//изменяем обьект добавляем возраст юзера


sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}/&prob=20`, {
   body: JSON.stringify(extension),
   headers: {
      'Content-type': 'application/json; charset=utf-8',
   }
}, (err) => {
   if (err) {
      console.error(err); 
      return;
      }
      try {
      createdObj = JSON.parse(response);
      } catch (err) {
      console.error(err);
      return;
      }
// удаляем обьект со всеми изменениями
   sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}/&prob=20`, null,
      (err) => {
                     if (err) {
                        console.error(err);
                     }  else {
                     try {
                     console.log("DONE!");
                     createdObj = JSON.parse(response);
                     } catch (err) {
                     console.error(err);
                     return;
                     }
                  }
               }
            );
         }
      );
   }
); 