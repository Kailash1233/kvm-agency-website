import PropTypes from "prop-types";

import { cn } from "../../../lib/utils";

function PartnerLogo({ name, img, className }) {
    return (
        <div className="flex aspect-square items-center opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0">
            <img src={img} alt={name} className={cn("w-32", className)} />
        </div>
    );
}

PartnerLogo.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    className: PropTypes.string,
};

export default PartnerLogo;
