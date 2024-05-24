import PropTypes from "prop-types";

import { cn } from "../../../lib/utils";

function SubmitButton({ textButton, onSubmit }) {
    return (
        <button
            type="submit"
            onClick={onSubmit}
            className={cn(
                // element
                "relative",
                "block",
                "w-full",
                "rounded-md",
                "px-3.5 py-2.5",
                "bg-gradient-to-bl from-satin-sheen-gold to-metallic-sunburst",
                "text-center text-sm font-semibold text-white",
                "shadow-sm transition-colors",
                // element::hover::after
                "hover:after:opacity-100",
                // element::focus-visible
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500",
                // element::after
                "after:absolute after:left-0 after:top-0 after:bg-ghost-white/15",
                "after:h-full after:w-full",
                "after:opacity-0",
                "after:transition",
            )}
        >
            {textButton}
        </button>
    );
}

SubmitButton.propTypes = {
    textButton: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default SubmitButton;
