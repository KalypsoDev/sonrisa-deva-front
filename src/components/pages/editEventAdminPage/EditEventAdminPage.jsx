import EditEventFormAdmin from '../../molecules/editEventFormAdmin/EditEventFormAdmin'
import Sidebar from '../../molecules/sidebar/Sidebar'

const EditEventAdminPage = () => {
  return (
    <>
      <Sidebar />
      <EditEventFormAdmin
        title={"Editar Evento"} />
    </>
  )
}

export default EditEventAdminPage