import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addlead = () => {
  const navigate = useNavigate();
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    status:"",
    city: "",
  });
  let validateName = (event) => {
    setLead({ ...lead, name: event.target.value });
  };
  let validateEmail = (event) => {
    setLead({ ...lead, email: event.target.value });
  };
  let validatePhone = (event) => {
    setLead({ ...lead, phone: event.target.value });
  };
  let validateSource = (event) => {
    setLead({ ...lead, source: event.target.value });
  };
  let validateStatus=(event)=>{
    setLead({ ...lead, status: event.target.value });
}
  let validateCity = (event) => {
    setLead({ ...lead, city: event.target.value });
  };
  let submitInformation = async () => {
    let name = lead.name;
    let email = lead.email;
    let phone = lead.phone;
    let source = lead.source;
    let status = lead.status;
    let city = lead.city;
    const {} = await axios.post(
      "http://localhost:5000/api",
      { name, email, phone, source, status, city },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/");
    console.log("abhishek");
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[1400px] h-[500px]  bg-white rounded-lg drop-shadow-md">
        <form
          action=""
          className="m-8 grid grid-cols-2 gap-4"
          onSubmit={submitInformation}
        >
          <div className="flex flex-col ">
            <label htmlFor="">Lead Name</label>
            <input
              type="text"
              className=" bg-transparent outline-none border-solid border-2 my-3 px-2 h-10"
              placeholder="Lead Name"
              required
              value={lead.name}
              onChange={validateName}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className=" bg-transparent outline-none border-solid border-2 my-3 px-2 h-10"
              placeholder="Email"
              required
              value={lead.email}
              onChange={validateEmail}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              className=" bg-transparent outline-none border-solid border-2 my-3 px-2 h-10"
              placeholder="Phone"
              required
              value={lead.phone}
              onChange={validatePhone}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Source</label>
            <input
              type="text"
              className=" bg-transparent outline-none border-solid border-2 my-3 px-2 h-10"
              placeholder="Source"
              required
              value={lead.source}
              onChange={validateSource}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Status</label>
            <select
              className=" bg-transparent outline-none border-solid border-2 my-3 px-2 h-10"
              onChange={validateStatus}
              required
            >
              <option disabled selected>--SELECT STATUS--</option>
              <option>New</option>
              <option>Working</option>
              <option>Contacted</option>
              <option>Qualified</option>
              <option>Failed</option>
              <option>Closed</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">City</label>
            <input
              type="text"
              className=" bg-transparent outline-none border-solid border-2 my-3 px-2 h-10"
              placeholder="City"
              required
              value={lead.city}
              onChange={validateCity}
            />
          </div>
          <button className="flex float-left bg-blue-900 h-10 w-20 text-white cursor-pointer border-1 rounded justify-center items-center mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addlead;
