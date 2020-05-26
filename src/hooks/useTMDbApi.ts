import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'

import { Movie } from '../types/Movie'

interface PopularMoviesResponse {
    page: number
    total_results: number
    total_pages: number
    results: Movie[]
}

function useTMDbApi<DataType>(fetchUrl: string, pagination?: boolean) {
    const [data, setData] = useState<DataType | null>(null)
    const [error, setError] = useState<AxiosError | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)

    function setNextPage() {
        setPage((prevPage) => prevPage + 1)
    }

    useEffect(() => {
        const defineData = (data) => data || []

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(fetchUrl)
                const newState = pagination
                    ? (prevData: DataType | null) => [
                          ...defineData(prevData),
                          ...res.data.results,
                      ]
                    : res.data
                setData(newState)
                setIsLoading(false)
            } catch (e) {
                setError(e)
            }
        }
        fetchData()
    }, [fetchUrl, pagination])

    return { data, error, isLoading, setNextPage, page }
}

export default useTMDbApi
