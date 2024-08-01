import { create } from "zustand";
import { toast } from "react-toastify";

import { ContactStore } from "@interfaces/store-types";
import { ContactFormData, LoadingFunction } from "@interfaces/data-types";

import ContactService from "@services/contact.service";

const contactService = new ContactService();

const useContactStore = create<ContactStore>(() => ({
  sendContactEmail: async (
    formParams: ContactFormData,
    toggleLoading: LoadingFunction
  ): Promise<void> => {
    toggleLoading(true, "Enviando mensaje...");
    try {
      await contactService.sendContactEmail(formParams);
      toast.success("Mensaje enviado correctamente!");
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      toast.error(parsedError.message);
    } finally {
      toggleLoading(false, null);
    }
  },
}));

export default useContactStore;
