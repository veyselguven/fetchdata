console.log("hiii");

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
  const response = await fetch(api_url);
  console.log("res", await response);
  let data = await response.json();
  console.log(data);
  const { longitude, latitude } = data;
  document.getElementById("lat").textContent = longitude;
  document.getElementById("at").textContent = latitude;
  //console.log(longitude);
  //console.log(latitude);
  //   console.log(data.longitude);
  //   console.log(data.latitude);
}
getISS();
// let pos = {
//   lat: -45,
//   lon: 112,
// };

// console.log(pos);
