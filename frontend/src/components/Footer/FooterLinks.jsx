import { Link } from "react-router-dom";
import { footerLinks } from "../../data/footerData";

export default function FooterLinks() {
    return (
        <div className="flex gap-25 items-start">
            {footerLinks.map((section, index) => (
                <div key={index}>
                    <h3 className="text-[#F6F6F6] font-medium mb-4">{section.title}</h3>
                    <ul>
                        {section.list.map((link, linkIndex) => (
                            <li key={linkIndex} className="mb-2.5">
                                <Link
                                    to={link.path}
                                    className="text-[#F6F6F6] text-[14px] hover:text-[#FF6B6B] transition-colors duration-300"
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
