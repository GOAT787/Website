const catImgElem = document.getElementById("cat-img");

fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        catImgElem.src = data[0].url;
    })
    .catch(e => console.log(e));



