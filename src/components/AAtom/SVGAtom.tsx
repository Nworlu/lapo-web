import * as svgs from "../../assets/svgs";
import React, { createElement } from "react";

type Props = {
  iconName: keyof typeof svgs;
  color?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const SVGAtom = (props: Props) => {
  return createElement(svgs[props.iconName], {
    width: props.width ?? null,
    height: props.height ?? null,
    color: props.color ?? null,
    onClick: props.onClick ?? null,
    style: props.style ?? null,
    className: props.className ?? null,
  });
};

export default React.memo(SVGAtom);
