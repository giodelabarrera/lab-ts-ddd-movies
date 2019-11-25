import MovieRepository from '../domain/MovieRepository'

type MoviesSearcherProps = {
  repository: MovieRepository
}

type ExecuteProps = {
  query: string
}

class MoviesSearcher {
  readonly repository: MovieRepository
  constructor({repository}: MoviesSearcherProps) {
    this.repository = repository
  }

  async execute({query}: ExecuteProps) {
    const movies = await this.repository.search({query})
    return movies
  }
}

export default MoviesSearcher
