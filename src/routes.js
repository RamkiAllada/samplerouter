import Movies from './components/movies/Movies.vue';
import Books from './components/books/Books.vue';
import Home from './components/home/Home.vue';
import MovieDetails from './components/moviedetails/MovieDetails.vue';

export const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path: '/Movies',
    component: Movies,
    children:[
      {
        path:'movieDetails/:id',
        component: MovieDetails,
        name: 'movieDetails'
      }
    ]
  },
  {
    path: '/books/:id',
    component: Books
  },
  {
    path:'*',
    redirect: '/'
  }
]
