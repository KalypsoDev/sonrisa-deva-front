import React from 'react';

const AssociationCard = ({ icon, title, description, additionalText }) => {
    const isList = Array.isArray(description);

    return (
        <div className="max-w-xl w-full bg-white border border-gray-200 rounded-lg shadow-md flex flex-col font-montserratRegular m-3 md:m-8 p-5">
            <div className="flex items-center justify-center mb-3 flex-col md:flex-row">
                <div className='border-b p-2 mr-3'>
                    {icon}
                </div>
                <h5 className="text-2xl font-montserratBold tracking-tight text-darkGrey">{title}</h5>
            </div>
            <div>
                {isList ? (
                    <ul className="text-darkGrey">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-darkGrey">{description}</p>
                )}
                <p className="mt-2 text-base text-darkGrey">{additionalText}</p>
            </div>
        </div>
    )
}

export default AssociationCard;
