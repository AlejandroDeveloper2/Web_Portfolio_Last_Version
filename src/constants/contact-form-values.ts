import { ContactFormData, WrongInput } from "@interfaces/data-types";

const initialContactValues: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const initialContactErrors: WrongInput<keyof ContactFormData> = {
  name: {
    message: "",
    error: false,
  },
  email: {
    message: "",
    error: false,
  },
  message: {
    message: "",
    error: false,
  },
};

export { initialContactValues, initialContactErrors };
