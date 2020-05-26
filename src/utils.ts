export const getImageUrl = (
    poster_path: string | null,
    size: 300 | 780 = 300
) =>
    poster_path
        ? `${process.env.REACT_APP_POSTER_URL}w${size}${poster_path}`
        : `${process.env.PUBLIC_URL}/assets/no-poster-found.png`
