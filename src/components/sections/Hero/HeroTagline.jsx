import PropTypes from "prop-types";

function HeroTagline({ firstTagline, secondTagline }) {
    return (
        <h1 className="font-title text-5xl font-extrabold leading-tight sm:text-6xl sm:leading-tight">
            {firstTagline}{" "}
            <span className="text-yellow-100">{secondTagline}</span>
        </h1>
    );
}

HeroTagline.propTypes = {
    firstTagline: PropTypes.string,
    secondTagline: PropTypes.string,
};

export default HeroTagline;
