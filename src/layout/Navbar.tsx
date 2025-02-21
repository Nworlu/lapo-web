// import SVGAtom from "@/components/SVGAtom/SVGAtom";
// import SVGAtom from "@/components/Atoms/SVGAtom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-b-[#DEDEDF] h-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* <SVGAtom iconName="HomeIcon" color="#001735" width={16} height={16} /> */}
        <h3 className="text-xs text-[#001735] font-medium">Dashboard</h3>
      </div>

      <div>
        <div></div>
        <div className="flex items-center gap-4">
          {/* <SVGAtom iconName="bell" color="#475467" />
          <SVGAtom iconName="avatar" color="#475467" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
