
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="*">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}