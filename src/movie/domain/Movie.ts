import MovieId from './MovieId'
import MovieTitle from './MovieTitle'
import MovieReleaseDate from './MovieReleaseDate'

type MovieProps = {
  id: MovieId
  title: MovieTitle
  releaseDate: MovieReleaseDate
}

class Movie {
  readonly id: MovieId
  readonly title: MovieTitle
  readonly releaseDate: MovieReleaseDate

  constructor({id, title, releaseDate}: MovieProps) {
    this.id = id
    this.title = title
    this.releaseDate = releaseDate
  }
}

export default Movie
