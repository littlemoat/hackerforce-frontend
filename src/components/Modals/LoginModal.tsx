"use client";

import Icon from "../Icon";
import { useAuth } from "@/contexts/AuthContext";
import { ModalContext } from "@/contexts/ModalContext";
import { FC, useContext, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Modal from "react-responsive-modal";

const LoginModal: FC = () => {
  const {
    loginModalShow,
    closeLoginModal,
    openForgotPswModal,
    openSignupModal,
  } = useContext(ModalContext);
  const account = useAuth();

  const [checked, setChecked] = useState(false);

  return (
    <Modal
      open={loginModalShow}
      onClose={closeLoginModal}
      center
      closeIcon={<CgClose size={25} color="white" />}
    >
      <div className="sm:w-[500px] w-full p-6 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-1 inline-flex">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-grey text-[28px] md:text-[32px] font-bold font-['Orbitron'] uppercase mt-4">
              Welcome Back!
            </div>
            <div className="self-stretch text-center text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              Login to your account
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              Username/Email
            </div>
            <div className="self-stretch px-4 py-3 bg-[#141516] rounded-lg justify-center items-center gap-1 inline-flex">
              <input
                type="text"
                className="grow shrink basis-0 text-white text-base font-medium font-['Inconsolata'] leading-normal
              bg-transparent outline-none placeholder-[#2f3132] self-stretch"
                placeholder="Enter your username or email"
              />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              Password
            </div>
            <div className="self-stretch px-4 py-3 bg-[#141516] rounded-lg justify-center items-center gap-1 inline-flex">
              <input
                type="password"
                className="grow shrink basis-0 text-white text-base font-medium font-['Inconsolata'] leading-normal
              bg-transparent outline-none placeholder-[#2f3132] self-stretch"
                placeholder="Enter your password"
              />

              <div className="w-6 h-6 px-[3px] py-[7px] justify-center items-center flex overflow-hidden">
                <Icon name={"EyeIcon"} className="w-4 h-4 text-[#a0a0a0]" />
              </div>
            </div>
          </div>
          <div className="h-6 justify-start items-center gap-2 inline-flex">
            <div
              className="p-[2px] bg-[#141516] rounded-lg border w-5 h-5 border-white justify-center items-center gap-1 flex cursor-pointer"
              onClick={() => setChecked(!checked)}
            >
              {checked && <BiCheck className="text-white" size={20} />}
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="text-center text-white text-xs font-normal font-['Orbitron'] leading-tight">
                Remember me for 30 days"
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-3 rounded-lg justify-center items-center gap-1 inline-flex">
          <div
            className="text-white text-base font-medium font-['Orbitron'] underline leading-normal cursor-pointer"
            onClick={() => {
              closeLoginModal();
              openForgotPswModal();
            }}
          >
            Forgot Password
          </div>
        </div>
        <div
          className="self-stretch px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 inline-flex"
          onClick={() => {
            account.login();
            closeLoginModal();
          }}
        >
          <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
            Login
          </div>
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-center text-[#a0a0a0] text-xs font-normal font-['Orbitron'] leading-tight">
            Don’t have an account yet?
          </div>
          <div
            className="text-white text-xs font-medium font-['Orbitron'] underline leading-snug cursor-pointer"
            onClick={() => {
              openSignupModal();
              closeLoginModal();
            }}
          >
            Register
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
