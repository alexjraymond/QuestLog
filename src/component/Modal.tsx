import React, { useState } from "react";

export function Modal() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden={!isModalVisible}
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          isModalVisible ? "block" : "hidden"
        }`}
      >
        <button
          type="button"
          onClick={() => setModalVisible(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Close
        </button>
      </div>
    </>
  );
}