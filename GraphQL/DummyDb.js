export let movies =[
    {
        id:0,
        name: "shin",
        score: 29,

    },
    {
        id:1,
        name: "choei",
        score: 29,

    },
    {
        id:2,
        name: "kim",
        score: 29,

    },
    {
        id:3,
        name: "Lee",
        score: 29,
  
    },
    {
        id:4,
        name: "Doe",
        score: 29,

    }

];


export const getMovies = () => movies;


export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0]; 
};


export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length ){
        movies = cleanedMovies
        return true;
    }
    else{
        false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: (movies.length+1),
        name,
        score
    }
    movies.push(newMovie);
    return newMovie
}
