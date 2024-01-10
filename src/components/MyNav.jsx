import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNav = () => (
	<nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#221f1f" }}>
		<div className="container-fluid">
			<a className="navbar-brand" href="#home">
				<img src={logo} style={{ width: "100px", height: "55px" }} alt="logo netflix" />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				{/*<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link fw-bold text-light" href="#home">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link fw-bold text-light" href="#tv-show">
							TV Shows
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link fw-bold text-light" href="#home">
							Movies
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link fw-bold text-light" href="#home">
							Recently Added
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link fw-bold text-light" href="#my-list">
							My List
						</a>
					</li>
				</ul>*/}
				<Nav className="me-auto mb-2 mb-lg-0">
					<NavLink to="/" className="nav-link text-light">
						Home
					</NavLink>
					<NavLink to="/tv-shows" className="nav-link text-light">
						TV Shows
					</NavLink>
				</Nav>
				<div className="d-flex align-items-center">
					<FontAwesomeIcon icon={faSearch} className="icons" />
					<div id="kids" className="fw-bold">
						KIDS
					</div>
					<FontAwesomeIcon icon={faBell} className="icons" />
					<FontAwesomeIcon icon={faCircleUser} className="icons" />
				</div>
			</div>
		</div>
	</nav>
);
export default MyNav;
