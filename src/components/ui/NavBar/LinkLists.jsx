import PropTypes from "prop-types";
import { useState } from "react";

import LinkItem from "./LinkItem";
import LinkItemButton from "./LinkItemButton";

function LinkLists({ highlightLink, children }) {
    const [linksCollapse, setLinksCollapse] = useState(true);

    function handleLinksCollapse() {
        setLinksCollapse((prevLinksCollapse) => !prevLinksCollapse);
    }

    return (
        <>
            <ul
                className={`absolute left-0 top-full ${linksCollapse ? "hidden" : undefined} w-full flex-col items-center gap-0 rounded-b-lg bg-white md:static md:flex md:w-fit md:flex-row md:gap-3.5 md:border-none border-b border-b-zinc-100`}
            >
                {children}
                <li className="my-4 block md:hidden ">
                    <div className="mx-auto h-1 w-20 rounded-full bg-slate-200" />
                </li>
                <LinkItem
                    className="mb-5 block w-full px-5 sm:hidden md:mb-0 md:block md:w-fit md:px-0"
                    title={highlightLink.name}
                    href={highlightLink.href}
                    highlight
                />
            </ul>
            <menu className="flex items-center md:hidden">
                <LinkItem
                    title={highlightLink.name}
                    href={highlightLink.href}
                    highlight
                    className="relative mr-4 hidden items-center before:absolute before:-right-5 before:h-5 before:w-0.5 before:rounded-full before:bg-slate-200 sm:flex"
                />
                <LinkItemButton
                    active={linksCollapse ? false : true}
                    onToggle={handleLinksCollapse}
                />
            </menu>
        </>
    );
}

LinkLists.propTypes = {
    mobileCollapse: PropTypes.bool,
    highlightLink: PropTypes.object,
    children: PropTypes.node,
};

export default LinkLists;
