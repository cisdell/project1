function searchPrice() {
    setTimeout(() => {
        const ticker = document.getElementById("price-input").value;
        fetch(`http://localhost:8081/api/prices/${ticker}`)
        .then(response => response.json())
        .then(data => {
            const element = document.getElementById("prices");
            element.innerText = JSON.stringify(data);
        })
    }, 1000);
}

fetch(`http://localhost:8081/api/prices/bitcoin`)
.then(response => response.json())
.then(data => {
    setTimeout(() => {
        const element = document.getElementById("prices");
        element.innerText = JSON.stringify(data);
    }, 2000)
})


fetch('http://localhost:8081/api/volume/bitcoin')
.then(response => response.json())
.then(data => {
    setTimeout(() => {
        const element = document.getElementById("volume");
        element.innerText = JSON.stringify(data);
    }, 2000)
})

// fetch('http://localhost:8081/api/volume/GOOG')
// .then(response => response.json())
// .then(data => {
//     const element2 = document.getElementById("volumes");
//     element2.innerText = JSON.stringify(data);
// })

;