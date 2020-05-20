import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import { Movie } from "../types/Movie";

interface PopularMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}

const fetchUrl = `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

function GetPopularMovies() {
    const [response, setResponse] = useState<AxiosResponse<PopularMoviesResponse> | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get<PopularMoviesResponse>(fetchUrl);
                setResponse(res);
                setIsLoading(false);
            } catch (e) {
                setError(error);
            }
        };
        fetchData();
    }, [])

    return { response, error, isLoading };
}

export default GetPopularMovies;