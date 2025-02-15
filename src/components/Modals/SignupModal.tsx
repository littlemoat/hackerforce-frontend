"use client";

import Icon from "../Icon";
import { ModalContext } from "@/contexts/ModalContext";
import Link from "next/link";
import { FC, useContext, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Modal from "react-responsive-modal";

const SignupModal: FC = () => {
  const { signupModalShow, closeSignupModal, openLoginModal } =
    useContext(ModalContext);

  const [checked, setChecked] = useState(false);

  return (
    <Modal
      open={signupModalShow}
      onClose={closeSignupModal}
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
              Username
            </div>
            <div className="self-stretch px-4 py-3 bg-[#141516] rounded-lg justify-center items-center gap-1 inline-flex">
              <input
                type="text"
                className="grow shrink basis-0 text-white text-base font-medium font-['Inconsolata'] leading-normal
              bg-transparent outline-none placeholder-[#2f3132] self-stretch"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              Email
            </div>
            <div className="self-stretch px-4 py-3 bg-[#141516] rounded-lg justify-center items-center gap-1 inline-flex">
              <input
                type="email"
                className="grow shrink basis-0 text-white text-base font-medium font-['Inconsolata'] leading-normal
              bg-transparent outline-none placeholder-[#2f3132] self-stretch"
                placeholder="Enter your email"
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
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
              Confirm Password
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
              You agree with our
            </div>
            <Link
              href={"/term"}
              className="text-white text-xs font-medium font-['Orbitron'] underline leading-snug"
              onClick={closeSignupModal}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="self-stretch px-6 py-3 bg-[#972123] duration-200 hover:bg-[#972123c9] cursor-pointer rounded-lg justify-center items-center gap-1 inline-flex">
          <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
            Register
          </div>
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-center text-[#a0a0a0] text-xs font-normal font-['Orbitron'] leading-tight">
            Already have an account?
          </div>
          <div
            className="text-white text-xs font-medium font-['Orbitron'] underline leading-snug cursor-pointer"
            onClick={() => {
              openLoginModal();
              closeSignupModal();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignupModal;
