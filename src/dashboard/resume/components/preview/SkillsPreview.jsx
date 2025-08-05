import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-left font-bold text-xl mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Skills
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      <div className="grid grid-cols-3 gap-1 my-5">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-sm font-normal">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
