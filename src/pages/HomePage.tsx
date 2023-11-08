import addIcon from "../assets/png/icons-add.png";

const HomePage = () => {
	return (
		<main
			className="
            flex flex-col
        "
		>
			<div
				className="
                flex 
                flex-col 
                justify-center 
                items-center
                font-sans
                font-normal 
                text-[#929292]
            "
			>
				<div className="cursor-pointer  flex flex-col items-center">
					<img src={addIcon} alt="add list icon" />
					<div>add list</div>
				</div>
			</div>
			<div></div>
		</main>
	);
};

export default HomePage;
