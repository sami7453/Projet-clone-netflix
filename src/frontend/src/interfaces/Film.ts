export interface Film {
    id: number
    title: string
    description: string
    image: string
    type: 'film' | 'serie'
    genre: string
    releaseYear: number
  }
  