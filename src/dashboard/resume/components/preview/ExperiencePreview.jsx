import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-left font-bold text-xl mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-md font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-sm flex justify-between font-medium">
            {experience?.companyName}, {experience?.city}, {experience?.state}{" "}
            <span>
              {experience?.startDate}{" - "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          <p className="text-sm my-2">{experience?.workSummery}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
