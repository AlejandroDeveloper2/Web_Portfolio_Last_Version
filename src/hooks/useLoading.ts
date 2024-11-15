import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);

  const toggleLoading = (isLoading: boolean, message: string | null): void => {
    setLoading(isLoading);
    setLoadingMessage(message);
  };

  return {
    loading,
    loadingMessage,
    toggleLoading,
  };
};

export default useLoading;
