import { ReactNode } from "react";

export interface CollapseBoxProps {
  collapsedContent: ReactNode;
  expandedContent: ReactNode;
  className?: string;
  copyText?: string;
}
