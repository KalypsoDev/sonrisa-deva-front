import Sidebar from '../../molecules/sidebar/Sidebar'
import EditProductFormAdmin from '../../molecules/editProductFormAdmin/EditProductFormAdmin';

const EditProductAdminPage = ({ isAuthenticated }) => {

    return (
        <>
            {isAuthenticated ? (
                <section>
                    <Sidebar />
                    <EditProductFormAdmin
                        title="Actualizar producto"
                    />
                </section>
            ) : (
                <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
                    No estás autorizado para acceder a esta página.
                </div>
            )}
        </>
    );
}

export default EditProductAdminPage;
