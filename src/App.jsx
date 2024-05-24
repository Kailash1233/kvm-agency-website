import { useEffect } from "react";

import CompanySection from "./components/sections/Company";
import ContactSection from "./components/sections/Contact";
import HeroSection from "./components/sections/Hero";
import OfferingSection from "./components/sections/Offering";
import OverviewSection from "./components/sections/Overview";
import PartnersSection from "./components/sections/Partners";
import ServicesSection from "./components/sections/Services";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";

function App() {
    useEffect(() => {
        setTimeout(() => {
            const targetSection = window.location.hash.substring(1);
            const section = targetSection
                ? document.getElementById(targetSection)
                : null;

            if (section) {
                section.scrollIntoView();
                window.history.replaceState(
                    null,
                    null,
                    window.location.pathname,
                );
            }
        }, 250);
    }, []);

    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <OfferingSection id="offering" />
                <OverviewSection id="overview" />
                <ServicesSection id="services" />
                <CompanySection id="company" />
                <PartnersSection id="partners" />
                <ContactSection id="contact" />
            </main>
            <Footer />
        </>
    );
}

export default App;
