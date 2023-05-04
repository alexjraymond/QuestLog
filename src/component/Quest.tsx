import React from "react";
import { BsFillTrashFill }from 'react-icons/bs'

interface QuestProps {
    questTitle: string;
    questDescription: string;
}

export function Quest(props: React.ComponentPropsWithoutRef<"li"> & QuestProps) {
return (
    <li className="border-b-2 border-slate-700 pb-2 w-full grid grid-rows-2 grid-flow-col gap-x-4 mt-3">
        <input
            type="checkbox"
            className="row-span-2 appearance-none w-5 h-5 border-2 border-slate-900 rounded-full bg-slate-400 checked:bg-emerald-700" 
        />
        <span 
            className="col-span-2 text-left">{props.questTitle}
        </span>
        <p
        className="line-clamp-2 row-span-1 text-gray-500"
        >
            {props.questDescription}
        </p>
        <BsFillTrashFill />
    </li>
    )
} 