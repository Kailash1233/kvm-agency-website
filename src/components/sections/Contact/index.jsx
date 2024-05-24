import PropTypes from "prop-types";

import ContactHeader from "./ContactHeader";
import ContactFormHeader from "./ContactFormHeader.jsx";
import Input from "../../ui/Form/Input.jsx";
import TextArea from "../../ui/Form/TextArea.jsx";
import SubmitButton from "../../ui/Form/SubmitButton.jsx";

import { SECTION_CONTACT as SectionContent } from "../../../constants/AppContent.js";

import { cn } from "../../../lib/utils.js";

function ContactSection({ id }) {
    return (
        <section id={id}>
            <div className="mx-auto max-w-7xl px-5 py-16 sm:py-32">
                <ContactHeader
                    title={SectionContent.header.title}
                    description={SectionContent.header.description}
                    sprite={SectionContent.header.sprite}
                    buttonText={SectionContent.header.buttonText}
                />
                <div
                    className="relative mt-16 flex flex-row-reverse items-center justify-center px-0 sm:px-8 md:justify-normal"
                    id="contact_form"
                >
                    <img
                        src={SectionContent.illustration.src}
                        alt={SectionContent.illustration.alt}
                        className="absolute left-0 -z-10 max-w-lg opacity-5 md:opacity-20 xl:opacity-100"
                    />
                    <div className="flex max-w-2xl flex-col items-center gap-8">
                        <ContactFormHeader
                            heading={SectionContent.form.header.title}
                        >
                            {SectionContent.form.header.description}
                        </ContactFormHeader>
                        <form
                            action=""
                            className="grid w-full grid-cols-2 gap-x-8 gap-y-6"
                        >
                            {SectionContent.form.input.map((input) => (
                                <Input
                                    key={input.id}
                                    label={input.label}
                                    id={input.id}
                                    type={input.type}
                                    autoComplete={input.autoComplete}
                                    required
                                    className={cn({
                                        "sm:col-span-2": input.maxWidth,
                                    })}
                                />
                            ))}
                            <div className="col-span-2 ">
                                <TextArea
                                    label={SectionContent.textArea.label}
                                    id={SectionContent.textArea.id}
                                    rows={6}
                                />
                            </div>
                            <div className="col-span-2 mt-6">
                                <SubmitButton
                                    textButton={SectionContent.submitButtonText}
                                    onSubmit={() => {}}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

ContactSection.propTypes = {
    id: PropTypes.string,
};

export default ContactSection;
