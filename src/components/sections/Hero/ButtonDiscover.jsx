import PropTypes from "prop-types";

function ButtonDiscover({ children }) {
    return (
        <a
            href="#discover"
            className="group mx-auto mt-2.5 w-fit text-xl font-bold uppercase text-white/90"
        >
            <p className="tracking-wider">{children}</p>
            <div className="transition group-hover:translate-y-1">
                <i className="ri-arrow-down-s-line text-2xl"></i>
            </div>
        </a>
    );
}

ButtonDiscover.propTypes = {
    children: PropTypes.node,
};

export default ButtonDiscover;
