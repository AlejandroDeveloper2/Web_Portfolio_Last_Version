import { MailSolid } from "iconoir-react";

import {
  contactText,
  lastContactTextLine,
  webOwnerEmail,
} from "@constants/index";

import { useThemeStore } from "@store/index";

import { ContactForm } from "@components/index";

import styles from "./ContactSection.module.css";

const ContactSection = (): JSX.Element => {
  const { theme } = useThemeStore();
  return (
    <section
      id="contact"
      className={styles.contactSection}
      style={{ borderColor: `var(--${theme})` }}
    >
      <div className={styles.titleContainer}>
        <MailSolid style={{ color: `var(--${theme})` }} />
        <h1 className={styles.sectionTitle}>Contáctame</h1>
      </div>

      <p id="section-description">
        {contactText} <span>{webOwnerEmail}</span>.{lastContactTextLine}
      </p>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
