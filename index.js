console.log("hi");

const apiUrl = "https://dog.ceo/api/breed/retriever/golden/images/random";

function fetchImage() {
    fetch(apiUrl)
    .then((response) => {
        if(!response.ok) {
            throw new Error('Error retrieving image from API');
        }
        return response.json();
    })
    .then (data => {
        const el = document.getElementById('image-container');
        const image = document.createElement('img');
        image.src = data.message;
        el.appendChild(image);
    })
    .catch((error) => console.error(error));
  }

  