import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { useState } from "react";
import {BurguerMenu} from "./BurguerMenu";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container mx-auto flex justify-between items-center">
            <BurguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
                <li className="inline-block">
                    <Link to="/category/smartphones" className="hover:text-orange-500">Celulares</Link>
                </li>
                <li className="inline-block">
                    <Link to="/category/computers" className="hover:text-orange-500">Computadoras</Link>
                </li>
                <li className="inline-block">
                    <Link to="/category/accesories" className="hover:text-orange-500">Accesorios</Link>
                </li>
            </ul>
            <CartWidget />
            {/* <BurguerMenu /> */}

        </nav>
    );
}
