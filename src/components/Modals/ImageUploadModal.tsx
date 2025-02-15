/* eslint-disable @next/next/no-img-element */
"use client";

import { errorAlert, successAlert } from "../ToastGroup";
import { ModalContext } from "@/contexts/ModalContext";
import { UploadCloudIcon } from "lucide-react";
import { useState, useContext } from "react";
import { CgClose } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import Modal from "react-responsive-modal";

const ImageUploadModal = () => {
  const { closeImageUploadModalShowModal, imageUploadModalShow } =
    useContext(ModalContext);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create preview URL
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      errorAlert("Please select an image first!");
      return;
    }

    successAlert("Image Uploaded Successfully!");
    setSelectedImage(null);
    setPreviewUrl(null);
    closeImageUploadModalShowModal();
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    closeImageUploadModalShowModal();
  };

  return (
    <Modal
      open={imageUploadModalShow}
      onClose={handleCancel}
      center
      closeIcon={<CgClose size={25} color="white" />}
    >
      <div className="sm:w-[500px] w-full p-6 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex flex-col items-center gap-6">
        <h2 className="text-white text-lg font-bold font-['Orbitron'] uppercase text-center">
          Upload an Image
        </h2>

        <div className="w-full flex flex-col items-center gap-4 overflow-hidden">
          {previewUrl ? (
            <div className="w-full relative h-[400px]">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg border border-[#2f3132] relative z-10"
              />
              <div className="absolute bottom-2 right-2 z-20">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <FaPencil color="white" size={20} />
                </label>
              </div>
            </div>
          ) : (
            <div className="w-full h-40 bg-[#141516] flex items-center justify-center flex-col rounded-lg text-gray-500 text-sm">
              <UploadCloudIcon color="white" />
              <label className="px-6 py-3 duration-200 cursor-pointer rounded-lg text-white font-medium font-['Orbitron']">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                Choose Image
              </label>
            </div>
          )}
        </div>

        <div className="w-full flex items-center justify-end gap-2">
          <button
            className="self-stretch px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg text-white font-medium font-['Orbitron']"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="self-stretch px-6 py-3 bg-[#2f3132] hover:bg-[#414344] duration-200 cursor-pointer rounded-lg text-white font-medium font-['Orbitron']"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageUploadModal;
