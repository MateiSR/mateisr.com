"use client";
import { useRef, useState } from 'react';
import { CollapseBoxProps } from '../types/CollapseBoxTypes';


export default function CollapseBox({
  collapsedContent,
  expandedContent,
  className = "bg-[#282727]/50 p-2 mt-1 overflow-x-auto max-w-[100%]",
  copyText
}: CollapseBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null); // prevent double click from firing the click action twice


  const copyToClipboard = () => {
    if (!copyText) return;

    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClick = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }

    clickTimeout.current = setTimeout(() => {
      setIsExpanded(!isExpanded);
    }, 200);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
    if (copyText) {
      copyToClipboard();
    }
  };

  return (
    <div className="mt-2">
      <div
        className={`${className} cursor-pointer relative`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <div className="font-mono break-all">
          {isExpanded ? expandedContent : collapsedContent}
        </div>
        {isCopied && copyText && (
          <div className="absolute right-2 top-2 bg-[#282727]/90 text-white px-2 py-1 rounded text-xs">
            Copied to clipboard!
          </div>
        )}
        <div className="mt-2 text-right text-white/50 text-xs">
          {isExpanded ? "Click to collapse" : "Click to expand"}
          {copyText && " • Double-click to copy"}
        </div>
      </div>
    </div>
  );
}
