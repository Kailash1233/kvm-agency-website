import PropTypes from "prop-types";

function HeroParagraph({ children }) {
    return (
        <p className="text-xl">
            {children}
        </p>
    );
}

HeroParagraph.propTypes = {
    children: PropTypes.node,
};

export default HeroParagraph;
