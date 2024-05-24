import BreakText from "../Miscellaneous/BreakText.jsx";
import Copyright from "./Copyright.jsx";
import FooterBrand from "./FooterBrand.jsx";
import FooterSection from "./FooterSection.jsx";
import FooterSocialButton from "./FooterSocialButton.jsx";

import clsx from "clsx";

import { FOOTER as FooterContent } from "../../../constants/AppContent.js";

function Footer() {
    return (
        <footer className="bg-darken-jungle-green">
            <div className="mx-auto max-w-7xl divide-y divide-slate-400/15 divide-opacity-25 px-5">
                <div className="grid grid-cols-1 gap-12 px-12 py-12 text-white/90 sm:grid-cols-2 sm:px-0 md:grid-cols-4 md:gap-3.5">
                    <FooterBrand
                        logoIcon={FooterContent.brand.icon.src}
                        altLogoIcon={FooterContent.brand.icon.alt}
                        enableLogoText
                        logoText={FooterContent.brand.text.src}
                        altLogoText={FooterContent.brand.text.alt}
                        enableSocialButton
                        socialButton={FooterContent.socialButton}
                    >
                        {FooterContent.brand.description}
                    </FooterBrand>
                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                        <div className="mx-auto">
                            <FooterSection
                                title={FooterContent.section.contact.title}
                            >
                                <ul className="flex flex-col gap-2 text-sm opacity-50">
                                    {FooterContent.section.contact.list.map(
                                        (contact, index) => (
                                            <li
                                                key={`FooterContactSection$${index}`}
                                                className="flex justify-center gap-2.5 sm:justify-start"
                                            >
                                                <i
                                                    className={`ri-${contact.type}-fill`}
                                                ></i>
                                                <span>{contact.at}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </FooterSection>
                            <FooterSection
                                title={FooterContent.section.hours.title}
                            >
                                <span className="text-sm opacity-50">
                                    <BreakText
                                        textList={
                                            FooterContent.section.hours.text
                                        }
                                    />
                                </span>
                            </FooterSection>
                        </div>
                    </div>
                    <div className="flex flex-col place-items-start items-center text-center sm:items-start sm:text-left md:place-items-end">
                        <div className="mx-auto">
                            <FooterSection
                                title={FooterContent.section.address[0].title}
                            >
                                <address className="text-sm not-italic leading-relaxed opacity-50">
                                    <BreakText
                                        textList={
                                            FooterContent.section.address[0]
                                                .text
                                        }
                                    />
                                </address>
                            </FooterSection>
                        </div>
                    </div>
                    <div className="flex flex-col place-items-start items-center text-center sm:items-start sm:text-left md:place-items-end">
                        <div className="mx-auto md:mx-0">
                            <FooterSection
                                title={FooterContent.section.address[1].title}
                            >
                                <address className="text-sm not-italic leading-relaxed opacity-50">
                                    <BreakText
                                        textList={
                                            FooterContent.section.address[1]
                                                .text
                                        }
                                    />
                                </address>
                            </FooterSection>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
                    <Copyright
                        logo={clsx({
                            [FooterContent.copyright.logo.src]:
                                FooterContent.copyright.logo.enable,
                        })}
                        name={FooterContent.copyright.name}
                        text={FooterContent.copyright.text}
                    />
                    <ul className="flex gap-5 text-3xl text-white/90">
                        {FooterContent.socialButton.map((button) => (
                            <FooterSocialButton
                                key={`${button.platform}Bottom`}
                                platform={button.platform}
                                link={button.link}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
