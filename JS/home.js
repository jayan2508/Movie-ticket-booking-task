function setMovieDetails(movie, director, starring, editedBy, imagePath) {
    // Create an object to hold movie details
    var movieDetails = {
        'movie': movie,
        'director': director,
        'starring': starring,
        'editedBy': editedBy,
        'imagePath': imagePath
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('movieDetails', JSON.stringify(movieDetails));
}

// Add a click event listener to each card to set movie details in local storage
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        // Get movie details from the card
        var movie = card.querySelector('.movie').innerText;
        var director = card.querySelector('h6:nth-of-type(1) + p').innerText;
        var starring = card.querySelector('h6:nth-of-type(2) + p').innerText;
        var editedBy = card.querySelector('h6:nth-of-type(3) + p').innerText;
        var imagePath = card.querySelector('img').src;

        // Call the function to set movie details in local storage
        setMovieDetails(movie, director, starring, editedBy, imagePath);
    });
});


function searchMovies() {
    var input, filter, cards, card, i, title;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card");
    var noMatchMessage = document.getElementById("noMatchMessage");
    var noFoundImage = document.getElementById('noFoundImage');
    var languageContainer = document.getElementById('languageContainer');
    var genresContainer = document.getElementById('genresContainer');

    // Counter to keep track of matching movies
    var matchCount = 0;

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.querySelector(".movie").innerText;

        if (title.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
            matchCount++;
        } else {
            card.style.display = "none";
        }
    }

    // Show or hide the "No matching movies" message based on matchCount
    if (matchCount === 0) {
        noMatchMessage.style.display = "block";
        noFoundImage.style.display = 'block';
        languageContainer.style.display = 'none';
        genresContainer.style.display = 'none';
    } else {
        noMatchMessage.style.display = "none";
        noFoundImage.style.display = 'none';
        languageContainer.style.display = 'block';
        genresContainer.style.display = 'block';
    }
}

function openSignInModal() {
    window.location.href = 'sign-in.html';
}

// Add an event listener to the document to close the off-canvas menu when clicking outside of it
document.addEventListener('click', function (event) {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    const closeIcon = document.querySelector('.off-canvas-toggle .close');
    const menuIcon = document.querySelector('.off-canvas-toggle .menu');

    // Check if the clicked element is outside the off-canvas menu and not the menu toggle button
    if (!offCanvasMenu.contains(event.target) && event.target !== menuIcon) {
        // Close the off-canvas menu
        offCanvasMenu.style.right = "-250px";

        // Toggle the visibility of the close and menu icons
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
});

function toggleOffCanvas() {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    const closeIcon = document.querySelector('.off-canvas-toggle .close');
    const menuIcon = document.querySelector('.off-canvas-toggle .menu');

    // Toggle the off-canvas menu
    offCanvasMenu.style.right = (offCanvasMenu.style.right === "0px") ? "-250px" : "0px";

    // Toggle the visibility of the close and menu icons
    closeIcon.style.display = (closeIcon.style.display === "none") ? "block" : "none";
    menuIcon.style.display = (menuIcon.style.display ===
        "none") ? "block" : "none";
}


// Add these variables at the beginni ng of your JavaScript file
var languageFilter = document.getElementById('languageFilter');
var genreFilter = document.getElementById('genreFilter');
var cards = document.querySelectorAll('.cards .card');

// Modify your existing searchMovies() function to filter by language and genre
function searchMovies() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();

    cards.forEach(function (card) {
        var title = card.querySelector('.movie').innerText.toLowerCase();
        var language = card.querySelector('#language').innerText.toLowerCase();
        var genres = card.querySelector('#genres').innerText.toLowerCase();

        // Check if the movie matches the search text, language, and genre filters
        var isMatch = title.includes(searchText) &&
            (languageFilter.value === 'all' || language.includes(languageFilter.value)) &&
            (genreFilter.value === 'all' || genres.includes(genreFilter.value));

        // Display or hide the card based on the match
        card.style.display = isMatch ? 'block' : 'none';
    });

    // Show/hide the "No Results" message and image
    showNoResultsMessage();
}

// Add this function to show/hide the "No Results" message and image
function showNoResultsMessage() {
    var noFoundImage = document.getElementById('noFoundImage');
    var noMatchMessage = document.getElementById('noMatchMessage');
    var languageContainer = document.getElementById('languageContainer');
    var genresContainer = document.getElementById('genresContainer');
    var noResults = true;

    cards.forEach(function (card) {
        if (card.style.display !== 'none') {
            noResults = false;
        }
    });

    if (noResults) {
        noFoundImage.style.display = 'block';
        noMatchMessage.style.display = 'block';
        languageContainer.style.display = 'none';
        genresContainer.style.display = 'none';
    } else {
        noFoundImage.style.display = 'none';
        noMatchMessage.style.display = 'none';
        languageContainer.style.display = 'block';
        genresContainer.style.display = 'block';
    }
}

// Call the searchMovies() function when the page loads
searchMovies();

// Add event listeners for changes in language and genre filters
languageFilter.addEventListener('change', searchMovies);
genreFilter.addEventListener('change', searchMovies);
