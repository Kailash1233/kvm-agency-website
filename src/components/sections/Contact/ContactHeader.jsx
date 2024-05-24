import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

function ContactHeader({ title, description, sprite, buttonText }) {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-metallic-sunburst">
            <div className="flex">
                <div className="z-10 flex max-w-2xl flex-col gap-5 p-6 text-white/90 sm:p-10">
                    <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
                    <p className="text-white/75">{description}</p>
                    <a
                        href="#contact_form"
                        className={cn(
                            // element
                            "relative",
                            "inline-flex w-fit items-center justify-center",
                            "font-roboto font-semibold tracking-wider",
                            "group",
                            // element::after
                            "after:absolute",
                            "after:h-full after:w-[125%]",
                            "after:rounded-lg",
                            "after:py-5",
                            "after:bg-gradient-to-b after:from-ghost-white/5 after:to-satin-sheen-gold/25 after:opacity-0",
                            "after:transition",
                            // element::after::hover
                            "hover:after:opacity-100"
                        )}
                    >
                        <span className="mr-1">{buttonText}</span>
                        <div className="transition group-hover:translate-x-1">
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </a>
                </div>
                <img
                    src={sprite.src}
                    alt={sprite.alt}
                    className="absolute right-0 mr-0 mt-0 max-w-lg opacity-5 md:mr-8 md:mt-8 md:opacity-20 lg:opacity-100"
                />
            </div>
        </div>
    );
}

ContactHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    sprite: PropTypes.object,
    buttonText: PropTypes.string,
};

export default ContactHeader;
