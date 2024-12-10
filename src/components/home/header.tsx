import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className="bg-primaryColor min-w-full sticky top-0 z-10">
                <nav className="md:flex md:justify-between md:items-center">
                    <div className="flex justify-between">
                        <div className="h-16 ml-2 md:ml-18">
                            <a href="#">
                                <img
                                    src="/src/images/zenn.webp"
                                    alt="zenn-logo"
                                    className="bg-cover h-full"
                                />
                            </a>
                        </div>

                        <button
                            className="md:hidden text-secondaryColor font-semibold text-2xl mr-6"
                            onClick={toggleMenu}
                        >
                            ☰
                        </button>
                    </div>
                    <div
                        className={`flex flex-col items-center transition-all duration-300 ease-in-out transform ${
                            isMenuOpen
                                ? 'max-h-screen opacity-100 scale-100'
                                : 'max-h-0 opacity-0 scale-95'
                        } overflow-hidden md:flex md:max-h-none md:opacity-100 md:scale-100`}
                    >
                        <ul className="ml-6 md:flex md:flex-row md:gap-8 md:mr-8">
                            <li className="mt-5 mb-5">
                                <Link to="/">
                                    <button className="text-secondaryColor font-semibold underline md:no-underline md:text-black md:px-6 md:py-2 md:bg-thirdColor md:rounded-3xl md:hover:bg-fifthColor md:active:bg-fourthColor">
                                        Home
                                    </button>
                                </Link>
                            </li>
                            <li className="mb-5 md:mb-0 md:flex md:items-center">
                                <Link to="/MediTimer">
                                    <button className="text-secondaryColor font-semibold underline md:no-underline md:text-black md:px-6 md:py-2 md:bg-thirdColor  md:rounded-3xl md:hover:bg-fifthColor md:active:bg-fourthColor">
                                        Timer
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
