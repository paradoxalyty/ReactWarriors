import React, {Component} from "react";

export class MoviesWillWatch extends Component {
    render() {
        const {moviesWillWatch} = this.props;
        return (
            <>
                <h4 className="text-center">Will Watch: {moviesWillWatch.length}</h4>
                <ul className="list-group">
                    {moviesWillWatch.map(movie => (
                        <li key={movie.id} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <p>{movie.title}</p>
                                <p>{movie.vote_average}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}