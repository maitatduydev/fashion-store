import { Heart, UserRound, ShoppingCart } from "lucide-react";

export default function Actions() {
    return (
        <>
            <div>
                <ul className="flex items-center gap-3">
                    <li>
                        <button className="cursor-pointer">
                            <Heart size={20} className="text-[#2A2F2F] hover:fill-black" />
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer">
                            <UserRound size={20} className="text-[#2A2F2F] hover:fill-black" />
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer">
                            <ShoppingCart size={20} className="text-[#2A2F2F] hover:fill-black" />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
