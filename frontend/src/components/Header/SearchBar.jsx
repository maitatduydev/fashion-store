import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <>
            <div className="w-100 flex items-center gap-3 px-5 py-3 rounded-lg bg-[#F6F6F6]">
                <button>
                    <Search className="text-[#807D7E] cursor-pointer" size={20} />
                </button>
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full outline-none text-[#807D7E] placeholder:text-[15px]"
                />
            </div>
        </>
    );
}
