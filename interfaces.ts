interface IMovie {
    title: string;
    runtime: number
}

function printMovieDetails(movie: IMovie){
    console.log(`Movie title: ${movie.title} and Movie Runtime: ${movie.runtime}`);
}

function printMovieName(movie: IMovie){
    console.log(`Movie title: ${movie.title}`);
}

printMovieDetails({title: 'The Godfather', runtime: 180});
printMovieName({title: 'The Godfather', runtime: 180});

