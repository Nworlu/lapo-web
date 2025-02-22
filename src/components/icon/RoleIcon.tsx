import React from "react";

type Props = {
  width?: string;
  height?: string;
  color: string;
};
const RoleIcon = (props: Props) => {
  const { width = "16", height = "16", color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_112_6181)">
        <path
          d="M8.00004 9.36456C6.52851 9.22707 5.02043 9.54595 3.71842 10.3212C2.77524 10.8828 0.302284 12.0296 1.80848 13.4645C2.54425 14.1655 3.3637 14.6668 4.39395 14.6668H8.66671"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3334 4.3335C10.3334 5.99035 8.99023 7.3335 7.33337 7.3335C5.67652 7.3335 4.33337 5.99035 4.33337 4.3335C4.33337 2.67664 5.67652 1.3335 7.33337 1.3335C8.99023 1.3335 10.3334 2.67664 10.3334 4.3335Z"
          stroke={color}
        />
        <path
          d="M11.9995 9.3335C11.1552 9.3335 10.6078 9.87189 9.96038 10.0681C9.69713 10.1479 9.56551 10.1878 9.51224 10.2441C9.45897 10.3003 9.44337 10.3825 9.41217 10.5469C9.07834 12.3058 9.80801 13.9319 11.5482 14.5648C11.7352 14.6328 11.8287 14.6668 12.0005 14.6668C12.1723 14.6668 12.2657 14.6328 12.4527 14.5648C14.1928 13.9319 14.9218 12.3058 14.5878 10.5469C14.5566 10.3825 14.541 10.3003 14.4877 10.244C14.4344 10.1878 14.3028 10.1479 14.0396 10.0682C13.3919 9.87193 12.8439 9.3335 11.9995 9.3335Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_112_6181">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RoleIcon;
