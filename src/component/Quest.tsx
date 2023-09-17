import React, { useCallback, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { api } from "~/utils/api";
import { Button } from "./Button";
import { prisma } from "~/server/db";
import Trpc from "~/pages/api/trpc/[trpc]";
import { Modal } from "./Modal";

interface QuestProps {
  id: string;
  questTitle: string;
  questDescription?: string;
}



export function Quest(props: React.ComponentPropsWithoutRef<"li"> & QuestProps) {
  const [isModalVisible, setModalVisible] = useState(false);


  const trpc = api.useContext();

  const { mutate: deleteQuest} = api.generate.deleteQuest.useMutation({

    onSettled: async () => {
      console.log('mutating')
      await trpc.generate.getQuests.invalidate()

    }   
  });

  const { mutate: updateQuest } = api.generate.updateQuest.useMutation({
    onSettled: async () => {
      await trpc.generate.getQuests.invalidate();
    }
  });

  return (
    <>
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
        <Button onClick={() => {
            console.log(`Deleting quest with id: ${props.id}`)
            deleteQuest(props.id)}} variant="ghost">
          <BsTrash size={20}  />
        </Button>
        <Button onClick={() => {
            console.log('editing quest')
            }} variant="ghost">
          <CiEdit size={24} />
        </Button>
      </div>
    </li>

        <Modal  
          questTitle={props.questTitle} 
          questDescription={props.questDescription}
          id={props.id}
        />
      
    </>
  );
}