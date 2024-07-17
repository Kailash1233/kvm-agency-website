import HeroBackdrop from "./HeroBackdrop";
import ButtonDiscover from "./ButtonDiscover";
import HeroParagraph from "./HeroParagraph";
import HeroTagline from "./HeroTagline";
import HeroImage from "./HeroImage";

import { SECTION_HERO as SectionContent } from "../../../constants/AppContent.js";
import { useEffect, useState } from "react";

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = SectionContent.imageShowcase;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length,
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

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
                    img={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    href={images[currentImageIndex].href}
                />
            </div>
        </section>
    );
}

export default HeroSection;
