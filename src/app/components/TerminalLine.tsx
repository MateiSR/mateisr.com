import React from 'react';
import { TLineProps } from '../types/TerminalComponents';

const TerminalLine: React.FC<TLineProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`terminal-line flex items-center font-mono ${className}`}
      {...props}
    >
      <span className="text-[#935751] pr-4">[root@mateisr ~]# </span>
      {children}
    </div>
  );
}

export default TerminalLine;
