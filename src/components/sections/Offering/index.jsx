import PropTypes from "prop-types";

import OfferItem from "./OfferItem.jsx";

import { SECTION_OFFERING as SectionContent } from "../../../constants/AppContent.js";

function OfferingSection({ id }) {
    return (
        <section className="max-container relative z-30 mb-16 mt-16" id={id}>
            <ul className="grid grid-cols-1 gap-8 text-darken-jungle-green lg:grid-cols-2 lg:gap-6">
                {SectionContent.map((content) => (
                    <OfferItem
                        key={content.offer}
                        sprite={content.sprite}
                        offer={content.offer}
                    >
                        {content.description}
                    </OfferItem>
                ))}
            </ul>
        </section>
    );
}

OfferingSection.propTypes = {
    id: PropTypes.string,
};

export default OfferingSection;
