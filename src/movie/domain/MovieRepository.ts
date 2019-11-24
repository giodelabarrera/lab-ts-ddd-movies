import Movie from './Movie'
import MovieId from './MovieId'

type SearchProps = {
  query: string
}

type RetrieveProps = {
  id: MovieId
}

interface MovieRepository {
  search({query}: SearchProps): Movie[]

  retrieve({id}: RetrieveProps): Movie
}

export default MovieRepository
