import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

function SectionHeader({ title, heading, className, children }) {
    const titleBuilder = title.split("%");

    return (
        <div
            className={cn(
                "flex flex-col gap-8",
                "mx-auto",
                "px-5",
                "text-center",
                className,
            )}
        >
            <h1 className="text-4xl font-semibold text-darken-jungle-green">
                {titleBuilder[0]}
                {titleBuilder[1] && (
                    <>
                        <span className="font-bold text-satin-sheen-gold">
                            {titleBuilder[1]}
                        </span>
                        {titleBuilder[2] && titleBuilder[2]}
                    </>
                )}
            </h1>
            <div className="flex flex-col gap-6 opacity-75">
                <h2 className="text-xl font-medium">{heading}</h2>
                <p className="leading-loose">{children}</p>
            </div>
        </div>
    );
}

SectionHeader.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default SectionHeader;
