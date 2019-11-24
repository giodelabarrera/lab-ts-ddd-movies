type MovieReleaseDateProps = {
  value: Date
}

class MovieReleaseDate {
  value: Date
  constructor({value}: MovieReleaseDateProps) {
    this.value = value
  }
}

export default MovieReleaseDate
