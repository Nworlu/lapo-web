import React from "react";

type Props = {
  width?: string;
  height?: string;
  color: string;
};
const RequestIcon = (props: Props) => {
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
        d="M8.99978 2.6665H6.99978C4.49407 2.6665 3.24121 2.6665 2.40475 3.32708C2.27097 3.43274 2.14724 3.54919 2.03498 3.6751C1.56786 4.19905 1.41163 4.8966 1.35938 5.99984H14.6402C14.5879 4.8966 14.4317 4.19905 13.9646 3.6751C13.8523 3.54919 13.7286 3.43274 13.5948 3.32708C12.7584 2.6665 11.5055 2.6665 8.99978 2.6665Z"
        fill="white"
      />
      <path
        d="M7.33337 13.3332H7.00004C4.49432 13.3332 3.24146 13.3332 2.40501 12.6726C2.27123 12.5669 2.1475 12.4505 2.03524 12.3246C1.33337 11.5373 1.33337 10.3582 1.33337 7.99984C1.33337 5.64151 1.33337 4.46235 2.03524 3.6751C2.1475 3.54919 2.27123 3.43274 2.40501 3.32708C3.24146 2.6665 4.49432 2.6665 7.00004 2.6665H9.00004C11.5058 2.6665 12.7586 2.6665 13.5951 3.32708C13.7289 3.43274 13.8526 3.54919 13.9648 3.6751C14.5972 4.3844 14.6598 5.41183 14.666 7.33317"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1.33337 6H14.6667" stroke={color} strokeLinejoin="round" />
      <path
        d="M9.33337 11.9997C9.33337 11.9997 10 11.9997 10.6667 13.333C10.6667 13.333 12.7844 9.99967 14.6667 9.33301"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RequestIcon;
