import React from "react";
import Dashboard from "./Dashboard";
import BasicTable from "./TotalStudentList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Vertical Navbar */}
        <nav
          className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div className="container-fluid">
            {/* Toggler */}
            <button
              className="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Brand */}
            <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
              <img
                src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                alt="..."
              />
            </a>
            {/* User menu (mobile) */}
            <div className="navbar-user d-lg-none">
              {/* Dropdown */}
              <div className="dropdown">
                {/* Toggle */}
                <a
                  href="#"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></a>
              </div>
            </div>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="sidebarCollapse">
              {/* Navigation */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-house"></i> Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Header */}
          <header className="bg-surface-primary border-bottom py-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <div className="row align-items-center">
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                    {/* Title */}
                    <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                  </div>
                  {/* Actions */}
                  <div className="col-sm-6 col-12 text-sm-end">
                    <div className="mx-n1">
                      <a
                        href="#"
                        className="btn d-inline-flex btn-sm btn-primary mx-1"
                      >
                        <span className=" pe-2">
                          <i className="bi bi-plus"></i>
                        </span>
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Main */}
          <Dashboard />
          {/* <BasicTable /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
