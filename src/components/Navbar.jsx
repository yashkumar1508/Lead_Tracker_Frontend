import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-blue-900 flex justify-between">
        <div className="w-56 block bg-white border-y-[3px] border-black">
          <p className="font-bold text-2xl text-center">LEAD MANAGEMENT</p>
        </div>
        <div className="items-center flex pr-6" onClick={()=>{navigate('/users/login')}}>
          <RxAvatar className="text-5xl text-white" />
        </div>
      </div>
      
 

    </div>
  );
};

export default Navbar;
