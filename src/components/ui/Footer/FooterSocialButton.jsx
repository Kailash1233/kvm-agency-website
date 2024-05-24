import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

function FooterSocialButton({ platform, link, bordered }) {
    return (
        <li>
            <a
                href={link}
                className="opacity-50 transition-opacity hover:opacity-100"
            >
                <i
                    className={cn(`ri-${platform}-fill`, {
                        "rounded-lg border-2 border-white/90 p-1":
                            bordered === true,
                    })}
                ></i>
            </a>
        </li>
    );
}

FooterSocialButton.propTypes = {
    platform: PropTypes.string,
    link: PropTypes.string,
    bordered: PropTypes.bool,
};

export default FooterSocialButton;
