export interface IMovieDetails {
  poster_path: string,
  title: string,
  release_date: string,
  id: number,
  genres: { [name: string]: string }[],
  homepage: string,
}
