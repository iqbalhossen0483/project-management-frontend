"use client";
import { useState } from "react";
import Switch from "../libs/Switch";
import Typography from "../libs/Typography";

const Header = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-card flex justify-between items-center py-4 px-5">
      <Typography variant="h5">Project Management</Typography>
      <div className="flex items-center gap-2">
        <Typography variant="h6">Iqbal Hossen</Typography>
        <Switch enabled={enabled} onChange={setEnabled} />
      </div>
    </div>
  );
};

export default Header;
