import React, { useState } from "react";
import Trpc from "~/pages/api/trpc/[trpc]";
import { api } from "~/utils/api";

interface QuestProps {
  id: string;
  questTitle: string;
  questDescription: string;
  isOpen: boolean;
  onClose: () => void;
  onUpdated?: () => void;
}

const Modal: React.FC<QuestProps> = ({ id, questTitle, questDescription, isOpen, onClose, onUpdated }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [editableTitle, setEditableTitle] = useState(questTitle);
  const [editableDescription, setEditableDescription] = useState(questDescription);

  const { mutate: updateQuest, isLoading } = api.generate.updateQuest.useMutation({
    onSuccess: () => {
      // Optionally refresh quest list or trigger any side effect after successful update
      if (onUpdated) onUpdated();
      onClose(); // Close the modal on successful update
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    updateQuest({
      id,
      questTitle: editableTitle,
      questDescription: editableDescription,
    });
  };

  return (
    <>
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${isModalVisible ? 'block' : 'hidden'}`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden={!isModalVisible}
          className="bg-neutral-700 p-4 rounded w-1/2"
        >

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Quest Title</label>
              <input
                type="text"
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="mt-1 p-2 w-full rounded border bg-neutral-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Quest Description</label>
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="mt-1 p-2 w-full h-20 rounded border bg-neutral-500"
              ></textarea>
            </div>
            <button type="submit" disabled={isLoading}>Save Changes</button>
          </form>

          <button
            type="button"
            onClick={onClose}
            className="text-white bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-neutral-600 dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;