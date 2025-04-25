import { ReactNode } from "react";

export interface TLineProps {
  children: ReactNode;
  className?: string;
  [key: string]: any; // For any additional props
}

