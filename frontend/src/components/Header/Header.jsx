import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Actions from "./Actions";

export default function Header() {
    return (
        <header className="py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Logo />
                {/* Navigation */}
                <Navigation />
                {/* Search Bar */}
                <SearchBar />
                {/* Action Items */}
                <Actions />
            </div>
        </header>
    );
}
