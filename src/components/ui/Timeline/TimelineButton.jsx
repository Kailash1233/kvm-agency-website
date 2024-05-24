import PropTypes from "prop-types";

import { useSwiper } from "swiper/react";

import { cn } from "../../../lib/utils";

function TimelineButton({ icon, altIcon, active, onSelect, targetSlide }) {
    const swiper = useSwiper();

    return (
        <button
            type="button"
            onClick={() => {
                swiper.slideTo(targetSlide, 500);
                onSelect();
            }}
            className={cn(
                // element
                "relative z-10",
                "flex items-center justify-center",
                "h-12 w-12 max-w-full sm:h-14 sm:w-14 md:h-16 md:w-16",
                "rounded-lg",
                "p-1.5",
                "bg-ghost-white",
                "text-2xl font-bold text-white",
                "select-none transition-transform",
                "group",
                // element::hover
                { "hover:-translate-y-1.5": active === false },
                // element::after
                "after:absolute",
                "after:h-full after:w-full ",
                "after:bg-transparent",
                "after:transition",
                // element::after::hover
                { "hover:after:bg-ghost-white/25": active == false },
            )}
        >
            <img
                src={icon}
                alt={altIcon}
                className={cn(
                    // element
                    { "opacity-80 grayscale transition": active === false },
                    { "opacity-100": active === true },
                    // element::hover
                    "group-hover:opacity-100 group-hover:grayscale-0",
                )}
            />
        </button>
    );
}

TimelineButton.propTypes = {
    icon: PropTypes.string,
    altIcon: PropTypes.string,
    active: PropTypes.bool,
    onSelect: PropTypes.func,
    targetSlide: PropTypes.number,
};

export default TimelineButton;
