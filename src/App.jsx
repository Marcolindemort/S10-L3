import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyActionBar from "./components/MyActionBar";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MyGallery from "./components/MyGallery";
import MovieDetails from "./components/MovieDetails";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MyNav />
				<Container fluid className="px-4">
					<MyActionBar />
					<Routes>
						<Route path="/" element={<MyGallery title={"batman"} category={"Batman Movies"} />} />
						<Route
							path="/"
							element={<MyGallery title={"the%20lord%20of%20the%20rings"} category={"The Lord of The Rings Saga"} />}
						/>
						<Route path="/" element={<MyGallery title={"star%20wars"} category={"Star Wars Saga"} />} />
						<Route path="/" element={<MyGallery title={"spider-man"} category={"Spider-Man Movies"} />} />
						<Route path="/tv-shows" element={<TvShows title={"series"} category={"TV Shows"} />} />
						{<Route path="/movie-details/:movieId" element={<MovieDetails />} />}
					</Routes>
					<MyFooter />
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
