import { Movie } from './Movie'

export interface MovieDetails extends Movie {
    tagline: string
    budget: number
    genres: { id: string; name: string }[]
    homepage: string
}
