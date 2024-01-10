import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from "react-bootstrap";

const MyActionBar = () => (
	<div className="d-flex justify-content-between">
		<div className="d-flex">
			<h2 className="mb-4">TV Shows</h2>
			<Dropdown className="ms-4 mt-1">
				<DropdownToggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
					Genres
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem href="#comedy">Comedy</DropdownItem>
					<DropdownItem href="#drama">Drama</DropdownItem>
					<DropdownItem href="#thriller">Thriller</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
		<div>
			<FontAwesomeIcon icon={faTh} className="icons" />
			<FontAwesomeIcon icon={faThLarge} className="icons" />
		</div>
	</div>
);

export default MyActionBar;
