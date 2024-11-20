const API_KEY = 'effeeaa2'; 
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;


const moviesContainer = document.getElementById('movies-container');
const loadMoviesButton = document.getElementById('load-movies-button');


async function fetchTopMovies() {
    try {
        const year = 2024;
        const searchQuery = `&s=movie&y=${year}`; 

       
        const response = await fetch(`${API_URL}${searchQuery}`);
        const data = await response.json();

        if (data.Response === "True") {
           
            const topMovies = data.Search.slice(0, 10);

            
            moviesContainer.innerHTML = topMovies.map(movie => `
                <div class="movie-card">
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                </div>
            `).join('');
        } else {
            
            moviesContainer.innerHTML = `<p>No movies found for 2024.</p>`;
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        moviesContainer.innerHTML = `<p>Error loading movies. Please try again later.</p>`;
    }
}


loadMoviesButton.addEventListener('click', fetchTopMovies);
