import Link from "next/link";
import React from "react";

type Props = {
  color: string;
  width?: string;
  height?: string;
};

type LinkProps = {
  href: string;
  text: string;
  active?: boolean;
  Icon: (props: Props) => React.JSX.Element;
  onClick?: () => void;
};
const LinkButton = (props: LinkProps) => {
  const { active, href = "#", text, Icon, onClick } = props;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-full h-10 flex items-center gap-3 rounded-lg px-3 ${
        active ? "border border-[#E2E2E2] bg-[#F6F6F6]" : ""
      }`}
    >
      {Icon && <Icon color={active ? "#014DAF" : "#808080"} />}
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
