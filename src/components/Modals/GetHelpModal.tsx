"use client";

import { successAlert } from "../ToastGroup";
import { ModalContext } from "@/contexts/ModalContext";
import { FC, useContext } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "react-responsive-modal";

const GetHelpModal: FC = () => {
  const { closeGetHelpModal, getHelpModalShow } = useContext(ModalContext);

  const handleSubmit = () => {
    closeGetHelpModal();
    successAlert("Submitted");
  };
  return (
    <Modal
      open={getHelpModalShow}
      onClose={closeGetHelpModal}
      center
      closeIcon={<CgClose size={25} color="white" />}
    >
      <div className="sm:w-[500px] w-full p-6 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-grey text-[24px] font-bold font-['Orbitron'] uppercase mt-4 text-center">
              Describe the error you are encountering.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch px-4 py-3 bg-[#141516] rounded-lg justify-center items-center gap-1 inline-flex">
            <textarea
              className="grow shrink basis-0 text-white text-base font-medium font-['Inconsolata'] leading-normal
              bg-transparent outline-none placeholder-[#2f3132] self-stretch min-h-20 max-h-20"
              placeholder="Enter your error"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-3">
          <div
            className="self-stretch w-full px-6 py-3 bg-grey duration-200 hover:bg-grey/60 cursor-pointer rounded-lg justify-center items-center gap-1 inline-flex"
            onClick={closeGetHelpModal}
          >
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              Cancel
            </div>
          </div>
          <div
            className="self-stretch w-full px-6 py-3 bg-[#972123] duration-200 hover:bg-[#972123d5] cursor-pointer rounded-lg justify-center items-center gap-1 inline-flex"
            onClick={handleSubmit}
          >
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              submit
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GetHelpModal;
