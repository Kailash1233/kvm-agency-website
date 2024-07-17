import PropTypes from "prop-types";

function HeroImage({ href, img, alt }) {
    return (
        <a href={href} target="_blank" className="w-full">
            <img
                src={`${img}`}
                alt={alt}
                className="w-full rounded-3xl drop-shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
            />
        </a>
    );
}

HeroImage.propTypes = {
    href: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
};

export default HeroImage;
