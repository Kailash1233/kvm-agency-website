import PropTypes from "prop-types";

import { cn } from "../../../lib/utils";

function LinkItem({
    title,
    href,
    highlight,
    dropdown,
    dropdownActive,
    onToggle,
    className,
    children,
}) {
    const itemClasses =
        "rounded-none md:rounded-md px-0 md:px-3 py-3.5 md:py-2 font-medium text-darken-jungle-green transition md:hover:bg-gray-200 w-full md:w-fit md:border-none border-b border-slate-200";
    const itemHighlightClasses =
        "text-center rounded-md px-3 py-2 text-white font-medium bg-gradient-to-r from-metallic-sunburst to-satin-sheen-gold w-full md:w-fit relative group";

    return (
        <li
            className={cn(
                "relative md:static",
                ["flex", { "flex-col": dropdown === true }],
                className,
            )}
        >
            {!dropdown ? (
                <a
                    href={href}
                    className={cn({
                        [itemHighlightClasses]: highlight === true,
                        [itemClasses]: !highlight,
                    })}
                >
                    {title}
                    {highlight && (
                        <span className="absolute left-0 top-0 block h-full w-full rounded-md bg-gradient-to-b from-white/25 to-white/10 opacity-0 transition group-hover:opacity-100" />
                    )}
                </a>
            ) : (
                <>
                    <button
                        type="button"
                        onClick={onToggle}
                        className={cn(
                            "inline-flex justify-between md:justify-normal",
                            itemClasses,
                        )}
                    >
                        <span className="mr-1.5">{title}</span>
                        <div
                            className={cn("transition", {
                                "rotate-180": dropdownActive === true,
                            })}
                        >
                            <i
                                className={cn(
                                    "ri-arrow-down-s-line",
                                    [
                                        "text-darken-jungle-green/50",
                                        {
                                            "font-bold text-metallic-sunburst":
                                                dropdownActive === true,
                                        },
                                    ],
                                    "transition-all",
                                )}
                            ></i>
                        </div>
                    </button>
                    {dropdownActive && (
                        <div className="static left-0 top-full w-full md:absolute">
                            {children}
                        </div>
                    )}
                </>
            )}
        </li>
    );
}

LinkItem.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    highlight: PropTypes.bool,
    dropdown: PropTypes.bool,
    dropdownActive: PropTypes.bool,
    onToggle: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default LinkItem;
