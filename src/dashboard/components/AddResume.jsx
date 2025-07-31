import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import globalApi from "../../../service/globalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    const uid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resume_Id: uid,
        user_Email: user?.primaryEmailAddress?.emailAddress,
        user_Name: user?.fullName,
      },
    };
    globalApi
      .createNewResume(data)
      .then((response) => {
        console.log(response);
        if (response) {
          setLoading(false);
          navigate(`/dashboard/resume/${response.data.data.documentId}/edit`);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error creating resume:", error);
      });
  };
  return (
    <>
      <div
        onClick={() => {
          setOpenDialog(true);
        }}
        className="py-24 border border-[#2F3037] items-center justify-center flex bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all duration-400 cursor-pointer hover:shadow-md"
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <p>Add tilte for your new resume</p>
            <DialogDescription>
              <Input
                className="mt-2 text-black"
                placeholder="Full Stack Developer Resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex items-center justify-end gap-2 mt-4">
              <Button
                onClick={() => {
                  setOpenDialog(false);
                }}
                variant="destructive"
              >
                Cancel
              </Button>
              <Button onClick={onCreate} disabled={!resumeTitle || loading}>
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddResume;
