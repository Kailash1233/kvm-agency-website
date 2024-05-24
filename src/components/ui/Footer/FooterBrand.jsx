import PropTypes from "prop-types";
import FooterSocialButton from "./FooterSocialButton";

function FooterBrand({
    logoIcon,
    altLogoIcon,
    enableLogoText,
    logoText,
    altLogoText,
    enableSocialButton,
    socialButton,
    children,
}) {
    return (
        <div className="flex flex-col items-center gap-5 px-0 sm:items-start sm:px-10 md:px-0">
            <div className="flex items-center gap-3.5">
                <img src={logoIcon} alt={altLogoIcon} className="w-10" />
                {enableLogoText && (
                    <img src={logoText} alt={altLogoText} className="w-16" />
                )}
            </div>
            <p className="text-center text-sm opacity-50 sm:text-left">
                {children}
            </p>
            {enableSocialButton && (
                <ul className="mt-2.5 flex items-center gap-3.5 text-3xl">
                    {socialButton.map((button) => (
                        <FooterSocialButton
                            key={`${button.platform}Brand`}
                            platform={button.platform}
                            link={button.link}
                            bordered
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

FooterBrand.propTypes = {
    logoIcon: PropTypes.string,
    altLogoIcon: PropTypes.string,
    enableLogoText: PropTypes.bool,
    logoText: PropTypes.string,
    altLogoText: PropTypes.string,
    enableSocialButton: PropTypes.bool,
    socialButton: PropTypes.array,
    children: PropTypes.node,
};

export default FooterBrand;
