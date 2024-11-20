const API_KEY = 'a4901e3b20d6ebc51f605c4e2ae054f9'; 
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const moviesContainer = document.getElementById('movies-container');
const loadMoviesButton = document.getElementById('load-movies-button');

async function fetchTopMovies() {
    try {
        const year = 2024;
        const queryParams = `&primary_release_year=${year}&sort_by=popularity.desc`; // Movies sorted by popularity

        const response = await fetch(`${API_URL}${queryParams}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            // Take the top 10 movies
            const topMovies = data.results.slice(0, 10);

            // Render movies
            moviesContainer.innerHTML = topMovies.map(movie => `
                <div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" 
                         alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>Release Date: ${movie.release_date}</p>
                </div>
            `).join('');
        } else {
            // No movies found
            moviesContainer.innerHTML = `<p>No movies found for 2024.</p>`;
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        moviesContainer.innerHTML = `<p>Error loading movies. Please try again later.</p>`;
    }
}

loadMoviesButton.addEventListener('click', fetchTopMovies);
