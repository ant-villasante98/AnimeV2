export interface Anime {
    mal_id: number;
    url: string;
    images: Images;
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: any[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background?: any;
    season: string;
    year: number;
    broadcast: Broadcast;
    producers: Producer[];
    licensors: any[];
    studios: Producer[];
    genres: Producer[];
    explicit_genres: any[];
    themes: any[];
    demographics: Producer[];
}

interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Broadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
}

interface Aired {
    from: string;
    to: string;
    prop: Prop;
    string: string;
}

interface Prop {
    from: From;
    to: From;
}

interface From {
    day: number;
    month: number;
    year: number;
}

interface Title {
    type: string;
    title: string;
}

interface Trailer {
    youtube_id?: any;
    url?: any;
    embed_url?: any;
    images: Images2;
}

interface Images2 {
    image_url?: any;
    small_image_url?: any;
    medium_image_url?: any;
    large_image_url?: any;
    maximum_image_url?: any;
}

interface Images {
    jpg: Jpg;
    webp: Jpg;
}

interface Jpg {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}