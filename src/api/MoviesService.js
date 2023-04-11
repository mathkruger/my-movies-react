import axios from "axios";

const API_KEY = "5ed924ac6585bb66c5cb803ba65d4732";
const BASE_URL = "https://api.themoviedb.org/3/";

const withBaseUrl = (path, args = "") => `${BASE_URL}${path}?api_key=${API_KEY}${
    args.length > 0 ? "&" : ""
}${args}`; 

export class MoviesService {
    static getMovies(page = 1) {
        return axios.get(withBaseUrl("movie/popular", `page=${page}`));
    }

    static getMovieById(id) {
        return axios.get(withBaseUrl(`movie/${id}`));
    }
}
