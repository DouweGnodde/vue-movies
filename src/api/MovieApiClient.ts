import axios from "axios";
import Movie from "../types/Movie";
import PosterSize from "../types/PosterSize";
import MovieDetails from "../types/MovieDetails";

interface MovieApiListResponse<T> {
    page: number
    total_pages: number
    total_results: number
    results: T
}

const axiosMovieApiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'a548a1ff64ca5a1baa99f68385919951'
    }
});

class MovieApiClient {
    static async getTopRatedMovies(page: number): Promise<MovieApiListResponse<Movie[]>> {
        const response = await axiosMovieApiClient.get<MovieApiListResponse<Movie[]>>('/movie/top_rated', {
            params: {
                page
            }
        });

        return response.data
    }

    static async getMovieDetails(movieId: number): Promise<MovieDetails> {
        const response = await axiosMovieApiClient.get(`/movie/${movieId}`);
        console.log(response);

        return response.data;
    }
}

export { axiosMovieApiClient }
export default MovieApiClient;