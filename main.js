console.log("hello world");

fetch('http://localhost:8081/api/prices/bitcoin')
.then(response => response.json())
.then(data => {
    setTimeout(() => {
        const element = document.getElementById("prices");
        element.innerText = JSON.stringify(data);
    }, 2000)
    // console.log(data)



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