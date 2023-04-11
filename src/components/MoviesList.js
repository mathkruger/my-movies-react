import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {
                movies.map((m, i) => <MovieItem key={i} {...m} />)
            }
        </ul>
    </section>
);