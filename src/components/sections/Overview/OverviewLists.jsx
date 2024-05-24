import PropTypes from "prop-types";

function OverviewLists({ children }) {
    return (
        <ul className="relative grid grid-cols-1 place-items-center gap-10 gap-y-10 rounded-2xl bg-gradient-to-b from-satin-sheen-gold to-metallic-sunburst p-8 text-center text-darken-jungle-green/75 sm:grid-cols-2 md:p-8 lg:grid-cols-4 lg:gap-y-20 lg:p-8 xl:p-10">
            {children}
        </ul>
    );
}

OverviewLists.propTypes = {
    children: PropTypes.node,
};

export default OverviewLists;
