import { Heart, UserRound, ShoppingCart } from "lucide-react";

export default function Actions() {
    return (
        <>
            <div>
                <ul className="flex items-center gap-2 sm:gap-3">
                    <li>
                        <button className="cursor-pointer p-1">
                            <Heart className="w-6 h-6 text-[#2A2F2F] hover:fill-black" />
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer p-1">
                            <UserRound className="w-6 h-6 text-[#2A2F2F] hover:fill-black" />
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer p-1">
                            <ShoppingCart className="w-6 h-6 text-[#2A2F2F] hover:fill-black" />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
