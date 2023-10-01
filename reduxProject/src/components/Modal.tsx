import React from "react";
import { GrClose } from "react-icons/gr";
import Product from "../pages/Product";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

interface Props {
  title: string;
  btnText: string;
  btnFunc: any;
  content: any;
}

const Modal: React.FC<Props> = ({ title, btnText, content, btnFunc }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4 ">
        <div className="border-b  py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <GrClose
            onClick={() => dispatch(modalFunc())}
            className="cursor-pointer"
            size={24}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
