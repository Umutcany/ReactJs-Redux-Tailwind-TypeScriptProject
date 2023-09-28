import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl ">React Uygulama</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-md" name="" id="">
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <input
          className="h-10 rounded-md px-4 text-black"
          type="text"
          placeholder="Lütfen arama yapınız..."
        />
        <div
          onClick={() => dispatch()}
          className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;