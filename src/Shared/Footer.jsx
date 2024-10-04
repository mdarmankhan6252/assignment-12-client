import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-around gap-5 bg-pink-100 py-12">
            <nav className="text-lg">
                <ul className="flex h-full flex-wrap items-center justify-center gap-3">
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </ul>
            </nav>
            <nav className="text-lg">
                <ul className="flex h-full flex-wrap items-center justify-center gap-5">
                    <Link to='/'>
                        <FaFacebook className="size-6 fill-current text-blue-500" />
                    </Link>
                    <Link to='/'>
                        <FaInstagram className="size-6 fill-current text-pink-500" />
                    </Link>
                    <Link to='/'>
                        <FaLinkedin className="size-6 fill-current text-blue-500" />
                    </Link>
                    
                </ul>
            </nav>
            <aside className="text-center text-sm">
                <p>&copy; 2024 - All Rights Reserved Arman</p>
            </aside>
        </footer>
    );
};

export default Footer;