const BASE = "https://countapi.mileshilliard.com/api/v1";
const KEY = "david-personal-portfolio";

// Increment
  fetch(`${BASE}/hit/${KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("visits").innerText = data.value;
    })
    .catch(err => console.error("Error fetching counter:", err));


    


// Probably will remove counter in the future, but for now, this is a good way to track the number of visits to the portfolio.