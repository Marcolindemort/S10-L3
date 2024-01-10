import MyGallery from "./MyGallery";

const Home = () => (
	<>
		<MyGallery title={"batman"} category={"Batman Movies"} />
		<MyGallery title={"the%20lord%20of%20the%20rings"} category={"The Lord of The Rings Saga"} />
		<MyGallery title={"star%20wars"} category={"Star Wars Saga"} />
		<MyGallery title={"spider-man"} category={"Spider-Man Movies"} />
	</>
);

export default Home;
