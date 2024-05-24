import PropTypes from "prop-types";
import { Fragment } from "react";

function BreakText({ textList }) {
    return (
        <>
            {textList.map((text, index) => (
                <Fragment key={index}>
                    {text}
                    {index + 1 !== textList.length && <br />}
                </Fragment>
            ))}
        </>
    );
}

BreakText.propTypes = {
    textList: PropTypes.array,
};

export default BreakText;
