import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const footerLinks = [
    {
        title: "Need Help",
        list: [
            {
                label: "Contact Us",
                path: "/contact-us",
            },
            {
                label: "Track Order",
                path: "/track-order",
            },
            {
                label: "Returns & Refunds",
                path: "/returns-refunds",
            },
            {
                label: "FAQ",
                path: "/faq",
            },
            {
                label: "Careers",
                path: "/careers",
            },
        ],
    },
    {
        title: "Company",
        list: [
            {
                label: "About Us",
                path: "/about-us",
            },
            {
                label: "Media",
                path: "/media",
            },
        ],
    },
    {
        title: "More Info",
        list: [
            {
                label: "Term and Conditions",
                path: "/terms-conditions",
            },
            {
                label: "Privacy Policy",
                path: "/privacy-policy",
            },
            {
                label: "Shipping Policy",
                path: "/shipping-policy",
            },
        ],
    },
    {
        title: "Location",
        list: [
            {
                label: "United States",
                path: "/location/united-states",
            },
            {
                label: "Canada",
                path: "/location/canada",
            },
            {
                label: "United Kingdom",
                path: "/location/united-kingdom",
            },
            {
                label: "Australia",
                path: "/location/australia",
            },
        ],
    },
];

export const socialLinks = [
    {
        label: "Facebook",
        path: "https://facebook.com",
        icon: faFacebookF,
    },
    {
        label: "Instagram",
        path: "https://instagram.com",
        icon: faInstagram,
    },
    {
        label: "Twitter",
        path: "https://twitter.com",
        icon: faTwitter,
    },
    {
        label: "LinkedIn",
        path: "https://linkedin.com",
        icon: faLinkedinIn,
    },
];
