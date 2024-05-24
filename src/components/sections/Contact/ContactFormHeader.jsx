import PropTypes from "prop-types";

function ContactFormHeader({ heading, children }) {
    return (
        <div className="flex flex-col gap-8 text-center text-darken-jungle-green">
            <h1 className="text-4xl font-semibold">{heading}</h1>
            <h2 className="text-xl font-medium opacity-75">{children}</h2>
        </div>
    );
}

ContactFormHeader.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default ContactFormHeader;
