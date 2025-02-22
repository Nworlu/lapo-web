import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
};
const AppWrapper = (props: Props) => {
  const { children, className } = props;
  return (
    <section
      className={`bg-[#F8FBFF] w-full h-full lg:px-5 pt-2 flex-1 overflow-y-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default AppWrapper;
