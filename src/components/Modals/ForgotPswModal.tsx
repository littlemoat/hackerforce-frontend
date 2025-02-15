"use client";

import Icon from "../Icon";
import { ModalContext } from "@/contexts/ModalContext";
import { FC, useContext } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "react-responsive-modal";

const ForgotPswModal: FC = () => {
  const { openLoginModal, closeForgotPswModal, forgotPswModalShow } =
    useContext(ModalContext);

  return (
    <Modal
      open={forgotPswModalShow}
      onClose={closeForgotPswModal}
      center
      closeIcon={<CgClose size={25} color="white" />}
    >
      <div className="sm:w-[500px] w-full p-6 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-grey text-[24px] md:text-[32px] font-bold font-['Orbitron'] uppercase mt-4">
              Forgot Password
            </div>
            <div className="self-stretch text-center text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              We will send you link to recovery your password.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              Email
            </div>
            <div className="self-stretch px-4 py-3 bg-[#141516] rounded-lg justify-center items-center gap-1 inline-flex">
              <input
                type="email"
                className="grow shrink basis-0 text-white text-base font-medium font-['Inconsolata'] leading-normal
              bg-transparent outline-none placeholder-[#2f3132] self-stretch"
                placeholder="Enter your username or email"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-3 bg-[#972123] hover:bg-[#972123d2] duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 inline-flex">
          <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
            Send
          </div>
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-center text-[#a0a0a0] text-xs font-normal font-['Orbitron'] leading-tight">
            Remember your password?
          </div>
          <div
            className="text-white text-xs font-medium font-['Orbitron'] underline leading-snug cursor-pointer"
            onClick={() => {
              openLoginModal();
              closeForgotPswModal();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPswModal;
