import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

const LegendModal = ({ isOpen, handleClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white w-full max-w-md p-6 rounded-lg">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-montserratBold text-primaryBlue dark:text-white">
                                Leyenda de estados
                            </h3>
                            <button
                                className="text-primaryBlue text-2xl hover:text-gray-800"
                                onClick={handleClose}
                            >
                                <IoIosCloseCircle />
                            </button>
                        </div>
                        
                        <div className="p-4 md:p-5 space-y-4">
                           <div className="flex items-center">
                               <FaBoxOpen className="text-mustardBox text-2xl mr-3" />
                                <p className="text-base font-montserratBold leading-relaxed text-darkGrey dark:text-gray-400">
                                    En preparación
                                </p>
                            </div>
                             <div className="flex items-center">
                                 <FaPaperPlane className="text-primaryBlue text-2xl mr-3" />
                                <p className="text-base font-montserratBold leading-relaxed text-darkGreydark:text-gray-400">
                                   Enviado
                                </p>
                            </div>
                             <div className="flex items-center">
                                 <FcCancel className="text-redBin text-2xl mr-3" />
                                <p className="text-base font-montserratBold leading-relaxed text-darkGreydark:text-gray-400">
                                   Cancelado
                                </p>
                           </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default LegendModal;