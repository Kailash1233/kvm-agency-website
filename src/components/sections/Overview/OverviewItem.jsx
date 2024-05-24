import PropTypes from "prop-types";

function OverviewItem({ count, indicator, info }) {
    return (
        <li className="flex max-w-60 flex-col gap-2.5 rounded-md px-2 py-5 transition">
            <h1 className="text-5xl font-extrabold text-yellow-100">
                {count}
                {indicator}
            </h1>
            <p className="text-white/75">{info}</p>
        </li>
    );
}

OverviewItem.propTypes = {
    count: PropTypes.number,
    indicator: PropTypes.string,
    info: PropTypes.string,
};

export default OverviewItem;
