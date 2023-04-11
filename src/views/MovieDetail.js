import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";
import { MovieDetailContainer } from "../styles/MovieDetailContainer";

export function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await MoviesService.getMovieById(id);
            setMovie(data);
        }
        
        fetchMovie();
    }, [id]);

    return (
        <MovieDetailContainer>
            <h1>{movie.title}</h1>

            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />

            <ul>
                <li>Release date: {movie.release_date}</li>
                <li>Score: {movie.vote_average}</li>
                <li>Genres: { movie.genres?.map(x => x.name).join(", ") }</li>
            </ul>

            <article>
                {movie.overview}
            </article>
        </MovieDetailContainer>
    );
}