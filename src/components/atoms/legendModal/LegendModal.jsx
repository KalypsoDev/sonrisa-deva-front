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
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Leyenda de estados
                            </h3>
                            <button
                                className="text-gray-600 hover:text-gray-800"
                                onClick={handleClose}
                            >
                                <IoIosCloseCircle />
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <FaBoxOpen /> En preparación
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <FaPaperPlane /> Enviado
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <FcCancel /> Cancelado
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default LegendModal;


