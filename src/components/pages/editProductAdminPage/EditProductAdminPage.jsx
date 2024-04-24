import Sidebar from '../../molecules/sidebar/Sidebar'
import EditProductFormAdmin from '../../molecules/editProductFormAdmin/EditProductFormAdmin';

const EditProductAdminPage = () => {

    return (
        <>
            <Sidebar />
            <EditProductFormAdmin
                title="Editar Producto"
            />
        </>
    );
}

export default EditProductAdminPage;
