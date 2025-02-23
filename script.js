// Dog API Integration
function getDog() {
    const breed = document.getElementById("dogBreed").value;
    const url = breed ? `https://dog.ceo/api/breeds/image/random?breed=${breed}` : "https://dog.ceo/api/breeds/image/random";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dogImage = data.message;
            document.getElementById("dogImage").innerHTML = `<img src="${dogImage}" alt="Random Dog" style="max-width: 100%; border-radius: 8px;">`;
        })
        .catch(error => {
            console.error("Failed to fetch dog image", error);
            document.getElementById("dogImage").innerHTML = "Failed to load dog image. Please try again later.";
        });
}

// Cat API Integration (Updated)
function getCat() {
    const breed = document.getElementById("catBreed").value;
    let url = "https://api.thecatapi.com/v1/images/search"; // No breed filter needed for simplicity.

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const catImage = data[0].url;
            document.getElementById("catImage").innerHTML = `<img src="${catImage}" alt="Random Cat" style="max-width: 100%; border-radius: 8px;">`;
        })
        .catch(error => {
            console.error("Failed to fetch cat image", error);
            document.getElementById("catImage").innerHTML = "Failed to load cat image. Please try again later.";
        });
}

function getQuote() {
    const category = document.getElementById("quoteCategory").value;
    let url = "https://api.quotable.io/random"; // Fetch a random quote

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }
            return response.json();
        })
        .then(data => {
            // Display the quote
            const quote = data.content;
            const author = data.author || 'Unknown';
            document.getElementById("quoteText").innerText = `"${quote}" — ${author}`;
        })
        .catch(error => {
            console.error("Failed to fetch quote", error);
            document.getElementById("quoteText").innerText = "Failed to load quote. Please try again later.";
        });
}