import {
  ContactFormData,
  FieldErrorType,
  ThemeModeType,
  WrongInput,
} from "@interfaces/data-types";

import { Validations } from "@utils/index";

const validations = new Validations();

export const validationSchema = async (
  formData: ContactFormData,
  formRef: React.RefObject<HTMLFormElement>,
  theme: ThemeModeType
): Promise<WrongInput<keyof ContactFormData>> => ({
  name: await validations
    .validateEmptyFields(formData.name, "name", formRef, theme)
    .catch((error: FieldErrorType) => error),
  email: await validations
    .validateEmptyFields(formData.email, "email", formRef, theme)
    .then(() =>
      validations.validateEmail(formData.email, "email", formRef, theme)
    )
    .catch((error: FieldErrorType) => error),
  message: await validations
    .validateEmptyFields(formData.name, "name", formRef, theme)
    .catch((error: FieldErrorType) => error),
});
