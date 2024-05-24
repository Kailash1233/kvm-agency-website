import PropTypes from "prop-types";

function LinkItemButton({ active, onToggle }) {
    return (
        <button
            onClick={onToggle}
            type="button"
            className="relative ml-3.5 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md p-2 hover:bg-slate-100"
        >
            <div
                className={`h-[3px] w-8/12 rounded-full bg-darken-jungle-green/75 transition ${active ? "absolute rotate-45" : undefined}`}
            />
            <div
                className={`h-[3px] w-full rounded-full bg-darken-jungle-green/75 transition ${active ? "opacity-0" : undefined}`}
            />
            <div
                className={`h-[3px] w-8/12 rounded-full bg-darken-jungle-green/75 transition ${active ? "absolute -rotate-45" : undefined}`}
            />
        </button>
    );
}

LinkItemButton.propTypes = {
    active: PropTypes.bool,
    onToggle: PropTypes.func,
};

export default LinkItemButton;
