import React from "react";
import { BsTrash }from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'

interface QuestProps {
    questTitle: string;
    questDescription: string;
}

export function Quest(props: React.ComponentPropsWithoutRef<"li"> & QuestProps) {
return (
    <li className="border-b border-stone-300 pb-2 w-full grid grid-rows-2 grid-flow-col gap-x-4 mt-3">
        <input
            type="checkbox"
            className="row-span-2 appearance-none w-4 h-4 border border-stone-900 rounded-full bg-stone-200 checked:bg-emerald-200" 
        />
        <span 
            className="col-span-2 text-left">{props.questTitle}
        </span>
        <p
        className="line-clamp-2 row-span-1 text-gray-500"
        >
            {props.questDescription}
        </p>
        <div>
            <BsTrash />
            <CiEdit />
        </div>
    </li>
    )
} 