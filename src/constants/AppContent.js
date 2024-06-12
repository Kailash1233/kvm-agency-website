// ========================================================
// * HEADER & NAVIGATION BAR
// ========================================================

/* Assets Import */
import brandIcon from "../assets/sprites/logo-crown.svg";
import brandText from "../assets/sprites/logo-text.svg";

/* Content */
const HEADER = {
    topBar: {
        enable: true,
        text: "[New] Announcing the launch of KVM CMart - Your A-Z One-Stop Solution for Construction Raw Materials! ->",
        // href: "https://mediaindonesia.com/humaniora/560191/pt-dksi-luncurkan-solusi-peralatan-telemedice-teranyar",
    },
    brand: {
        icon: {
            src: brandIcon,
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        text: {
            enable: true,
            src: brandText,
            alt: 'A black and white image of the letters "DKSI" written in a bold font on a plain background.',
        },
    },
    links: [
        {
            name: "Services",
            href: "#services",
        },
        {
            name: "Company",
            href: "#company",
        },
        {
            name: "Partners",
            href: "#partners",
        },
    ],
    highlightLink: {
        name: "Contact",
        href: "#contact",
    },
};

// ========================================================
// * FOOTER
// ========================================================

/* Assets Import */
import brandTextWhite from "../assets/sprites/logo-text-white.svg";

/* Content */
const FOOTER = {
    brand: {
        icon: {
            src: brandIcon,
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        text: {
            enable: true,
            src: brandTextWhite,
            alt: 'A black and white image of the letters "DKSI" written in a bold font on a plain background.',
        },
        description:
            "At KVM Agencies, we believe in the transformative power of collaboration.",
    },
    socialButton: [
        {
            platform: "instagram",
            link: "https://www.instagram.com/naveen__1_6__/",
        },
        {
            platform: "linkedin-box",
            link: "",
        },
        {
            platform: "facebook-box",
            link: "",
        },
    ],
    section: {
        contact: {
            title: "Contact",
            list: [
                {
                    type: "mail-open",
                    at: "kvmagencies@gmail.com",
                },
                {
                    type: "phone",
                    at: "+91 7947124552",
                },
                {
                    type: "smartphone",
                    at: "+91 91507 51905",
                },
            ],
        },
        hours: {
            title: "Working Hours",
            text: ["Mon - Sat 8:30 am - 7:30 pm", "Sun: Closed"],
        },
        address: [
            {
                title: "Office Address",
                text: [
                    "No.52, Kanchipuram High Road, Natham Chengalpattu, Chengalpattu - 603002 (Periya Natham,)",
                ],
            },
            {
                title: "2 Office Address",
                text: [
                    "Trichy Highway Nathem (Kanchipuram Hwy",
                    "By Pass Junction, Chengalpattu",
                    "Tamil Nadu 603002",
                ],
            },
        ],
    },
    copyright: {
        logo: {
            enable: true,
            src: brandIcon,
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        name: "KVM Agencies",
        text: "Copyrights © 2024. All rights reserved.",
    },
};

// ========================================================
// * SECTION: HERO
// ========================================================

/* Assets Import */
import imageShowcase from "../assets/img/KVM.jpeg";

/* Content */
const SECTION_HERO = {
    tagline: ["We will be your Beam", "for your Dream"],
    paragraph:
        "We provide a comprehensive range of top-quality raw materials for all your construction needs. From cement and sand to bricks and steel, we ensure you have everything you need to build strong, durable structures. With a commitment to quality and customer satisfaction, we are your reliable partner in construction.",
    linkText: "Discover more about us",
    imageShowcase: {
        src: imageShowcase,
        alt: "Muhammad Yasin, CEO of DKSI, achieved Diktistek's Best Partner award.",
        href: "https://soloaja.co/read/muhammad-yasin-pengusaha-muda-semarang-raih-anugerah-mitra-terbaik-diktiristek",
    },
};

// ========================================================
// * SECTION: OFFER
// ========================================================

/* Assets Import */
import offeringSprite1 from "../assets/sprites/offering/talented-team.svg";
import offeringSprite2 from "../assets/sprites/offering/online-support.svg";
import offeringSprite3 from "../assets/sprites/offering/best-consulting.svg";
import offeringSprite4 from "../assets/sprites/offering/reliable-partner.svg";

/* Content */
const SECTION_OFFERING = [
    {
        sprite: offeringSprite1,
        offer: "Unmatched Quality with Our Premium Construction Materials",
        description:
            "Experience the difference that quality makes with our premium construction materials. We provide the foundation for your success by ensuring that every material we supply meets the highest standards of durability and performance.",
    },
    {
        sprite: offeringSprite2,
        offer: "Building Dreams with Reliable Supplies",
        description:
            "Your dreams deserve the best, and we are here to make them a reality. Our reliable supply chain ensures that you receive the materials you need, when you need them, so your projects can progress smoothly without any interruptions.",
    },
    {
        sprite: offeringSprite3,
        offer: "Excellence in Every Grain: Superior Raw Materials",
        description:
            "From the finest grains of sand to the sturdiest bricks and steel, we offer superior raw materials that are the backbone of any construction project. Trust us to provide the excellence you need for robust and enduring structures.",
    },
    {
        sprite: offeringSprite4,
        offer: "Partnering for Progress: Your Success is Our Mission",
        description:
            "We believe in partnering for progress. Our mission is to support your construction endeavors with high-quality materials and exceptional service, ensuring your success is built on a solid foundation. Together, we can achieve greatness.",
    },
];

// ========================================================
// * SECTION: OVERVIEW
// ========================================================

const SECTION_OVERVIEW = [
    {
        index: "clients",
        count: 1000,
        indicator: "+",
        info: "Satisfying clients with the exceptional services",
    },
    {
        index: "solutions",
        count: 600,
        indicator: "+",
        info: "Successful Projects Supplied with Top-Quality Materials",
    },
    {
        index: "partners",
        count: 70,
        indicator: "+",
        info: "Trusted partners empowering our success",
    },
    {
        index: "response",
        count: 99.9,
        indicator: "%",
        info: "Fast response & always at your service",
    },
];

// ========================================================
// * SECTION: SERVICES
// ========================================================

/* Assets Import */
import servicesSprite1 from "../assets/sprites/services/smartclass.svg";
import servicesSprite2 from "../assets/sprites/services/plantation.svg";
import servicesSprite3 from "../assets/sprites/services/consultancy.svg";
import servicesSprite4 from "../assets/sprites/services/education.svg";

import servicesIllustration from "../assets/illustration/section-services.svg";

/* Content */
const SECTION_SERVICES = {
    header: {
        title: "Services that %we provide",
        heading: "Discover the range of exceptional services we offer.",
        description:
            "At KVM Agencies, we are dedicated to delivering excellence every step of the way. Our comprehensive services are designed to meet all your construction material needs with precision and reliability:",
    },
    services: [
        {
            name: "Bulk Supply",
            description:
                "Ensure you have all the materials you need with our large volume orders, delivered directly to your site.",
            img: {
                src: servicesSprite1,
                alt: "",
            },
        },
        {
            name: "Customized Orders",
            description:
                "Tailored solutions to meet the specific requirements of your unique projects.",
            img: {
                src: servicesSprite2,
                alt: "",
            },
        },
        {
            name: "On-Time Delivery",
            description:
                "Reliable and timely delivery schedules to keep your construction projects on track.",
            img: {
                src: servicesSprite3,
                alt: "",
            },
        },
        {
            name: "Quality Assurance",
            description:
                "Rigorous quality checks to guarantee that you receive only the best materials.",
            img: {
                src: servicesSprite4,
                alt: "",
            },
        },
    ],
    illustration: {
        src: servicesIllustration,
        alt: "Two men wearing hard hats and safety vests are working together on a construction project.",
    },
};

// ========================================================
// * SECTION: COMPANY
// ========================================================

/* Assets Import */
import timelineIcon1 from "../assets/sprites/timeline-icon/timeline1.svg";
import timelineIcon2 from "../assets/sprites/timeline-icon/timeline2.svg";
import timelineIcon3 from "../assets/sprites/timeline-icon/timeline3.svg";
import timelineIcon4 from "../assets/sprites/timeline-icon/timeline4.svg";
import timelineIcon5 from "../assets/sprites/timeline-icon/timeline5.svg";
import timelineIcon6 from "../assets/sprites/timeline-icon/timeline6.svg";
import companyIllustration from "../assets/illustration/section-company.svg";

/* Content */
const SECTION_COMPANY = {
    header: {
        title: "Empowering %Growth Together",
        heading: "KVM Agencies",
        description:
            "Based in Chengalpattu, we have proudly served customers in Chennai and Kanchipuram for the past 20 years. With steady growth and strong partnerships, we focus on delivering quality and ensuring customer satisfaction. Join us as we continue to grow together, turning each project into a success story.",
    },
    // Timestamp presentation limited to 6
    timeline: [
        {
            id: "timeline1",
            icon: {
                src: timelineIcon1,
                alt: "Started Image",
            },
            showcaseImage:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Established in 2002, we embarked on our journey.",
            description:
                "In 2002, we started our journey with the goal of providing premium raw materials to the construction industry and individuals. With a steadfast commitment to excellence and continuous growth, we have dedicated ourselves to serving our valued clients and achieving success within the industry.",
        },
        {
            id: "timeline2",
            icon: {
            src: timelineIcon2,
            alt: "Golden house with a gear icon symbolizing innovation and functionality",
            },
            title: "Partnered with Top Brands to Supply Premium Construction Materials.",
            description: "We have collaborated with industry-leading brands to supply premium construction materials, ensuring superior quality and reliability for our customers.",
            },
            {
            id: "timeline3",
            icon: {
            src: timelineIcon3,
            alt: "Gleaming gold house featuring a square box structure on its rooftop",
            },
            title: "Expanded Our Range to Include High-Quality Cement and Concrete Products.",
            description: "In our journey of growth, we have expanded our offerings to include a wide range of high-quality cement and concrete products, meeting the diverse needs of construction projects.",
            },
            {
            id: "timeline4",
            icon: {
            src: timelineIcon4,
            alt: "Golden building icon, symbolizing elegance and strength",
            },
            title: "Dedicated to Providing Reliable Steel and Reinforcement Materials.",
            description: "Our dedication to excellence extends to providing reliable steel and reinforcement materials, essential for the strength and durability of construction projects.",
            },
            {
            id: "timeline5",
            icon: {
            src: timelineIcon5,
            alt: "Square-shaped brown building with glass windows",
            },
            title: "Ensuring Timely Delivery of Construction Materials.",
            description: "We understand the importance of timely delivery in construction projects. That's why we prioritize efficient logistics to ensure our customers receive their materials when they need them.",
            },
            {
            id: "timeline6",
            icon: {
            src: timelineIcon6,
            alt: "Sophisticated brown and gold building icon, showcasing modern architecture",
            },
            title: "Committed to Customer Satisfaction and Continuous Improvement.",
            description: "Our commitment to customer satisfaction drives us to continuously improve our services and offerings, ensuring that we meet and exceed the expectations of our valued customers.",
            }
    ],
    about: {
        content: {
            heading: "Why %should you% choose us for your %Business%?",
            item: [
                {
                    title: "Always as Professional Partner",
                    description:
                        "We excel in delivering innovative, tailored solutions for your business, ensuring success in the dynamic world of technology.",
                },
                {
                    title: "Proper steps for solutions",
                    description:
                        "We deliver efficient problem-solving with effective steps for optimal business solutions.",
                },
            ],
        },
    },
    illustration: {
        src: companyIllustration,
        alt: "",
    },
};

// ========================================================
// * SECTION: CONTACT
// ========================================================

/* Assets Import */
import headerSprite from "../assets/element/contact-header.svg";
import contactIllustration from "../assets/illustration/section-contact.svg";

/* Content */
const SECTION_CONTACT = {
    header: {
        title: "Have a confusion in Raw Material Selection",
        description:
            "Just contact us without hesitation, we have a team of experts creates some exclusive ways to solve our customer's problems",
        sprite: { src: headerSprite, alt: "" },
        buttonText: "Contact",
    },
    form: {
        header: {
            title: "Get in touch",
            description:
                "How can we assist you? We're here to make a difference!",
        },
        input: [
            {
                id: "firstName",
                label: "First Name",
                autoComplete: "given-name",
                type: "text",
                maxWidth: false,
            },
            {
                id: "lastName",
                label: "Last Name",
                autoComplete: "family-name",
                type: "text",
                maxWidth: false,
            },
            {
                id: "email",
                label: "Email",
                autoComplete: "email",
                type: "email",
                maxWidth: true,
            },
            {
                id: "phoneNumber",
                label: "Phone number",
                autoComplete: "tel",
                type: "tel",
                maxWidth: true,
            },
        ],
    },
    illustration: {
        src: contactIllustration,
        alt: "",
    },
    textArea: {
        id: "message",
        label: "Message",
    },
    submitButtonText: "Let's Talk",
};

// ========================================================
// * SECTION: PARTNERS
// ========================================================

/* Assets Import */
import partnerItem1 from "../assets/partners/dbg-logo.png";
import partnerItem2 from "../assets/partners/maha.jpg";
import partnerItem3 from "../assets/partners/ramco-cement.jpg";
import partnerItem4 from "../assets/partners/sankar-cement.png";
import partnerItem5 from "../assets/partners/ck.png";
import partnerItem6 from "../assets/partners/Agni500D.png";
import partnerItem7 from "../assets/partners/jk.jpg";
import partnerItem8 from "../assets/partners/ambuja.jpg";
import partnerItem9 from "../assets/partners/ars.webp";
import partnerItem10 from "../assets/partners/dell-2.svg";

import partnerItem11 from "../assets/partners/benq-wordmark.svg";
import partnerItem12 from "../assets/partners/samsung.svg";
import partnerItem13 from "../assets/partners/kramer.svg";
import partnerItem14 from "../assets/partners/maxhub.svg";
import partnerItem15 from "../assets/partners/provent.svg";
import partnerItem16 from "../assets/partners/jbl-by-harman-vector-logo.svg";
import partnerItem17 from "../assets/partners/logitech-2-1.svg";
import partnerItem18 from "../assets/partners/lg-electronics.svg";
import partnerItem19 from "../assets/partners/matahari-led.png";
import partnerItem20 from "../assets/partners/Unisign.svg";

import partnerItem21 from "../assets/partners/sennheiser-3.svg";
import partnerItem22 from "../assets/partners/Smart.svg";
import partnerItem23 from "../assets/partners/ZYREX.svg";
import partnerItem24 from "../assets/partners/epson-2.svg";
import partnerItem25 from "../assets/partners/closepay.svg";
import partnerItem26 from "../assets/partners/vmware-1.svg";
import partnerItem27 from "../assets/partners/viewsonic-3.svg";
import partnerItem28 from "../assets/partners/infocus.svg";
import partnerItem29 from "../assets/partners/hewlett-packard-enterprise-logo.svg";
import partnerItem30 from "../assets/partners/commscope.svg";

/* Content */
const SECTION_PARTNERS = {
    heading: {
        title: "Collaborators %in Success",
        heading: "Innovative Partnerships that Drive Success",
        description:
            "At KVM Agencies, we believe in the transformative power of collaboration. We have forged strong alliances with a select group of industry-leading companies to bring the best-in-class solutions to our clients. By leveraging strategic partnerships, we ensure that our clients have access to cutting-edge technologies and innovative solutions that drive their success. Together, we build a future of excellence and innovation.",
    },
    lists: [
        /* Currently 3 slides, 10 items per-slide */
        // * Slide: 1
        [
            {
                name: "Google for Education",
                logo: partnerItem1,
                additionalClasses: null,
            },
            {
                name: "Acer",
                logo: partnerItem2,
                additionalClasses: null,
            },
            {
                name: "Asus",
                logo: partnerItem3,
                additionalClasses: null,
            },
            {
                name: "HP",
                logo: partnerItem4,
                additionalClasses: "p-6",
            },
            {
                name: "Cisco",
                logo: partnerItem5,
                additionalClasses: null,
            },
            {
                name: "Alcatel Lucent",
                logo: partnerItem6,
                additionalClasses: null,
            },
            {
                name: "Brother Indonesia",
                logo: partnerItem7,
                additionalClasses: null,
            },
            {
                name: "APC by Schneider Electric",
                logo: partnerItem8,
                additionalClasses: null,
            },
            {
                name: "Fortinet",
                logo: partnerItem9,
                additionalClasses: null,
            },
            {
                name: "Dell",
                logo: partnerItem10,
                additionalClasses: "p-6",
            },
        ],
        // * Slide: 2
        [
            {
                name: "BENQ",
                logo: partnerItem11,
                additionalClasses: null,
            },
            {
                name: "Samsung",
                logo: partnerItem12,
                additionalClasses: null,
            },
            {
                name: "Kramer",
                logo: partnerItem13,
                additionalClasses: "p-6",
            },
            {
                name: "Maxhub",
                logo: partnerItem14,
                additionalClasses: null,
            },
            {
                name: "Provent",
                logo: partnerItem15,
                additionalClasses: null,
            },
            {
                name: "JBL by Harman",
                logo: partnerItem16,
                additionalClasses: null,
            },
            {
                name: "Logitech",
                logo: partnerItem17,
                additionalClasses: null,
            },
            {
                name: "LG",
                logo: partnerItem18,
                additionalClasses: null,
            },
            {
                name: "Matahari LED",
                logo: partnerItem19,
                additionalClasses: null,
            },
            {
                name: "Unisign",
                logo: partnerItem20,
                additionalClasses: null,
            },
        ],
        // * Slide: 3
        [
            {
                name: "Sennheiser",
                logo: partnerItem21,
                additionalClasses: null,
            },
            {
                name: "Smart",
                logo: partnerItem22,
                additionalClasses: null,
            },
            {
                name: "ZYRX",
                logo: partnerItem23,
                additionalClasses: null,
            },
            {
                name: "Epson",
                logo: partnerItem24,
                additionalClasses: null,
            },
            {
                name: "Closepay",
                logo: partnerItem25,
                additionalClasses: null,
            },
            {
                name: "VMWare",
                logo: partnerItem26,
                additionalClasses: null,
            },
            {
                name: "View Sonic",
                logo: partnerItem27,
                additionalClasses: null,
            },
            {
                name: "In Focus",
                logo: partnerItem28,
                additionalClasses: null,
            },
            {
                name: "Hewlett Packard Enterprise",
                logo: partnerItem29,
                additionalClasses: null,
            },
            {
                name: "Commscope AMP Netconnect",
                logo: partnerItem30,
                additionalClasses: null,
            },
        ],
    ],
};

// ========================================================
// * CONTENT EXPORT
// ========================================================

export {
    HEADER,
    SECTION_HERO,
    SECTION_OFFERING,
    SECTION_OVERVIEW,
    SECTION_SERVICES,
    SECTION_COMPANY,
    SECTION_PARTNERS,
    SECTION_CONTACT,
    FOOTER,
};
