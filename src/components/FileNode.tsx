import { useState } from "react";
import type { FileSystemItem } from "../data/FileSystem";

const FileNode = ({
  item,
  depth = 0,
}: {
  item: FileSystemItem;
  depth?: number;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="text-gray-800 select-none">
      {/* depth * 20 is taking care of moving on the left on each children component */}
      <div
        className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded cursor-pointer transition"
        style={{ paddingLeft: `${depth * 20}px` }}
        onClick={() => item.type === "folder" && setIsOpen(!isOpen)}
      >
        <span>{item.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"}</span>
        <span className={item.type === "folder" ? "font-bold" : ""}>
          {item.name}
        </span>
      </div>
      {/* recursion */}
      {isOpen && item.children && (
        <div>
          {item.children.map((child, index) => (
            // component is calling itself
            <FileNode key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNode;
