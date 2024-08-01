import { Mail, Message, Send, User } from "iconoir-react";

import { useContactForm } from "@hooks/index";
import { useThemeStore } from "@store/index";
import { validationSchema } from "./validationSchema";

import { ButtonWithLabel, InputText, TextArea } from "@components/index";

import styles from "./ContactForm.module.css";

const ContactForm = (): JSX.Element => {
  const {
    data,
    errors,
    loading,
    loadingMessage,
    formRef,
    handleChange,
    handleSubmit,
  } = useContactForm(validationSchema);

  const { theme } = useThemeStore();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.contactForm}
      style={{
        borderColor: `var(--${theme})`,
        boxShadow: `0 0 10px var(--${theme}), 0 0 10px var(--${theme})`,
      }}
    >
      <fieldset className={styles.fields}>
        <InputText
          type="text"
          placeholder="Escribe tu nombre"
          value={data.name}
          name="name"
          onChange={handleChange}
          id="name"
          label="Tu Nombre"
          Icon={User}
          errorMessage={errors.name.message}
        />
        <TextArea
          placeholder="Escribe tu mensaje"
          value={data.message}
          name="message"
          onChange={handleChange}
          id="message"
          label="Mensaje"
          Icon={Message}
          errorMessage={errors.message.message}
        />
        <InputText
          type="text"
          placeholder="Escribe tu correo electrónico"
          value={data.email}
          name="email"
          onChange={handleChange}
          id="message"
          label="Correo electrónico"
          Icon={Mail}
          errorMessage={errors.email.message}
        />
      </fieldset>
      <ButtonWithLabel
        Icon={Send}
        label="Enviar"
        type="submit"
        title="Enviar mensaje"
        name="btn-send-message"
        variant="solid"
        loading={loading}
        loadingMessage={loadingMessage ? loadingMessage : undefined}
        onClick={() => {}}
      />
    </form>
  );
};

export default ContactForm;
