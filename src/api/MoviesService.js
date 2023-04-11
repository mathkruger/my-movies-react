import axios from "axios";

const API_KEY = "5ed924ac6585bb66c5cb803ba65d4732";
const BASE_URL = "https://api.themoviedb.org/3/";

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`; 

export class MoviesService {
    static getMovies() {
        return axios.get(withBaseUrl("movie/popular"));
    }

    static getMovieById(id) {
        return axios.get(withBaseUrl(`movie/${id}`));
    }
}
