import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}
function index({ children, className }: IProps) {
    return (
        <button
            className={`text-xl font-bold text-white bg-primary py-5 px-8 rounded-full ${className}`}
        >
            {children}
        </button>
    );
}

export default index;
