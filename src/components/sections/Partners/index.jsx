import PropTypes from "prop-types";

import SectionHeader from "../../ui/Section/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import PartnerLogo from "./PartnerLogo.jsx";

import { cn } from "../../../lib/utils.js";

import { SECTION_PARTNERS as SectionContent } from "../../../constants/AppContent.js";

function PartnersSection({ id }) {
    return (
        <section className="overflow-hidden rounded-[75px] bg-white/90" id={id}>
            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-32">
                <div className="flex flex-col gap-16 text-center">
                    <SectionHeader
                        title={SectionContent.heading.title}
                        heading={SectionContent.heading.heading}
                        className="max-w-5xl"
                    >
                        {SectionContent.heading.description}
                    </SectionHeader>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="w-full select-none"
                    >
                        {SectionContent.lists.map((_, index) => (
                            <SwiperSlide
                                key={`partnerSwiperSlide$${index}`}
                                className="pb-12"
                            >
                                <div className="flex flex-wrap items-center justify-evenly gap-16 px-1.5 sm:px-24">
                                    {SectionContent.lists[index].map(
                                        (partner) => (
                                            <PartnerLogo
                                                key={partner.name
                                                    .toLowerCase()
                                                    .split(" ")
                                                    .join("-")}
                                                name={partner.name}
                                                img={partner.logo}
                                                className={cn({
                                                    [partner.additionalClasses]:
                                                        partner.additionalClasses !==
                                                        null,
                                                })}
                                            />
                                        ),
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

PartnersSection.propTypes = { id: PropTypes.string };

export default PartnersSection;
