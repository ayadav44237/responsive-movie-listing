
const movies = [
    {
        title: 'Inception',
        poster: 'Assests/Inception.jpeg',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
        director: 'Christopher Nolan',
        releaseDate: '2010-07-16',
        rating: '8.8/10',
        genre: 'Sci-Fi, Thriller',
        duration: '148 minutes',
        cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page'
    },
    {
        title: 'The Dark Knight',
        poster: 'Assests/The_Dark_Knight.jpg',
        description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        director: 'Christopher Nolan',
        releaseDate: '2008-07-18',
        rating: '9.0/10',
        genre: 'Action, Crime, Drama',
        duration: '152 minutes',
        cast: 'Christian Bale, Heath Ledger, Aaron Eckhart'
    },
    {
        title: 'Parasite',
        poster: 'Assests/Parasite.jpg',
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        director: 'Bong Joon-ho',
        releaseDate: '2019-05-30',
        rating: '8.6/10',
        genre: 'Drama, Thriller',
        duration: '132 minutes',
        cast: 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong'
    },
    {
        title: 'The Matrix',
        poster: 'Assests/The_Matrix.jpg',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        director: 'Lana Wachowski, Lilly Wachowski',
        releaseDate: '1999-03-31',
        rating: '8.7/10',
        genre: 'Action, Sci-Fi',
        duration: '136 minutes',
        cast: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss'
    },
    {
        title: 'Pulp Fiction',
        poster: 'Assests/Pulp_Fiction.jpg',
        description: 'The lives of two mob hitmen, a boxer, a gangster’s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        director: 'Quentin Tarantino',
        releaseDate: '1994-10-14',
        rating: '8.9/10',
        genre: 'Crime, Drama',
        duration: '154 minutes',
        cast: 'John Travolta, Uma Thurman, Samuel L. Jackson'
    }
];

    



const movieList = document.getElementById('movie-list');
const searchBar = document.getElementById('search-bar');
const modal = document.getElementById('movie-modal');
const modalContent = document.getElementById('modal-movie-details');
const closeModalButton = document.getElementsByClassName('close')[0];

function displayMovies(filteredMovies) {
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p >${movie.description}</p>
        `;
        movieCard.addEventListener('click', () => openModal(movie));
        movieList.appendChild(movieCard);
    });
}

function openModal(movie) {
    modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}">
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Cast:</strong> ${movie.cast}</p>
    `;
    modal.style.display = 'block';
}



function closeModal() {
    modal.style.display = 'none';
}

searchBar.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
});

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
});

displayMovies(movies);
