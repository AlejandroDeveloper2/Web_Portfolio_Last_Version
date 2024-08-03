import { useState } from "react";

const useModal = <T>() => {
  const [modalData, setModalData] = useState<T | undefined>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = (data?: T): void => {
    setModalVisible(!isModalVisible);
    setModalData(data);
  };

  return {
    modalData,
    isModalVisible,
    toggleModal,
  };
};

export default useModal;
