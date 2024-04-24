import EditEventFormAdmin from '../../molecules/editEventFormAdmin/EditEventFormAdmin'
import Sidebar from '../../molecules/sidebar/Sidebar'

const EditEventAdminPage = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <section>
          <Sidebar />
          <EditEventFormAdmin
            title={"Editar Evento"} />
        </section>
      ) : (
        <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
          No estás autorizado para acceder a esta página.
        </div>
      )}
    </>
  )
}

export default EditEventAdminPage