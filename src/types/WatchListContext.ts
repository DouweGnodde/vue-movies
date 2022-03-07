import Movie from "./Movie";

export default interface WatchListContext {
    getWatchListMovies: () => Movie[]
    addToWatchList: (movie: Movie) => void
    removeFromWatchList: (movie: Movie) => void
}