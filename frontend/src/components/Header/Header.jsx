import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Actions from "./Actions";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="py-2 md:py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-4">
                    <Logo />
                </div>

                <div className="hidden md:flex md:items-center md:justify-center flex-1">
                    <Navigation />
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                    <div className="hidden lg:block">
                        <SearchBar />
                    </div>

                    <div className="hidden md:block">
                        <Actions />
                    </div>

                    <button
                        className="lg:hidden p-2"
                        onClick={() => setOpen(!open)}
                        aria-label="menu"
                    >
                        <Menu className="w-6 h-6 cursor-pointer" />
                    </button>
                </div>
            </div>

            {open && (
                <div className="fixed top-[55px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="mb-4">
                            <SearchBar compact />
                        </div>

                        <div className="md:hidden">
                            <Navigation />
                        </div>

                        <div className="mt-4 md:hidden">
                            <Actions />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
