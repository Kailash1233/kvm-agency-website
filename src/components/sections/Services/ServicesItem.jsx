import PropTypes from "prop-types";

function ServicesItem({ service, img, alt, className, children }) {
    return (
        <div className={`z-10 flex w-full justify-center ${className}`}>
            <div className="flex max-w-full flex-col items-center gap-5 px-5 text-center sm:max-w-[15rem] sm:px-0">
                <img src={`${img}`} alt={alt} className="w-20 sm:w-16" />
                <h3 className="font-semibold">{service}</h3>
                <p className="leading-relaxed text-darken-jungle-green/75 md:text-sm">
                    {children}
                </p>
            </div>
        </div>
    );
}

ServicesItem.propTypes = {
    service: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default ServicesItem;
