import React from 'react'
import Sidebar from '../../molecules/sidebar/Sidebar'
import CardWithIcon from "../../atoms/cardWithIcon/CardWithIcon"
import { FaShoppingBag } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6"
import { FaUserCog } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Link } from "react-router-dom"

const PanelAdminPage = () => {
  return (
    <>
      <Sidebar />
      <section>
        <div className="flex flex-col max-w-4xl mx-auto rounded-lg p-6 px-10 bg-primaryLila shadow-2xl sm:rounded-xl border-gray-600 my-2 items-center">
          <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-3">GESTIÓN DE LA PÁGINA</h1>
          <hr className="w-full my-3 border-gray-300" />

          <div className="flex flex-col justify-center rounded-lg p-4 gap-8">
            <div className="flex flex-wrap font-montserratRegular text-darkGrey">
              <Link to="/admin/productos-solicitados">
                <CardWithIcon
                  backgroundColor="white"
                  color="darkGrey"
                  title="Productos solicitados"
                  Icon={FaShoppingBag}
                  iconColor="darkBlue"
                />
              </Link>
              <Link to="/admin/eventos">
                <CardWithIcon
                  backgroundColor="white"
                  color="darkGrey"
                  title="Agenda de eventos"
                  Icon={FaCalendarDays}
                  iconColor="darkBlue"
                />
              </Link>
            </div>

            <div className="flex flex-wrap font-montserratRegular">
              <Link to="/admin/productos">
                <CardWithIcon
                  backgroundColor="white"
                  color="darkGrey"
                  title="Gestión de productos"
                  Icon={FaUserCog}
                  iconColor="darkBlue"
                />
              </Link>
              <Link to="/admin/agregar-producto">
                <CardWithIcon
                  backgroundColor="white"
                  color="darkGrey"
                  title="Agregar producto"
                  Icon={FaHandHoldingMedical}
                  iconColor="darkBlue"
                />
              </Link>
            </div>
          </div>
        </div >
     </section>
    </>
  )
}

export default PanelAdminPage

