import { useEffect, useRef, useState } from "react"
import {navLinks} from "../constants/index.js"
import closeIcon from "../assets/close.svg"
import menuIcon from "../assets/menu.svg"
const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li"
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({ behavior: "smooth" }); // Button fix
                  }}
                >
                    <a href={href} className="nav-li_a"
                        onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef();
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto" ref={navbarRef}>
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Kaloyan
                </a>

                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                    <img src={isOpen ? closeIcon : menuIcon} alt="toggle" className="w-6 h-6"/>
                </button>
                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar