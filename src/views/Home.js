import { useMemo, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../components/MoviesList";
import { Pagination } from "../components/Pagination";
import { CardContainer } from "../styles/CardContainer";

export function Home() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchMovies = async (page) => {
      const { data } = await MoviesService.getMovies(page);

      setMovies(data.results);
    };
  
    useMemo(() => {
      fetchMovies(currentPage);
    }, [currentPage]);

    return (
        <>
            <h1>Home</h1>

            <CardContainer>
                <MoviesList movies={movies} />
            </CardContainer>

            <Pagination
              pageSize={20}
              currentPage={currentPage}
              totalCount={500 * 20}
              onPageChange={page => setCurrentPage(page)} />
        </>
    );
}
