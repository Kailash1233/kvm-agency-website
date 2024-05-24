import HeroBackdrop from "./HeroBackdrop";
import ButtonDiscover from "./ButtonDiscover";
import HeroParagraph from "./HeroParagraph";
import HeroTagline from "./HeroTagline";
import HeroImage from "./HeroImage";

import { SECTION_HERO as SectionContent } from "../../../constants/AppContent.js";

function HeroSection() {
    return (
        <section className="relative flex h-full w-full">
            <HeroBackdrop />
            <div className="max-container relative mx-auto flex max-w-[52rem] flex-col items-center gap-8 pt-16 text-center text-white">
                <HeroTagline
                    firstTagline={SectionContent.tagline[0]}
                    secondTagline={SectionContent.tagline[1]}
                />
                <HeroParagraph>{SectionContent.paragraph}</HeroParagraph>
                <ButtonDiscover>{SectionContent.linkText}</ButtonDiscover>
                <HeroImage
                    img={SectionContent.imageShowcase.src}
                    alt={SectionContent.imageShowcase.alt}
                    href={SectionContent.imageShowcase.href}
                />
            </div>
        </section>
    );
}

export default HeroSection;
