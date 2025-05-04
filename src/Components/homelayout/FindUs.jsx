import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">Find Us On</h1>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start">
          {" "}
          <span className=" text-[#1877F2]">
            <FaFacebookSquare />
          </span>{" "}
          Facebook
        </button>
        <button className="btn bg-base-100 justify-start">
          <span className="text-[#e822d1]">
            {" "}
            <FaSquareInstagram />{" "}
          </span>
          Instagram
        </button>
        <button className="btn bg-base-100 justify-start">
          {" "}
          <span className="text-[#0077B5]">
            <SiLinkedin />
          </span>{" "}
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default FindUs;
