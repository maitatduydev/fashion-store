import { NavLink } from "react-router-dom";
import { navItems } from "../../data/navbarData";

export default function Navigation() {
    return (
        <>
            <nav aria-label="Main navigation">
                <ul className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `block w-full md:w-auto text-left md:text-center py-3 sm:py-2 md:py-0 px-3 md:px-0 text-sm sm:text-base md:text-[14px] relative font-medium
                                        after:absolute after:left-0 after:bottom-0
                                        after:h-0.5 after:w-full after:origin-left
                                        after:scale-x-0 after:bg-[#FF6B6B]
                                        after:transition-transform after:duration-300
                                        hover:text-[#FF6B6B] hover:after:scale-x-100 ${
                                            isActive
                                                ? "text-[#FF6B6B] after:scale-x-100"
                                                : "text-[#807D7E]"
                                        }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
