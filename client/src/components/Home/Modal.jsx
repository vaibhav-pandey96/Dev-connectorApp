// Modal.js
import { RxCross2 } from "react-icons/rx";

const Modal = ({ show, onClose, name, description }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center backdrop-blur-xs z-10">
      <div className="w-full max-w-md md:max-w-[75%] bg-white relative p-6 md:p-10">
        <h2 className="text-center font-bold text-xl mb-4 md:text-4xl">{name}</h2>
        <p className="text-center text-sm md:text-xl">{description}</p>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Modal;
