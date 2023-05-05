import React from "react";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

interface QuestProps {
  questTitle: string;
  questDescription?: string;
}

export function Quest(props: React.ComponentPropsWithoutRef<"li"> & QuestProps) {
  return (
    <li className="border-b border-stone-300 pb-2 w-full grid grid-cols-[auto,1fr,auto] items-center mt-3">
      <div className="flex items-center px-2">
        <input
          type="checkbox"
          className="appearance-none w-4 h-4 border border-stone-900 rounded-full bg-stone-200 checked:bg-emerald-200"
          aria-label={`Mark ${props.questTitle} as completed`}
        />
      </div>
      <div>
        <h2 className="text-left block">{props.questTitle}</h2>
        {props.questDescription && (
          <p className="line-clamp-2 text-gray-500">{props.questDescription}</p>
        )}
      </div>
      <div className="flex items-center justify-end space-x-2 px-2">
        <BsTrash size={20} />
        <CiEdit size={24} />
      </div>
    </li>
  );
}