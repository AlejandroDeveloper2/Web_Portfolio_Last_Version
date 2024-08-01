import { FieldErrorType } from "@interfaces/data-types";
import { ContactFormData, ThemeModeType } from "@interfaces/data-types";

const markWrongInput = (
  formRef: React.RefObject<HTMLFormElement>,
  inputKey: keyof ContactFormData,
  error: boolean,
  theme: ThemeModeType
): void => {
  const $fieldset = formRef.current?.querySelector("fieldset");
  const $input = $fieldset?.querySelector(`#${inputKey as string}`);
  if (error)
    $input?.setAttribute(
      "style",
      "border-color: var(--error); color:var(--${theme})"
    );
  else
    $input?.setAttribute(
      "style",
      `border-color: var(--${theme}); color:var(--${theme})`
    );
};

export class Validations {
  constructor() {}
  public validateEmptyFields(
    field: string,
    key: keyof ContactFormData,
    formRef: React.RefObject<HTMLFormElement>,
    theme: ThemeModeType
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    if (field === "") {
      error = {
        message: "El campo es obligatorio!",
        error: true,
      };
      markWrongInput(formRef, key, true, theme);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false, theme);
      return Promise.resolve(error);
    }
  }

  public validateEmail(
    field: string,
    key: keyof ContactFormData,
    formRef: React.RefObject<HTMLFormElement>,
    theme: ThemeModeType
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    const emailExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailExp.test(field)) {
      error = {
        message: "El correo es invalido!",
        error: true,
      };
      markWrongInput(formRef, key, false, theme);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false, theme);
      return Promise.resolve(error);
    }
  }
}
