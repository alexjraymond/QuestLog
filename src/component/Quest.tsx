import React, { useCallback } from "react";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { api } from "~/utils/api";
import { Button } from "./Button";
import { prisma } from "~/server/db";
import Trpc from "~/pages/api/trpc/[trpc]";

interface QuestProps {
  questTitle: string;
  questDescription?: string;
}



export function Quest(props: React.ComponentPropsWithoutRef<"li"> & QuestProps) {

  const trpc = api.useContext();

  const { mutate: deleteQuest} = api.generate.deleteQuest.useMutation({

    onSettled: async () => {
      await trpc.generate.getQuests.invalidate()
    }   
  });

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
        <Button onClick={() => {deleteQuest}} variant="ghost">
        <BsTrash size={20}  /></Button>
        <CiEdit size={24} />
      </div>
    </li>
  );
}