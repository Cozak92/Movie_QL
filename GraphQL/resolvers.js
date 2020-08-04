import { getById,getMovies,addMovie,deleteMovie } from "./DB"

const resolvers ={
    Query:{
        movies: (_, {limit,rating}) => getMovies(limit,rating),
    }
}

export default resolvers;