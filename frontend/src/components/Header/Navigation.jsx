import { NavLink } from "react-router-dom";
import { navItems } from "../../data/navbarData";

export default function Navigation() {
    return (
        <>
            <nav>
                <ul className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative pb-2 font-medium 
                                        after:absolute 
                                        after:left-0 
                                        after:bottom-0
                                        after:h-0.5 after:w-full
                                        after:origin-left
                                        after:scale-x-0
                                        after:bg-[#3C4242]
                                        after:transition-transform after:duration-300
                                        hover:text-[#3C4242] 
                                        hover:after:scale-x-100 ${
                                            isActive
                                                ? "text-[#3C4242] after:scale-x-100"
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
