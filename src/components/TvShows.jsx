import { Component } from "react";
import { Link } from "react-router-dom";

class TvShows extends Component {
	state = {
		serie: [],
	};

	componentDidMount = async () => {
		const url = "http://www.omdbapi.com/?apikey=39fbd402&type=series&s=";

		try {
			let response = await fetch(url + this.props.title);
			console.log(response);
			if (response.ok) {
				let serie = await response.json();
				console.log(serie);
				this.setState({ serie: serie.Search });
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div>
				<h4>{this.props.category}</h4>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.state.serie.map((serie) => (
						<Link key={serie.imdbID} to={`/movie-details/${serie.imdbID}`} className="p-0">
							<div className="col mb-2 text-center px-1">
								<img className="img-fluid object-fit-cover" src={serie.Poster} alt="poster film" />
							</div>
						</Link>
					))}
				</div>
			</div>
		);
	}
}

export default TvShows;
