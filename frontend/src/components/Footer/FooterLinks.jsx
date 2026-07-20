import { Link } from "react-router-dom";
import { footerLinks } from "../../data/footerData";

export default function FooterLinks() {
    return (
        <div className="flex flex-col gap-8 xs:grid xs:grid-cols-2 xs:gap-10 sm:grid-cols-3 sm:gap-12 md:grid-cols-4 md:gap-15 items-start">
            {footerLinks.map((section, index) => (
                <div key={index} className="min-w-0">
                    <h3 className="text-[#F6F6F6] font-medium mb-4 text-[15px] sm:text-[17px] md:text-[19px]">
                        {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                        {section.list.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <Link
                                    to={link.path}
                                    className="text-[#F6F6F6] text-[13px] sm:text-[14px] md:text-[15px] hover:text-[#FF6B6B] transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
