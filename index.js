console.log("hi");

const apiUrl = "https://dog.ceo/api/breed/retriever/golden/images/random";

function fetchImage() {
    fetch(apiUrl)
    .then((response) => {
        console.log(response);
        if(!response.ok) {
            throw new Error('Error retrieving image from API');
        }
        response.json();
        console.log(response);
    })
    // .then (blob => {
    //     const imageUrl = URL.createObjectURL(blob);
    //     const el = document.getElementById('image-container');
    //     const image = document.createElement('img');
    //     image.src = imageUrl;
    //     console.log(image.src);
    //     el.appendChild(image);
    // })
    .catch((error) => console.error(error));
  }

  fetchImage();