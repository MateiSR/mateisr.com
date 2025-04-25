import React from 'react';
import { TLineProps } from '../types/TerminalComponents';

const TerminalLine: React.FC<TLineProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`terminal-line flex items-center text-sm font-mono ${className}`}
      {...props}
    >
      <span className="text-green-500 pr-1.5">[root@mateisr ~]# </span>
      {children}
    </div>
  );
}

export default TerminalLine;
