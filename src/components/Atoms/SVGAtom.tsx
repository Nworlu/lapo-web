import * as svgs from "@/assets/svgs";
import React from "react";

type Props = {
  iconName: keyof typeof svgs;
  color?: string;
  fill?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const SVGAtom = (props: Props) => {
  return React.createElement(svgs[props.iconName], {
    width: props.width,
    height: props.height,
    color: props.color,
    fill: props.fill ?? props.color,
    onClick: props.onClick,
    style: props.style,
    className: props.className,
  });
};

export default React.memo(SVGAtom);

// import * as svgs from "@/assets/svgs";
// import React from "react";

// type Props = {
//   iconName: keyof typeof svgs;
//   color?: string;
//   fill?: string;
//   width?: number;
//   height?: number;
//   onClick?: () => void;
//   style?: React.CSSProperties;
//   className?: string;
// };

// const SVGAtom: React.FC<Props> = ({
//   iconName,
//   color,
//   fill,
//   width,
//   height,
//   onClick,
//   style,
//   className,
// }) => {
//   // Ensure the icon component exists
//   const IconComponent = svgs[iconName];

//   if (!IconComponent || typeof IconComponent !== "function") {
//     console.error(
//       `SVGAtom: "${iconName}" is not a valid React component.`,
//       svgs
//     );
//     return null;
//   }

//   return (
//     <IconComponent
//       width={width}
//       height={height}
//       onClick={onClick}
//       className={className}
//       style={{ ...style, fill: fill ?? color }}
//     />
//   );
// };

// export default React.memo(SVGAtom);
