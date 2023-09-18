import React, { useState } from "react";

interface QuestProps {
  id: string;
  questTitle: string;
  questDescription: string;
}

const Modal: React.FC<QuestProps> = ({ questTitle, questDescription }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [editableTitle, setEditableTitle] = useState(questTitle);
  const [editableDescription, setEditableDescription] = useState(questDescription);

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
          className="bg-white p-4 rounded w-1/2"
        >
          <button
            type="button"
            onClick={() => setModalVisible(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Close
          </button>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Quest Title</label>
              <input
                type="text"
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="mt-1 p-2 w-full rounded border"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Quest Description</label>
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="mt-1 p-2 w-full h-20 rounded border"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;