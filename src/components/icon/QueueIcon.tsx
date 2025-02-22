import React from "react";

type Props = {
  width?: string;
  height?: string;
  color: string;
};
const QueueIcon = (props: Props) => {
  const { width = "16", height = "16", color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_112_6189)">
        <path
          d="M1.33337 7.99988L7.76153 11.214C7.84898 11.2577 7.89271 11.2795 7.93857 11.2882C7.9792 11.2958 8.02088 11.2958 8.06151 11.2882C8.10737 11.2795 8.1511 11.2577 8.23855 11.214L14.6667 7.99988M1.33337 11.3332L7.76153 14.5473C7.84898 14.591 7.89271 14.6129 7.93857 14.6215C7.9792 14.6291 8.02088 14.6291 8.06151 14.6215C8.10737 14.6129 8.1511 14.591 8.23855 14.5473L14.6667 11.3332M1.33337 4.66655L7.76153 1.45247C7.84898 1.40874 7.89271 1.38688 7.93857 1.37827C7.9792 1.37065 8.02088 1.37065 8.06151 1.37827C8.10737 1.38688 8.1511 1.40874 8.23855 1.45247L14.6667 4.66655L8.23855 7.88062C8.1511 7.92435 8.10737 7.94621 8.06151 7.95482C8.02088 7.96244 7.9792 7.96244 7.93857 7.95482C7.89271 7.94621 7.84898 7.92435 7.76153 7.88062L1.33337 4.66655Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_112_6189">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QueueIcon;
