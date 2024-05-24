import PropTypes from "prop-types";

function Copyright({ logo, name, text }) {
    return (
        <div className="flex flex-col items-center gap-3.5 text-white/90 sm:flex-row">
            {logo && logo !== "" ? (
                <img src={logo} alt="Crown" className="h-8 grayscale" />
            ) : undefined}
            <div className="flex flex-col gap-0.5 text-center opacity-50 sm:text-left">
                <span className="text-sm font-medium uppercase tracking-wide">
                    {name}
                </span>
                <span className="text-xs">{text}</span>
            </div>
        </div>
    );
}

Copyright.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
};

export default Copyright;
