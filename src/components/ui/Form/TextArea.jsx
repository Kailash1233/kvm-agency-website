import PropTypes from "prop-types";

function TextArea({ label, id, rows }) {
    return (
        <>
            <label
                htmlFor={id}
                className="text-sm font-semibold leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2.5">
                <textarea
                    id={id}
                    rows={rows}
                    className="text-primary-blue w-full resize-none rounded-md border border-slate-300 px-3.5 py-2 outline-none transition duration-150 placeholder:text-gray-400 focus:border-slate-500 sm:text-sm sm:leading-6"
                    required
                ></textarea>
            </div>
        </>
    );
}

TextArea.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    rows: PropTypes.number,
};

export default TextArea;
