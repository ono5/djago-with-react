import React, { Component } from 'react';

class MovieDetails extends Component {

    render() {
        return (
            <React .Fragment>
                { this.props.movie ? (
                    <div>
                        <h3>{this.props.movie.title}</h3>
                        <h3>{this.props.movie.description}</h3>
                    </div>
                ) : null}
            </React .Fragment>
        )
    }
}

export default MovieDetails;