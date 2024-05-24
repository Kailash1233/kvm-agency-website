import PropTypes from "prop-types";

import OverviewLists from "./OverviewLists";
import OverviewItem from "./OverviewItem";

import { SECTION_OVERVIEW as SectionContent } from "../../../constants/AppContent.js";

function OverviewSection({ id }) {
    return (
        <section
            className="overflow-hidden rounded-t-[75px] bg-white py-16"
            id={id}
        >
            <div className="max-container">
                <OverviewLists>
                    {SectionContent.map((content) => (
                        <OverviewItem
                            key={content.index}
                            count={content.count}
                            indicator={content.indicator}
                            info={content.info}
                        />
                    ))}
                </OverviewLists>
            </div>
        </section>
    );
}

OverviewSection.propTypes = { id: PropTypes.string };

export default OverviewSection;
