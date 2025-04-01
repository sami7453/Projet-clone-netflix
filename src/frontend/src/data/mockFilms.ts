import type { Film } from  '../interfaces/Film'

export const mockFilms: Film[] = [
  {
    id: 1,
    title: 'The Vue Awakens',
    description: 'Une révolution dans le front-end.',
    image: '/assets/vue-awakens.jpg',
    type: 'film',
    genre: 'Science-fiction',
    releaseYear: 2024,
  },
  {
    id: 2,
    title: 'Vite & Furious',
    description: 'Ils codent vite, ils déploient furieusement.',
    image: '/assets/vite-furious.jpg',
    type: 'film',
    genre: 'Action',
    releaseYear: 2023,
  }
]
