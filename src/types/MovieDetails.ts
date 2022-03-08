export default interface MovieDetails {
    adult: boolean
    backdrop_path: string
    belongsToCollection: object|null
    budget: number
    tagline?: string
    vote_average: number
    vote_count: number
    genres: { id: number, name: string}[]
    homepage: string|null
    id: number
    release_date: string
}