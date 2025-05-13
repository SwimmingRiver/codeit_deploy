import clsx from "clsx";
import React from "react";
type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  size?: "xs" | "sm" | "md";
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
};

export default function Badge({children,variant,size,outlined,rounded,withDot,className}:BadgeProps){
  const badgeClasses=clsx(
    "inline-flex flex items-center font-medium",{
      "text-xs px-1.5 py=0.5":size === "xs",
      "text-sm px-2.5 py=0.5":size === "sm",
      "text-md px-3 py=1":size === "md",
    },className
  )
return <span className={badgeClasses}>{children}</span>
}