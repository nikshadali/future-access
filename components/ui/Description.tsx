import { type ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export default function Description({
  children,
  className = "",
}: DescriptionProps) {
  return (
    <p className={`text-[#838383] text-[18px] mb-4 mt-4 ${className}`}>
      {children}
    </p>
  );
}