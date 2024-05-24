import PropTypes from "prop-types";

function Input({ id, type, autoComplete, label, required, className }) {
    return (
        <div className={className}>
            <label
                htmlFor={id}
                className="text-sm font-semibold leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2.5">
                <input
                    type={type}
                    id={id}
                    autoComplete={autoComplete}
                    className="w-full rounded-md border border-slate-300 px-3.5 py-2 text-darken-jungle-green outline-none transition duration-150 placeholder:text-gray-400 focus:border-slate-500 sm:text-sm sm:leading-6"
                    required={required}
                />
            </div>
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
};

export default Input;
