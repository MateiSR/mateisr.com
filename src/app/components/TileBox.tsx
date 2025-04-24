import React from 'react';
import { TileProps } from '../types/TileComponents';

const TileBox: React.FC<TileProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`flex flex-1 h-full w-full gap-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default TileBox;

