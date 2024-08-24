import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addlead from "./components/Addlead";
import Leadmanage from "./components/Leadmanage";
import Editlead from "./components/Editlead";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import New from "./components/Leadstatus/New";
import Contacted from "./components/Leadstatus/Contacted";
import Closed from "./components/Leadstatus/Closed";
import Working from "./components/Leadstatus/Working";
import Failed from "./components/Leadstatus/Failed";
import Qualified from "./components/Leadstatus/Qualified";
import Login from './components/Login'
import Register from './components/Register'
import axios from "axios";

let deleteLead;
function App() {
  const [leads, setLeads] = useState([]);
  const getLeads = async () => {
    const leads = localStorage.getItem("Lead");
    let { data } = await axios.get("http://localhost:5000/api/",{
      headers: {
        'Authorization': 'Bearer ' + leads
      }
    });
    setLeads(data.leadinfos);
    console.log(data);
  };

  useEffect(() => {
    getLeads();
  }, []);
  deleteLead = async (leadid) => {
    await axios.delete(`http://localhost:5000/api/${leadid}`);
    getLeads();
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="bg-gray-200 w-full">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users/login" element={<Login />} />
              <Route exact path="/users/register" element={<Register />} />
              <Route exact path="/addlead" element={<Addlead />} />
              <Route exact path="/edit/:leadId" element={<Editlead />} />
              <Route exact path="/managelead" element={<Leadmanage data={leads} />} />
              <Route
                exact path="/new"
                element={
                  <New
                    data={leads.filter((lead) => lead.status.includes("New"))}
                  />
                }
              />
              <Route
                exact path="/closed"
                element={
                  <Closed
                    data={leads.filter((lead) =>
                      lead.status.includes("Closed")
                    )}
                  />
                }
              />
              <Route
                exact path="/contacted"
                element={
                  <Contacted
                    data={leads.filter((lead) =>
                      lead.status.includes("Contacted")
                    )}
                  />
                }
              />
              <Route
                exact path="/working"
                element={
                  <Working
                    data={leads.filter((lead) =>
                      lead.status.includes("Working")
                    )}
                  />
                }
              />
              <Route
                exact path="/failed"
                element={
                  <Failed
                    data={leads.filter((lead) =>
                      lead.status.includes("Failed")
                    )}
                  />
                }
              />
              <Route
                exact path="/qualified"
                element={
                  <Qualified
                    data={leads.filter((lead) =>
                      lead.status.includes("Qualified")
                    )}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
export { deleteLead };
