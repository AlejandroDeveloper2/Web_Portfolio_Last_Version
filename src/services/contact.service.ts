import emailJs from "@emailjs/browser";

import { ContactFormData } from "@interfaces/data-types";

class ContactService {
  private SERVICE_KEY = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  private TEMPLATE_KEY = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  private EMAIL_API_KEY = import.meta.env.VITE_EMAIL_JS_API_KEY;

  constructor() {}

  public async sendContactEmail(formParams: ContactFormData): Promise<void> {
    try {
      await emailJs.send(
        this.SERVICE_KEY,
        this.TEMPLATE_KEY,
        {
          name: formParams.name,
          email: formParams.email,
          message: formParams.message,
        },
        this.EMAIL_API_KEY
      );
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      throw new Error(parsedError.message);
    }
  }
}

export default ContactService;
