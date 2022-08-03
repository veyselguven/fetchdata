/* 
 fetch is part of a js window object method fetch api
 it allows to fetch data from api asynchronously without installing any additional libraries

fetch response format types
response.json()
response.text()
response.blob()
response.formData()
response.arrayBuffer()
*/

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .catch((err) => console.log(err));

/* 
  Axios

Axios is a js library for making http req from node.js or xmlHttpReq or browser
  as a modern library, it is based on promise api
  to be able to use Axios use Axios library, 
  we have to install it and import it to our project,using cdn, npm, yarn or bower

Axios Config Object

BaseUrl
Params
Headers
Auth
ResponseType

Axios Response Object
Data- actually response body
Status-Http status of call like 200 or 404
StatusText-Http status as a text message
Headers-the same as in request
Config-Req configuration
Request-XMLHTTPREQUEST
  */

axios
  .get(url)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//   axios.post({
//     'url',
//     { name:"John",age:22},{option}
//   })

// fetch json

fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// axios json
