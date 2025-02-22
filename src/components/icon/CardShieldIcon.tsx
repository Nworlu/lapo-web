import React from "react";
type Props = {
  width?: string;
  height?: string;
  color: string;
};
const CardShieldIcon = (props: Props) => {
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
        d="M14.6667 6.66683H1.33337M14.6667 7.3335V5.46683C14.6667 4.72009 14.6667 4.34673 14.5214 4.06151C14.3936 3.81063 14.1896 3.60665 13.9387 3.47882C13.6535 3.3335 13.2801 3.3335 12.5334 3.3335H3.46671C2.71997 3.3335 2.3466 3.3335 2.06139 3.47882C1.8105 3.60665 1.60653 3.81063 1.4787 4.06151C1.33337 4.34672 1.33337 4.72009 1.33337 5.46683V10.5335C1.33337 11.2802 1.33337 11.6536 1.4787 11.9388C1.60653 12.1897 1.8105 12.3937 2.06139 12.5215C2.3466 12.6668 2.71997 12.6668 3.46671 12.6668H7.66671M12 14.0002C12 14.0002 14 13.0469 14 11.617V9.94875L12.5416 9.42763C12.1912 9.30212 11.808 9.30212 11.4576 9.42763L10 9.94875V11.617C10 13.0469 12 14.0002 12 14.0002Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CardShieldIcon;
