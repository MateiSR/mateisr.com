import { ReactNode } from "react";

export interface TileProps {
  children: ReactNode;
  className?: string;
  [key: string]: any; // For any additional props
}
