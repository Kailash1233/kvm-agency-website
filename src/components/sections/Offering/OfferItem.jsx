import PropTypes from "prop-types";

function OfferItem({ sprite, offer, children }) {
    return (
        <li className="flex flex-col items-center gap-8 rounded-2xl border-gray-100 p-2 lg:flex-row lg:p-6 xl:p-10">
            <img src={sprite} alt="" className="w-20" />
            <div className="flex flex-col gap-3.5">
                <h4 className="text-lg font-semibold">{offer}</h4>
                <p>{children}</p>
            </div>
        </li>
    );
}

OfferItem.propTypes = {
    sprite: PropTypes.string,
    offer: PropTypes.string,
    children: PropTypes.node,
};

export default OfferItem;
