import React from 'react';

const AssociationCard = ({ iconPosition, icon, title, description, additionalText }) => {
    return (
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md flex flex-col font-montserratRegular">
            <div className="flex items-center mb-3 flex-col md:flex-row">
                {iconPosition === 'left' && (
                    <div className='border-b p-2 mr-3'>
                        {icon}
                    </div>
                )}
                <h5 className="text-xl font-montserratBold tracking-tight text-darkGrey">{title}</h5>
                {iconPosition === 'right' && (
                    <div className='border-b p-2 ml-3'>
                        {icon}
                    </div>
                )}
            </div>
            <div>
                <p className=" text-darkGrey">{description}</p>
                {additionalText && (
                    <p className="mt-2 text-base text-darkGrey">{additionalText}</p>
                )}
            </div>
        </div>
    )
}

export default AssociationCard
