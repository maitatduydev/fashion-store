import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../data/footerData";
import { Link } from "react-router-dom";

export default function FooterSocial() {
    return (
        <div className="flex gap-5">
            {socialLinks.map((item) => (
                <Link
                    to={item.path}
                    key={item.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F6F6F6] text-[#191919] hover:text-[#FF6B6B] transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={item.icon} className="text-[20px]" />
                </Link>
            ))}
        </div>
    );
}
