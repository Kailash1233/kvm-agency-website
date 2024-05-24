import PropTypes from "prop-types";
import { useState } from "react";

import TimelineLists from "../../ui/Timeline/TimelineLists";
import TimelineItem from "../../ui/Timeline/TimelineItem";
import TimelineButton from "../../ui/Timeline/TimelineButton";
import TimelineShowcase from "../../ui/Timeline/TimelineShowcase";

import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "../../../lib/utils";
import clsx from "clsx";

function CompanyTimeline({ TimelineContent }) {
    const [activeTimeline, setActiveTimeline] = useState(0);

    function handleSelectTimeline(timelineIndex) {
        setActiveTimeline(timelineIndex);
    }

    function handleSlideChange(activeShowcase) {
        setActiveTimeline(activeShowcase);
    }

    return (
        <Swiper
            className="w-full"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        >
            <TimelineLists slot="container-start">
                {TimelineContent.map((content, index) => (
                    <TimelineItem
                        key={content.id}
                        indicator={clsx({
                            ["START"]: index === 0,
                            ["END"]: index === TimelineContent.length - 1,
                        })}
                        className={cn({
                            ["col-start-2"]: index === 4,
                            ["col-start-3"]: index === 5,
                        })}
                    >
                        <TimelineButton
                            icon={content.icon.src}
                            altIcon={content.icon.alt}
                            active={activeTimeline === index}
                            onSelect={() => handleSelectTimeline(index)}
                            targetSlide={index}
                        />
                    </TimelineItem>
                ))}
            </TimelineLists>
            {TimelineContent.map((content) => (
                <SwiperSlide key={content.id} className="">
                    <TimelineShowcase
                        img={content.icon.src}
                        alt={content.icon.alt}
                        title={content.title}
                    >
                        {content.description}
                    </TimelineShowcase>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

CompanyTimeline.propTypes = {
    TimelineContent: PropTypes.array,
};

export default CompanyTimeline;
