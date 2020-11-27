console.log("hello world");

fetch('http://localhost:8081/api/prices/GOOG')
.then(response => response.json())
.then(data => console.log(data));