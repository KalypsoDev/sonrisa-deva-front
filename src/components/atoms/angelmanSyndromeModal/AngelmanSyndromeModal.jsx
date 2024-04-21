import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

const AngelmanSyndromeModal = ({ therapy, handleClose }) => {
  const { modalTitle, modalDescription } = therapy || {};

  return (
    <>
      {therapy && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-montserratBold text-primaryBlue dark:text-white">
                {modalTitle}
              </h3>
              <button className="text-primaryBlue text-2xl hover:text-gray-800" onClick={handleClose}>
                <IoIosCloseCircle />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="flex items-center">
                <p className="text-base font-montserratBold leading-relaxed text-darkGrey dark:text-gray-400">
                  {modalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AngelmanSyndromeModal;