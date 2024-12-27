import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white z-50 mb-4 fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold">
                            TheLadder Assignment
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="hover:text-gray-300">
                            SectionA
                        </Link>
                        <Link to="/sectionB" className="hover:text-gray-300">
                            SectionB
                        </Link>
                        <Link to="/sectionC" className="hover:text-gray-300">
                            SectionC
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                            onClick={toggleMenu}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white px-4 py-2 space-y-2">
                    <Link to="/" className="block hover:text-gray-300">
                        SectionA
                    </Link>
                    <Link to="/sectionB" className="block hover:text-gray-300">
                        SectionB
                    </Link>
                    <Link to="/sectionC" className="block hover:text-gray-300">
                        SectionC
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;
