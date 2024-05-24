import PropTypes from "prop-types";

import SectionHeader from "../../ui/Section/SectionHeader";
import ServicesItem from "./ServicesItem.jsx";
import ServicesSprites from "./ServicesSprites.jsx";

import { SECTION_SERVICES as SectionContent } from "../../../constants/AppContent.js";

function ServicesSection({ id }) {
    return (
        <section
            className="overflow-hidden rounded-b-[75px] bg-white/90"
            id={id}
        >
            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-32">
                <ServicesSprites animate />
                <div className="flex flex-col gap-12">
                    <SectionHeader
                        title={SectionContent.header.title}
                        heading={SectionContent.header.heading}
                        className="max-w-2xl"
                    >
                        {SectionContent.header.description}
                    </SectionHeader>
                    <div className="relative grid w-full grid-cols-1 place-content-end gap-x-12 gap-y-12 px-2 sm:grid-cols-2 sm:gap-y-24 sm:px-16">
                        {SectionContent.services.map((content, index) => {
                            return (
                                <ServicesItem
                                    key={content.name.toLowerCase()}
                                    service={content.name}
                                    img={content.img.src}
                                    alt={content.img.alt}
                                    className={
                                        (index + 1) % 2 === 0
                                            ? "md:justify-end"
                                            : "md:justify-start"
                                    }
                                >
                                    {content.description}
                                </ServicesItem>
                            );
                        })}
                        <img
                            src={SectionContent.illustration.src}
                            alt={SectionContent.illustration.alt}
                            className="absolute max-w-xl place-self-center p-0 opacity-5 sm:p-8 sm:opacity-10 md:opacity-20 lg:opacity-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

ServicesSection.propTypes = { id: PropTypes.string };

export default ServicesSection;
