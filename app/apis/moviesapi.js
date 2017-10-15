class MoviesApi {
  constructor(apiKey) {
    this.rootAPI = 'https://api.themoviedb.org/3/'
    this.apiKey = apiKey
  }

  fetchNowPlaying = () => (
    fetch(`${this.rootAPI}movie/now_playing?api_key=${this.apiKey}`)
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.results)
  )
}

export default MoviesApi
