import { Search } from "lucide-react";

export default function SearchBar({ compact = false }) {
    return (
        <>
            <div
                className={`w-full flex items-center gap-3 ${compact ? "px-3 py-2" : "px-5.5 py-2"} rounded-lg bg-[#F6F6F6]`}
            >
                <button>
                    <Search className="text-[#807D7E] cursor-pointer" size={20} />
                </button>
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className={`w-70 outline-none text-[#807D7E] placeholder:text-[13px] ${compact ? "text-[14px]" : "text-[15px]"}`}
                />
            </div>
        </>
    );
}
