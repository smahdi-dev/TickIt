import { Link } from "react-router-dom";
import homeIcon from '../../assets/svg/icon-home.svg'
import settingIcon from '../../assets/svg/icon-setting.svg'

const Footer = () => {
	return (
		<footer
			className="
            fixed
            bottom-0 
            left-0 
            right-0
            h-16
            py-10
            bg-slate-300

        "
		>
			<nav className="h-full">
				<ul className="
                    h-full
                    flex
                    justify-around
                    items-center
                ">
					<li>
						<Link to="/home">
                            <img src={homeIcon} alt="home icon" />
                        </Link>
					</li>
					<li>
						<Link to="/setting">
                        <img src={settingIcon} alt="setting icon" />
                        </Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
