import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  return (
    <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
      <div className="py-24 border border-[#2F3037] items-center justify-center flex bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all duration-400 cursor-pointer hover:shadow-md">
        <Notebook />
      </div>
      <h2 className="text-center my-1">{resume.title}</h2>
    </Link>
  );
};

export default ResumeCardItem;
