import {Movie} from './Movie';

function MoviesList(props) {
    const {movies = []} = props;
    console.log(Movie)

    return <div className='movies'>
        {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID}{...movie}/>
            )) : <h5>Nothing found</h5>
        }
    </div>
}

export {MoviesList};
