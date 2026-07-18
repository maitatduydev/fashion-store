import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
    return (
        <footer className="bg-[#191919] pt-15 pb-10">
            <div className="max-w-6xl mx-auto flex flex-col gap-19.25">
                <FooterLinks />
                <FooterSocial />
                <FooterCopyright />
            </div>
        </footer>
    );
}
