import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import globalApi from "../../service/globalApi";
import { useUser } from "@clerk/clerk-react";
import ResumeCardItem from "./components/ResumeCardItem";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    user && getResumesList();
  }, [user]);

  const getResumesList = () => {
    setLoading(true);

    globalApi
      .getUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((response) => {
        console.log("User Resumes:", response.data);
        setResumeList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-10 md:px-20 lg:px-15">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start creating AI resume for your next job role</p>

      <div className="relative mt-10">
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ${
            loading ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          <AddResume />
          {resumeList.map((resume) => (
            <ResumeCardItem resume={resume} key={resume.id} />
          ))}
        </div>

        {loading && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-10">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
