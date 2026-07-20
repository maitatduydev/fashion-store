import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../data/footerData";
import { Link } from "react-router-dom";

export default function FooterSocial() {
    return (
        <div className="flex flex-wrap justify-start gap-3 sm:gap-4 lg:gap-5">
            {socialLinks.map((item) => (
                <Link
                    to={item.path}
                    key={item.label}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#F6F6F6] text-[#191919] hover:text-[#FF6B6B] transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={item.icon} className="text-[18px]" />
                </Link>
            ))}
        </div>
    );
}
