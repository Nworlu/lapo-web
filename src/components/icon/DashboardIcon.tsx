import React from "react";

type Props = {
  width?: string;
  height?: string;
  color: string;
};
const DashboardIcon = (props: Props) => {
  const { width = "16", height = "16", color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_112_6151)">
        <path
          d="M5.99975 14.6667L5.83266 12.3274C5.74283 11.0697 6.73889 10 7.99975 10C9.26061 10 10.2567 11.0697 10.1668 12.3274L9.99975 14.6667"
          stroke={color}
        />
        <path
          d="M1.56776 8.80913C1.33241 7.27766 1.21474 6.51192 1.50427 5.83308C1.79381 5.15424 2.43618 4.68978 3.72092 3.76087L4.68082 3.06683C6.27902 1.91127 7.07812 1.3335 8.00016 1.3335C8.9222 1.3335 9.7213 1.91127 11.3195 3.06683L12.2794 3.76087C13.5641 4.68978 14.2065 5.15424 14.4961 5.83308C14.7856 6.51192 14.6679 7.27766 14.4326 8.80913L14.2319 10.1151C13.8982 12.2861 13.7314 13.3716 12.9528 14.0192C12.1742 14.6668 11.0359 14.6668 8.75937 14.6668H7.24095C4.96438 14.6668 3.8261 14.6668 3.0475 14.0192C2.26889 13.3716 2.10208 12.2861 1.76845 10.1151L1.56776 8.80913Z"
          stroke={color}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_112_6151">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardIcon;
