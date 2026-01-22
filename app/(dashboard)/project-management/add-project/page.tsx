import Typography from "@/components/libs/Typography";
import AddAndUpdateProject from "@/components/project/AddAndUpdateProject";
import React from "react";

const AddProject = () => {
  return (
    <div className="space-y-5">
      <Typography variant="h3">Create Project</Typography>
      <AddAndUpdateProject />
    </div>
  );
};

export default AddProject;
