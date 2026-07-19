import CategoryCard from "./CategoryCard";
import { womenCategories } from "../../../data/categoryData";
export default function Category({ title, womenCategories }) {
    return (
        <div className="my-25 max-w-7xl mx-auto">
            <h2 className="text-[#191919] text-3xl font-semibold">{title}</h2>
            <div className="mt-14 flex flex-wrap items-center gap-12.5">
                {womenCategories.map((item) => (
                    <CategoryCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        path={item.path}
                    />
                ))}
            </div>
        </div>
    );
}
