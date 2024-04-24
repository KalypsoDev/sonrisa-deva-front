import React, { useEffect, useState } from 'react';
import Sidebar from '../../molecules/sidebar/Sidebar';

const PanelAdminPage = ({ isAuthenticated }) => {

  return (
    <>
      {isAuthenticated ? (
        <Sidebar />
      ) : (
        <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
          No estás autorizado para acceder a esta página.
        </div>
      )}
    </>
  );
};

export default PanelAdminPage;
