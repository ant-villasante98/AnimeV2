export interface Anime {
    title: string,
    images: {
        jpg: {
            image_url: string
        }
    },
    url: string,
    mal_id: number,
    trailer_url: string,
    score: number,
    synopsis: string
}