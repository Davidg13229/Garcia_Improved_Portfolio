const BASE = "https://countapi.mileshilliard.com/api/v1";
const KEY = "david-personal-portfolio";

// Increment
  fetch(`${BASE}/hit/${KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("visits").innerText = data.value;
    })
    .catch(err => console.error("Error fetching counter:", err));


    
// To reset Visits Value
// Paste This in browser: https://countapi.mileshilliard.com/api/v1/set/your_key?value=100
// Change the "your_key" to the const KEY (david-personal-portfolio)
// set the desired value from 100 to 0 

