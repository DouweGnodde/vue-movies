import Movie from "./Movie";

export default interface WatchListContext {
    watchListContains: (movie: Movie) => boolean
    getWatchList: () => Movie[]
    addToWatchList: (movie: Movie) => void
    removeFromWatchList: (movie: Movie) => void
}