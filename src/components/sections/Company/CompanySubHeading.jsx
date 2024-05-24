import PropTypes from "prop-types";
import { Fragment } from "react";

function CompanySubHeading({ text }) {
    const textBuilder = text.split("%");
    return (
        <h1 className="text-primary-blue text-4xl font-semibold leading-tight">
            {textBuilder.map((splitText, index) => {
                if (index % 2 === 0) {
                    return (
                        <Fragment key={`companySubHeading$${index}`}>
                            {splitText}
                        </Fragment>
                    );
                } else {
                    return (
                        <span
                            key={`companySubHeading$${index}`}
                            className="font-bold text-satin-sheen-gold"
                        >
                            {splitText}
                        </span>
                    );
                }
            })}
        </h1>
    );
}

CompanySubHeading.propTypes = {
    text: PropTypes.string,
};

export default CompanySubHeading;
