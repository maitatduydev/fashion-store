import { Link } from "react-router-dom";

export default function NewArrivalCard(props) {
    const { image, title, path } = props;
    return (
        <div className="w-[calc(25%-36px)]">
            <Link to={path}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full inline-block aspect-square rounded-xl object-cover"
                />
                <h3 className="mt-8 text-[20px] text-[#3C4242] font-medium">{title}</h3>
            </Link>
        </div>
    );
}
