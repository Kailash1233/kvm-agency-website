import { useState } from "react";
// import PropTypes from "prop-types";

import LinkItem from "./LinkItem";
import LinkItemButton from "./LinkItemButton";

function LinkLists() {
    const [navBarActive, setNavBarActive] = useState(false);

    function handleToggleNavBar() {
        setNavBarActive((prevNavBarActive) => !prevNavBarActive);
    }

    const itemClasses = "px-5 md:px-0 md:w-fit w-full";

    return (
        <>
            <ul
                className={`absolute left-0 top-full ${navBarActive ? undefined : "hidden"} w-full flex-col items-center gap-0 rounded-b-lg bg-white md:static md:flex md:w-fit md:flex-row md:gap-3.5`}
            >
                <LinkItem className={itemClasses} title="Services" href="/" />
                <LinkItem className={itemClasses} title="Company" href="/" />
                <LinkItem className={itemClasses} title="Partners" href="/" />
                <li className="my-4 block md:hidden ">
                    <div className="mx-auto h-1 w-20 rounded-full bg-slate-200" />
                </li>
                <LinkItem
                    className={`block sm:hidden md:block ${itemClasses} mb-5 md:mb-0`}
                    title="Contact"
                    href="/"
                    highlight
                />
            </ul>
            <menu className="flex items-center md:hidden">
                <LinkItem
                    title="Contact"
                    href="/"
                    highlight
                    className="relative mr-4 hidden items-center before:absolute before:-right-5 before:h-5 before:w-0.5 before:rounded-full before:bg-slate-200 sm:flex"
                />
                <LinkItemButton
                    active={navBarActive ? true : undefined}
                    onToggle={handleToggleNavBar}
                />
            </menu>
        </>
    );
}

LinkLists.propTypes = {};

export default LinkLists;
