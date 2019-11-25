import MovieRepository, {SearchProps, RetrieveProps} from '../../domain/MovieRepository'
import Movie from '../../domain/Movie'

class HTTPMovieRepository implements MovieRepository {
  async search({query}: SearchProps) {
    const baseUrl = 'https://api.themoviedb.org/3'
    const apiKey = 'c1f30cf2a7997230da4337029b253209'

    const endpoint = `${baseUrl}/search/movie`
    const headers = {'content-type': 'application/json'}

    // query params
    const queryParams = new URLSearchParams()
    queryParams.append('query', query)
    queryParams.append('api_key', apiKey)
    const queryParamsString = queryParams.toString()

    const url = `${endpoint}?${queryParamsString}`
    const config = {headers}

    try {
      const responseBody = await window.fetch(url, config)
      const response = await responseBody.json()
      const movies = response.map(movieJSON => {
        // TODO: map response to constructor parameters
        const {id, title, releaseDate} = movieJSON
        return Movie.create({id, title, releaseDate})
      })
      return movies
    } catch (error) {
      // throw infrastructure errors
    }
    return []
  }

  async retrieve({id}: RetrieveProps) {
    // TODO: validate MovieId ValueObject

    const baseUrl = 'https://api.themoviedb.org/3'
    const apiKey = 'c1f30cf2a7997230da4337029b253209'

    const endpoint = `${baseUrl}/movie/${id}`
    const headers = {'content-type': 'application/json'}

    // query params
    const queryParams = new URLSearchParams()
    queryParams.append('api_key', apiKey)
    const queryParamsString = queryParams.toString()

    const url = `${endpoint}?${queryParamsString}`
    const config = {headers}

    try {
      const responseBody = await window.fetch(url, config)
      const movieJSON = await responseBody.json()

      return Movie.create(movieJSON)
    } catch (error) {
      // throw infrastructure errors
    }
    return null
  }
}

export default HTTPMovieRepository
