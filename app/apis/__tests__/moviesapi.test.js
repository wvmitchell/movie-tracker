import MoviesApi from '../moviesapi'

describe('MoviesApi', () => {
  it('holds the rootAPI', () => {
    const api = new MoviesApi()
    const expected = 'https://api.themoviedb.org/3/'
    expect(api.rootAPI).toBe(expected)
  })

  it('sets the api key', () => {
    const api = new MoviesApi('some-key')
    const expected = 'some-key'
    expect(api.apiKey).toEqual(expected)
  })
})
