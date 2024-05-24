import PropTypes from "prop-types";

import TopBar from "./TopBar";
import LinkLists from "./LinkLists";
import LinkItem from "./LinkItem.jsx";
import NavBrand from "./NavBrand.jsx";

import { HEADER as HeaderContent } from "../../../constants/AppContent.js";

function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-b-zinc-100 bg-white">
            {HeaderContent.topBar.enable == true && (
                <TopBar href={HeaderContent.topBar.href}>
                    {HeaderContent.topBar.text}
                </TopBar>
            )}
            <nav className="max-container flex h-20 items-center justify-between">
                <NavBrand
                    logoIcon={HeaderContent.brand.icon.src}
                    altLogoIcon={HeaderContent.brand.icon.alt}
                    enableLogoText={HeaderContent.brand.text.enable}
                    logoText={HeaderContent.brand.text.src}
                    altLogoText={HeaderContent.brand.text.alt}
                />
                <LinkLists
                    highlightLink={{
                        name: HeaderContent.highlightLink.name,
                        href: HeaderContent.highlightLink.href,
                    }}
                >
                    {HeaderContent.links.map((link) => (
                        <LinkItem
                            key={link.name}
                            className="w-full px-5 md:w-fit md:px-0"
                            title={link.name}
                            href={link.href}
                        />
                    ))}
                </LinkLists>
            </nav>
        </header>
    );
}

NavBar.propTypes = {
    topBar: PropTypes.bool,
};

export default NavBar;
