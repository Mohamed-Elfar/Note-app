import React, { useState } from "react";
import {
  FaEllipsisH,
  FaMarkdown,
  FaUpload,
  FaThumbtack,
  FaTrash,
} from "react-icons/fa";

const DropdownMenu = ({
  onMarkdownToggle,
  onPublish,
  onMoveToTrash,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="w-6.5 h-6.5 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-md hover:bg-gray-700"
      >
        <FaEllipsisH />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 text-sm text-gray-700">
            <button
              onClick={onMarkdownToggle}
              className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
            >
              <FaMarkdown className="text-lg" /> Markdown
            </button>
            <button
              onClick={onPublish}
              className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
            >
              <FaUpload className="text-lg" /> Publish
            </button>
            <button
              onClick={onMoveToTrash}
              className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-red-600"
            >
              <FaTrash className="text-lg" /> Move to Trash
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;