import { Component } from "react";
import { Badge } from "react-bootstrap";

class MovieDetails extends Component {
	state = {
		movie: [],
	};

	componentDidMount = async () => {
		const url = "http://www.omdbapi.com/?apikey=39fbd402&i=";

		try {
			let response = await fetch(url + this.props.imdbID);
			console.log(response);
			if (response.ok) {
				let movie = await response.json();
				console.log(movie);
				this.setState({ movie: movie.Search });
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div>
				<h4>{this.state.movie.title}</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					<div key={this.state.movie.imdbID} className="col mb-2 text-center px-1">
						<img className="img-fluid object-fit-cover" src={this.state.movie.Poster} alt="poster film" />
						<div>
							<Badge>
								{this.state.movie.Year} - {this.state.movie.Genre}
							</Badge>
							<p>{this.state.movie.Plot}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieDetails;
