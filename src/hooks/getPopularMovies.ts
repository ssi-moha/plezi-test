import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'

import { Movie } from '../types/Movie'

interface PopularMoviesResponse {
    page: number
    total_results: number
    total_pages: number
    results: Movie[]
}

const fetchUrl = (page: number = 1) =>
    `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`

function GetPopularMovies() {
    const [data, setData] = useState<PopularMoviesResponse['results']>([])
    const [error, setError] = useState<AxiosError | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return

        setPage((prevPage) => prevPage + 1)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get<PopularMoviesResponse>(
                    fetchUrl(page)
                )
                setData((prevData) => [...prevData, ...res.data.results])
                setIsLoading(false)
            } catch (e) {
                setError(e)
            }
        }
        fetchData()
    }, [page])

    return { data, error, isLoading }
}

export default GetPopularMovies
