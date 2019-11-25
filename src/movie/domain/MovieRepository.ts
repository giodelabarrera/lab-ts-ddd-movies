import Movie from './Movie'
import MovieId from './MovieId'

export type SearchProps = {
  query: string
}

export type RetrieveProps = {
  id: MovieId
}

interface MovieRepository {
  search({query}: SearchProps): Promise<Movie[]>

  retrieve({id}: RetrieveProps): Promise<Movie>
}

export default MovieRepository
