import { TLineProps } from "../types/TerminalComponents";

const TerminalLine: React.FC<TLineProps> = ({ children, className }) => {
  const promptText = "[root@mateisr ~]#"; // Or dynamically generate this

  return (
    <div className={`flex flex-wrap items-baseline ${className || ''}`}>
      {/* Prompt part */}
      <span className="text-[#935751] mr-2 whitespace-nowrap">{promptText}</span>
      {/* Command part */}
      <span className="text-white break-all">{children}</span>
    </div>
  );
};

export default TerminalLine;
