import PosterSize from "../types/PosterSize";

export default function getPosterHref(posterUrl: string, size: PosterSize) {
    return `https://image.tmdb.org/t/p/${size}/${posterUrl}`
}