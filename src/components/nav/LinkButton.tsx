import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
  active?: boolean;
};
const LinkButton = (props: Props) => {
  const { active, href = "#", text } = props;
  return (
    <Link
      href={href}
      className={`w-full h-10 flex items-center gap-3 rounded-lg px-3 ${
        active ? "border border-[#E2E2E2] bg-[#F6F6F6]" : ""
      }`}
    >
      <p
        className={`${
          active ? "text-[#014DAF]" : "text-[#00000080]"
        } text-xs font-normal`}
      >
        {text}
      </p>
    </Link>
  );
};

export default LinkButton;
