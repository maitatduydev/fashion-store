import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function CategoryCard(props) {
    const { image, title, path } = props;
    return (
        <div className="w-[calc(25%-50px)]">
            <Link to={path}>
                <img
                    src={image}
                    alt={title}
                    className="aspect-270/390 w-full object-cover rounded-xl"
                />
                <div className="flex justify-between mt-4">
                    <div>
                        <h3 className="text-[#191919] text-[17px] font-medium">{title}</h3>
                        <p className="mt-1 text-[#7F7F7F] text-[14px] font-medium">Explore Now!</p>
                    </div>
                    <MoveRight />
                </div>
            </Link>
        </div>
    );
}
