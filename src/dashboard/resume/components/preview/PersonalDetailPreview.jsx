import React from "react";
import { Link } from "react-router-dom";

const PersonalDetailPreview = ({ resumeInfo }) => {
  return (
    <>
      <h2
        className="font-bold text-4xl text-center mb-1"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-xl font-medium mb-1">
        {resumeInfo?.jobTitle}
      </h2>
      <h2 className="text-center font-normal text-sm">{resumeInfo?.address}</h2>
      <div className="grid grid-cols-3 gap-3 mt-2">
        <div className="flex items-center gap-1 justify-start">
          <h2 className="font-medium text-sm">Phone: </h2>
          <Link to={`tel:${resumeInfo?.phone}`}>
            <h2
              className="font-medium text-sm underline"
              style={{ color: resumeInfo?.themeColor }}
            >
              {resumeInfo?.phone}
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-1 justify-center">
          <h2 className="font-medium text-sm">Email: </h2>
          <Link to={`mailto:${resumeInfo?.email}`}>
            <h2
              className="font-medium text-sm text-center underline"
              style={{ color: resumeInfo?.themeColor }}
            >
              {resumeInfo?.email}
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-1 justify-end">
          <h2 className="font-medium text-sm">Portfolio: </h2>
          <Link to={`${resumeInfo?.portfolioLink}`} target="_blank">
            <h2
              className="font-medium text-sm underline"
              style={{ color: resumeInfo?.themeColor }}
            >
              {resumeInfo?.portfolioLink}
            </h2>
          </Link>
        </div>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </>
  );
};

export default PersonalDetailPreview;
