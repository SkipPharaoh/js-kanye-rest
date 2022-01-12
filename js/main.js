
let url = "https://api.kanye.rest/"
const options = {
    methond: "GET",
    headers: {}
}
function newQuote () {
fetch (url, options).then((resp)=>{
    console.log(resp)
    resp.json().then((data) => {
        console.log("our data", data.quote)
        displayQuote(data.quote)
})
function displayQuote(quote){
    const kanyeQuote = document.getElementById("container")
    kanyeQuote.innerText = quote
}
})
}
newQuote()
const kanyeButton = document.querySelector(".button")
kanyeButton.addEventListener("click", newQuote)