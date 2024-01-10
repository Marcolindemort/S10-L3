import { Component } from "react";

class MyGallery extends Component {
	state = {
		movie: [],
	};

	componentDidMount = async () => {
		const url = "http://www.omdbapi.com/?apikey=39fbd402&type=movie&s=";

		try {
			let response = await fetch(url + this.props.title);
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
				<h4>{this.props.category}</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.state.movie.map((movie) => (
						<div key={movie.imdbID} className="col mb-2 text-center px-1">
							<img className="img-fluid object-fit-cover" src={movie.Poster} alt="poster film" />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default MyGallery;
