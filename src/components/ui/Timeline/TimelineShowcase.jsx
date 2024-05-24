import PropTypes from "prop-types";

function TimelineShowcase({ img, alt, title, children }) {
    return (
        <div className="mx-auto flex max-w-[50rem] select-none flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-bl from-slate-100 to-slate-200/50 p-8 sm:flex-row sm:gap-8">
            <img src={img} alt={alt} className="h-10 w-10 sm:h-20 sm:w-20" />
            <div className="flex flex-col gap-2.5 text-center">
                <h1 className="text-lg font-medium">{title}</h1>
                <p>{children}</p>
            </div>
        </div>
    );
}

TimelineShowcase.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
};

export default TimelineShowcase;
