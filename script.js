const accessKey = "icuR8pdGpDzuW18zRETXkyZCmj-n9WVIvc3qcWIx4dQ";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.forEach((result) => {
        const individualItem = document.createElement("div");
        individualItem.classList.add("search-item");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const bookingButton = document.createElement("button");
        bookingButton.classList.add("book-now");
        bookingButton.textContent = "Book Now";

        bookingButton.addEventListener('click', () => {
            alert("Your request has been sent to the car driver. You will be receiving a call from the driver.");
        });

        individualItem.appendChild(image);
        individualItem.appendChild(bookingButton);
        searchResult.appendChild(individualItem);
    });

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarList = document.querySelector('.navbar-list');

    menuIcon.addEventListener('click', function() {
        navbarList.classList.toggle('active');
    });
});