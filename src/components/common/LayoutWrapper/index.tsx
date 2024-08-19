import React from "react";

interface IProps {
    children: React.ReactNode;
}
function LayoutWrapper({ children }: IProps) {
    return <div className="mx-auto w-[95%] xl:w-[1200px]">{children}</div>;
}

export default LayoutWrapper;
