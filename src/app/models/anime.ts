export interface Anime {
    title: string,
    images: {
        jpg: {
            image_url: string
        },
        webp: {
            image_url: string,
            small_image_url: string
        }
    },
    url: string,
    mal_id: number,
    trailer: {
        youtube_id: string,
        url: string
    }
    score: number,
    synopsis: string
}