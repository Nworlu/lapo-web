import React from "react";
type Props = {
  width?: string;
  height?: string;
  color: string;
};
const HourGlassIcon = (props: Props) => {
  const { width = "17", height = "16", color } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.49992 12.3335H10.4999M4.89992 1.3335H12.0999C12.4733 1.3335 12.66 1.3335 12.8026 1.40616C12.928 1.47007 13.03 1.57206 13.0939 1.6975C13.1666 1.84011 13.1666 2.02679 13.1666 2.40016V3.78317C13.1666 4.10929 13.1666 4.27236 13.1297 4.42581C13.0971 4.56185 13.0432 4.69191 12.9701 4.81121C12.8876 4.94576 12.7723 5.06107 12.5417 5.29167L10.5875 7.24592C10.3235 7.50993 10.1915 7.64193 10.142 7.79415C10.0985 7.92805 10.0985 8.07228 10.142 8.20617C10.1915 8.35839 10.3235 8.4904 10.5875 8.75441L12.5417 10.7087C12.7723 10.9393 12.8876 11.0546 12.9701 11.1891C13.0432 11.3084 13.0971 11.4385 13.1297 11.5745C13.1666 11.728 13.1666 11.891 13.1666 12.2172V13.6002C13.1666 13.9735 13.1666 14.1602 13.0939 14.3028C13.03 14.4283 12.928 14.5303 12.8026 14.5942C12.66 14.6668 12.4733 14.6668 12.0999 14.6668H4.89992C4.52655 14.6668 4.33987 14.6668 4.19726 14.5942C4.07182 14.5303 3.96983 14.4283 3.90591 14.3028C3.83325 14.1602 3.83325 13.9735 3.83325 13.6002V12.2172C3.83325 11.891 3.83325 11.728 3.87009 11.5745C3.90275 11.4385 3.95663 11.3084 4.02973 11.1891C4.11219 11.0546 4.22749 10.9393 4.45809 10.7087L6.41234 8.75441C6.67635 8.4904 6.80836 8.35839 6.85781 8.20617C6.90132 8.07228 6.90132 7.92805 6.85781 7.79415C6.80836 7.64193 6.67635 7.50992 6.41234 7.24592L4.45809 5.29167C4.22749 5.06107 4.11219 4.94576 4.02973 4.81121C3.95663 4.69191 3.90275 4.56185 3.87009 4.42581C3.83325 4.27236 3.83325 4.10929 3.83325 3.78317V2.40016C3.83325 2.02679 3.83325 1.84011 3.90591 1.6975C3.96983 1.57206 4.07182 1.47007 4.19726 1.40616C4.33987 1.3335 4.52655 1.3335 4.89992 1.3335Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HourGlassIcon;
