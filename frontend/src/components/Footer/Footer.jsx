import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
    return (
        <footer className="bg-[#191919] pt-5 pb-5 sm:pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 lg:gap-19.25">
                <FooterLinks />
                <FooterSocial />
                <FooterCopyright />
            </div>
        </footer>
    );
}
