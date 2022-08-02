// fetch("https://reqres.in/api/users")
//   .then((res) => {
//     if (res.ok) {
//       console.log("SUCCES");
//     } else {
//       console.log("Not Succesful");
//     }
//   })
//   .then((data) => console.log("data", data))
//   .catch((e) => console.log("e", e));

///
// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "User 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log("data", data))
//   .catch((e) => console.log("e", e));

fetch("https://reqres.in/api/users").then((res) => {
  console.log(res);
});
// .then((data) => console.log("data", data))
// .catch((e) => console.log("e", e));
