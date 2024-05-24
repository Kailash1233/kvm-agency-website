import PropTypes from "prop-types";
import SpriteGear from "../../ui/Sprites/SpriteGear";

function ServicesSprites({ animate }) {
    return (
        <>
            <SpriteGear
                className={`${animate && "animate-spin-slow"} invisible absolute -bottom-1/4 -left-52 max-w-md text-darken-jungle-green/75 opacity-5 sm:visible lg:max-w-xl`}
            />
            <SpriteGear
                className={`${animate && "animate-spin-reverse-slow"} invisible absolute -right-36 -top-0 mt-8 max-w-md text-darken-jungle-green/75 opacity-5 sm:visible lg:max-w-lg`}
            />
        </>
    );
}

ServicesSprites.propTypes = {
    animate: PropTypes.bool,
};

export default ServicesSprites;
