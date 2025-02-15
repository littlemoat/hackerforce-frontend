import { Flip, toast } from "react-toastify";

export const errorAlert = (text: string) => {
  toast.error(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Flip,
  });
};

export const warningAlert = (text: string) => {
  toast.warning(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Flip,
  });
};

export const successAlert = (text: string) => {
  toast.success(text, {
    position: "bottom-right",
    autoClose: 15000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    className: "",
    transition: Flip,
  });
};

export const infoAlert = (text: string) => {
  toast.info(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Flip,
  });
};
