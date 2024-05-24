import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

function FooterSection({ title, className, children }) {
    return (
        <>
            <h4
                className={cn(
                    "py-3.5 font-semibold uppercase tracking-wider",
                    className,
                )}
            >
                {title}
            </h4>
            {children}
        </>
    );
}

FooterSection.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default FooterSection;
