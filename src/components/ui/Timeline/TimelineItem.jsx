import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

function TimelineItem({ indicator, className, children }) {
    const timelineIndicator = ["START", "END"].includes(indicator);
    
    return (
        <li
            className={cn(
                // element
                "md:col-start-auto",
                "relative",
                "flex items-center justify-center",
                "w-full",
                // element::before
                "before:absolute",
                "before:h-0.5 before:w-full",
                "before:bg-slate-200",
                // element::after
                timelineIndicator && [
                    "after:absolute",
                    "after:h-2.5 after:w-2.5",
                    "after:rounded-full",
                    "after:bg-slate-200",
                    { "after:left-0": indicator === "START" },
                    { "after:right-0": indicator === "END" },
                ],
                className,
            )}
        >
            {children}
        </li>
    );
}

TimelineItem.propTypes = {
    indicator: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default TimelineItem;
