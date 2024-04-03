// import React from 'react'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[50px] rounded-lg pt-6">
        <div className="flex items-center gap-2">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div
              className="drawer-content tooltip tooltip-bottom"
              data-tip="menu"
            >
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                <IoMenu className="text-4xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a className="text-2xl">Dashboard</a>
                </li>
                <li>
                  <a className="text-2xl">Order Managmennt</a>
                </li>
                <li>
                  <a className="text-2xl">Item Master</a>
                </li>
                <li>
                  <a className="text-2xl">Customer</a>
                </li>
                <li>
                  <a className="text-2xl">Sales</a>
                </li>
                <li>
                  <a className="text-2xl">Purchase</a>
                </li>
                <li>
                  <a className="text-2xl">Supplier</a>
                </li>
                <li>
                  <a className="text-2xl">Staff Managment</a>
                </li>
                <li>
                  <a className="text-2xl">Expense</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="tooltip tooltip-bottom" data-tip="menu">
            <button className="btn btn-active btn-neutral">
              <IoMenu className="text-4xl" />
            </button>
          </div> */}
          <h2 className="font-medium text-2xl">SEWNEX</h2>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ul className="menu bg-base-200 lg:menu-horizontal rounded-box indicator">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Inbox
                <span className="indicator-item badge badge-secondary">
                  99+
                </span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Updates
                <span className="indicator-item badge badge-warning">new</span>
              </a>
            </li>
            <li>
              <a>
                Stats
                <span className="indicator-item badge badge-xs badge-info"></span>
              </a>
            </li>
          </ul>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
