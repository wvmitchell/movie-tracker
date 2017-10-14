class MoviesApi {
  constructor(apiKey) {
    this.rootAPI = 'https://api.themoviedb.org/3/'
    this.apiKey = apiKey
  }

  fetchLatestMovies = () => {
    fetch(`${this.rootAPI}movies/latest?api_key=${this.api_key}`)
      .then(response => response.json())
  }
}

export default MoviesApi
