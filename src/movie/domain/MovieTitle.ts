type MovieTitleProps = {
  value: string
}

class MovieTitle {
  value: string
  constructor({value}: MovieTitleProps) {
    this.value = value
  }
}

export default MovieTitle
