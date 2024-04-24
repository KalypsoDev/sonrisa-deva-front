import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

const AngelmanSyndromeModal = ({ therapyOrSymptom, handleClose }) => {
  const { modalTitle, modalDescription } = therapyOrSymptom || {};

  return (
    <>
      {therapyOrSymptom && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-montserratBold text-primaryBlue">
                {modalTitle}
              </h3>
              <button className="text-primaryBlue text-2xl hover:text-primaryBlue" onClick={handleClose}>
                <IoIosCloseCircle />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="flex items-center">
                <p className="text-base font-montserratRegular leading-relaxed text-darkGrey">
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