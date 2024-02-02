import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  studentRoute,
  eligiblesStudentRoute,
  addStudentRoute,
} from "../utils/APIRoutes";

const Dashboard = () => {
  const [totalStudent, setTotalStudent] = useState([]);
  const [eligibleStudent, setEligibleStudent] = useState([]);
  const [file, setFile] = useState(null);
  const getTotalStudent = async () => {
    try {
      const response = await axios.get(`${studentRoute}`);
      setTotalStudent(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };
  const getEligibleStudent = async () => {
    try {
      const response = await axios.get(`${eligiblesStudentRoute}`);
      setEligibleStudent(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTotalStudent();
    getEligibleStudent();
  }, []);

  const totalAmount = eligibleStudent.reduce(
    (acc, currentValue) => {
      const amountToAdd = Number(currentValue.amount);
      if (!isNaN(amountToAdd)) {
        return {
          amount: acc.amount + amountToAdd,
        };
      } else {
        console.warn(`Invalid amount: ${currentValue.amount}`);
        return acc;
      }
    },
    { amount: 0 }
  ).amount;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(`${addStudentRoute}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded successfully:", response.data);
      // Handle success
    } catch (error) {
      console.error("Error during file upload:", error);
      // Handle error
    }
  };
  return (
    <>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Main */}
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              {/* Card stats */}
              <div className="row g-6 mb-6">
                <div className="col-xl-4 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h5 font-semibold text-muted d-block mb-2">
                            TOTAL STUDENT
                          </span>
                          <span className="h2 font-bold mb-0">
                            {totalStudent.length}
                          </span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <i className="bi bi-credit-card"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h5 font-semibold text-muted d-block mb-2">
                            ELIGIBLE STUDENT
                          </span>
                          <span className="h2 font-bold mb-0">
                            {eligibleStudent.length}
                          </span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i className="bi bi-people"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span className="h5 font-semibold text-muted d-block mb-2">
                            OFFERING SCHOLARSHIP
                          </span>
                          <span className="h2 font-bold mb-0">
                            {totalAmount} Rupees
                          </span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i className="bi bi-minecart-loaded"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="container-fluid">
            <div className="mb-npx">
              <div className="row align-items-end">
                {/* Actions */}
                <div className="col-sm-9 col-12 text-sm-end">
                  <div className="mx-n1">
                    <a
                      href="#"
                      className="btn d-inline-flex btn-sm btn-primary mx-1"
                    >
                      <span className=" pe-2">
                        <i className="bi bi-plus"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-12 text-sm-start">
                  <div className="mx-n1">
                    <div>
                      <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                      />
                      <a
                        href="#"
                        className="btn d-inline-flex btn-sm btn-primary mx-1 mt-2"
                        onClick={handleFileUpload}
                      >
                        <span className=" pe-2">
                          <i className="bi bi-plus"></i>
                        </span>
                        <span>Upload Student Data CSV File</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
