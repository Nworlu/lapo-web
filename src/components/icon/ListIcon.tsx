import React from "react";

type Props = {
  width?: string;
  height?: string;
  color: string;
};
const ListIcon = (props: Props) => {
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
        d="M14 8.00016L6 8.00016M14 4.00016L6 4.00016M14 12.0002L6 12.0002M3.33333 8.00016C3.33333 8.36835 3.03486 8.66683 2.66667 8.66683C2.29848 8.66683 2 8.36835 2 8.00016C2 7.63197 2.29848 7.3335 2.66667 7.3335C3.03486 7.3335 3.33333 7.63197 3.33333 8.00016ZM3.33333 4.00016C3.33333 4.36835 3.03486 4.66683 2.66667 4.66683C2.29848 4.66683 2 4.36835 2 4.00016C2 3.63197 2.29848 3.3335 2.66667 3.3335C3.03486 3.3335 3.33333 3.63197 3.33333 4.00016ZM3.33333 12.0002C3.33333 12.3684 3.03486 12.6668 2.66667 12.6668C2.29848 12.6668 2 12.3684 2 12.0002C2 11.632 2.29848 11.3335 2.66667 11.3335C3.03486 11.3335 3.33333 11.632 3.33333 12.0002Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListIcon;
