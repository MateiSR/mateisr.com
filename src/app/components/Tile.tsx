import React from 'react';
import { TileProps } from '../types/TileComponents';

const Tile: React.FC<TileProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`tile flex flex-col flex-1 p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tile;
