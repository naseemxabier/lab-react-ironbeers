import { Link } from "react-router-dom"
import home from "../assets/home.png"
function Header() {
    return (
        <div>
            <header>
                <Link to="/"><img src={home} alt="home" /></Link>
            </header>
        </div>
    )
}
export default Header;
