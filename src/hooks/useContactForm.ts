import { useState, useRef, ChangeEvent, FormEvent } from "react";

import {
  ContactFormData,
  FieldErrorType,
  ThemeModeType,
  WrongInput,
} from "@interfaces/data-types";
import { initialContactValues, initialContactErrors } from "@constants/index";

import { useContactStore, useThemeStore } from "@store/index";
import useLoading from "./useLoading";

const useContactForm = (
  validationSchema: (
    formData: ContactFormData,
    formRef: React.RefObject<HTMLFormElement>,
    theme: ThemeModeType
  ) => Promise<WrongInput<keyof ContactFormData>>
) => {
  const formRef: React.RefObject<HTMLFormElement> = useRef(null);

  const [data, setData] = useState<ContactFormData>(initialContactValues);
  const [errors, setErrors] =
    useState<WrongInput<keyof ContactFormData>>(initialContactErrors);

  const { loading, loadingMessage, toggleLoading } = useLoading();

  const { theme } = useThemeStore();
  const { sendContactEmail } = useContactStore();

  const updateErrors = (
    updatedErrors: WrongInput<keyof ContactFormData>
  ): void => {
    setErrors(updatedErrors);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const wrongInput = await validationSchema(data, formRef, theme);
    updateErrors(wrongInput);

    if (
      Object.values<FieldErrorType>(wrongInput).every((error) => !error.error)
    ) {
      sendContactEmail(data, toggleLoading).then(() => clearForm());
      return;
    }
  };

  const clearForm = (): void => {
    setData(initialContactValues);
    setErrors(initialContactErrors);
  };

  return {
    data,
    errors,
    loading,
    loadingMessage,
    formRef,
    handleChange,
    handleSubmit,
    clearForm,
  };
};

export default useContactForm;
