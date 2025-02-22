import React from "react";

type Props = {
  width?: string;
  height?: string;
  color: string;
};
const BranchesIcon = (props: Props) => {
  const { width = "16", height = "16", color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33301L4 1.33301C2.34533 1.33301 2 1.67834 2 3.33301L2 14.6663L10 14.6663L10 3.33301C10 1.67834 9.65467 1.33301 8 1.33301Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M12 5.33301L10 5.33301L10 14.6663L14 14.6663L14 7.33301C14 5.67834 13.6547 5.33301 12 5.33301Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M5.33337 4L6.66671 4M5.33337 6L6.66671 6M5.33337 8L6.66671 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.66671 14.6665L7.66671 11.9998C7.66671 11.3713 7.66671 11.057 7.47144 10.8618C7.27618 10.6665 6.96191 10.6665 6.33337 10.6665H5.66671C5.03817 10.6665 4.7239 10.6665 4.52864 10.8618C4.33337 11.057 4.33337 11.3713 4.33337 11.9998L4.33337 14.6665"
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BranchesIcon;
