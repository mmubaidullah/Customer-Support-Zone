import React from "react";
import Container from "../container/Container";

const Nav = () => {
  return (
    <div>
      <Container>
      <div className="navbar bg-base-100 shadow-sm flex flex-row justify-between md:hidden">
        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
            >
            <a href="" className="hover:text-[#627382]">
              Home
            </a>
            <a href="" className="hover:text-[#627382]">
              FAQ
            </a>
            <a href="" className="hover:text-[#627382]">
              Challangeog
            </a>
            <a href="" className="hover:text-[#627382]">
              Blog
            </a>
            <a href="" className="hover:text-[#627382]">
              Download
            </a>
            <a href="" className="hover:text-[#627382]">
              Contact
            </a>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            + New Ticket
          </button>
            </ul>
          </div>
        </div>
        <div>
          <a className="btn btn-ghost text-xl">CS — Ticket System</a></div>
      </div>

      <div className="navbar bg-base-100 justify-between hidden md:flex">
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        <div className=" flex">
          <div className=" gap-7 justify-center items-center mx-5 hidden md:flex">
            <a href="" className="hover:text-[#627382]">
              Home
            </a>
            <a href="" className="hover:text-[#627382]">
              FAQ
            </a>
            <a href="" className="hover:text-[#627382]">
              Challangeog
            </a>
            <a href="" className="hover:text-[#627382]">
              Blog
            </a>
            <a href="" className="hover:text-[#627382]">
              Download
            </a>
            <a href="" className="hover:text-[#627382]">
              Contact
            </a>
          </div>
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            + New Ticket
          </button>
        </div>
      </div>
      </Container>
      
    </div>
  );
};

export default Nav;
