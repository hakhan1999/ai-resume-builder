import React, { useState } from "react";
import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div className="w-[600px]">
      <div className="flex items-center justify-between mb-2">
        <Button className="flex gap-2"> 
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              className="flex gap-2"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft /> Back
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetailsForm enableNext={(prev) => setEnableNext(prev)} />
      ) : null}
    </div>
  );
};

export default FormSection;
