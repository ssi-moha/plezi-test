import { renderHook } from '@testing-library/react-hooks'
import useTMDbApi from './useTMDbApi'
import { Movie } from '../types/Movie'

const movieId = '419704'

it('useTMDbApi Hook / isLoading is true', () => {
    const { result } = renderHook(() =>
        useTMDbApi<Movie>(
            `${process.env.REACT_APP_BASE_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
        )
    )

    expect(result.current.isLoading).toBeTruthy()
})

it('useTMDbApi Hook / data is returned from API', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
        useTMDbApi<Movie>(
            `${process.env.REACT_APP_BASE_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
        )
    )
    expect(result.current.data).toBeNull()
    await waitForNextUpdate()
    expect(result.current.data.id.toString()).toBe(movieId)
})

it('useTMDbApi Hook / without API key', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
        useTMDbApi<Movie>(`${process.env.REACT_APP_BASE_URL}movie/${movieId}`)
    )

    await waitForNextUpdate()
    expect(result.current.error?.message).toBe(
        'Request failed with status code 401'
    )
})
