import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import Footer from '../../molecules/footer/Footer';

const PrivacyPolicyPage = () => {

  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">POLÍTICA DE PRIVACIDAD</h1>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
                <p className="font-montserratRegular text-left">A través de este sitio web no se recaban datos de carácter personal de los usuarios sin su conocimiento, ni se ceden a terceros.</p>
            </div>

            <div className="mb-4">
                <p className="font-montserratRegular text-left">El portal del que es titular La Sonrisa de Deva contiene enlaces a sitios web de terceros, cuyas políticas de privacidad son ajenas a la Asociación. Al acceder a tales sitios web usted puede decidir si acepta sus políticas de privacidad y de cookies.</p>
            </div>

            <div className="mb-4">
                <p className="font-montserratRegular text-left">Con carácter general, si navega por internet usted puede aceptar o rechazar las cookies de terceros desde las opciones de configuración de su navegador.</p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Quién es el responsable del tratamiento de los datos?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                El responsable del tratamiento de los datos es &quot;La Sonrisa de Deva&quot; con NIF G-44662633 e Inscrita en el Registro de Asociaciones del Principado de Asturias: Sección: 1ª /Número 13469.</p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                El tratamiento de sus datos realizados se llevarán a cabo de acuerdo con lo indicado en el artículo 6 del Reglamento General de Protección de Datos.</p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Por cuánto tiempo conservaremos sus datos personales?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Sus datos, serán conservados el tiempo mínimo necesario para la correcta prestación del servicio ofrecido así como para atender las responsabilidades que se pudieran derivar del mismo y de cualquier otra exigencia legal.
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Qué tipo de información recolectamos?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Recibimos, recopilamos y almacenamos cualquier información que ingrese en nuestro sitio web o nos proporciones de otra manera. Podemos usar herramientas de software para medir y recopilar información de la sesión, incluidos los tiempos de respuesta de la página, la duración de las visitas a determinadas páginas, la información de interacción de la página y los métodos utilizados para navegar fuera de la página. También recopilamos información de identificación personal (incluido nombres, correo electrónico, comunicaciones), comentarios, sugerencias, reseñas, recomendaciones, perfil personal y datos para hacerte socio o voluntario. A estos efectos, utilizamos la información estadística elaborada por el Proveedor de Servicios de Internet.
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Cómo recopilamos información?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Cuando interaccionas con nuestra página web, como parte del proceso, recopilamos información personal que nos proporcionas (aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones y servicios que en ella existen), especialmente en formularios. Ésta será utilizada solo para los motivos específicos indicados anteriormente.
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Por qué recopilamos dicha información personal?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Recopilamos dicha información personal y no personal para los siguientes propósitos:</p>
                <ul>
                  <li>- Para proporcionar y operar los servicios</li>
                  <li>- Para proporcionar a nuestros usuarios asistencia continua al cliente y soporte técnico</li>
                  <li>- Para poder contactar a nuestros visitantes y usuarios con avisos generales y personalizados relacionados con el servicio y mensajes promocionales</li>
                  <li>- Para crear datos estadísticos agregados y otra información no personal agregada o deducida, que podamos utilizar para proporcionar y mejorar nuestros servicios</li>
                  <li>- Para cumplir con las leyes y regulaciones aplicables.</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Cuáles son los derechos de los interesados?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Los derechos de protección de datos que podrán ejercer los interesados, cuando procedan, son:</p>
                <ul>
                  <li>- Derecho a solicitar el acceso a los datos personales relativos al interesado.</li>
                  <li>- Derecho de rectificación o supresión.</li>
                  <li>- Derecho de oposición.</li>
                  <li>- Derecho a solicitar la limitación de su tratamiento.</li>
                  <li>- Derecho a la portabilidad de los datos.</li>
                  <li>- Derecho a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de datos.</li>
                </ul>
            </div>

            <div className="mb-4">
                <p className="font-montserratRegular text-left">Los titulares de los datos personales obtenidos, podrán ejercer sus derechos de protección de datos personales dirigiendo una comunicación por escrito al correo electrónico habilitado a tal efecto, lasonrisadedeva@gmail.com</p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• Reclamaciones ante las autoridades de protección de datos</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Podrá ejercer su derecho a reclamar ante la Agencia Española de Protección de Datos, como autoridad de control, ubicada en la Calle Jorge Juan 6, 28001 Madrid, o en la página web www.aepd.es
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Cómo nos comunicamos con vosotros?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Podemos comunicarnos contigo para para enviar actualizaciones sobre nuestra web, o cuando sea necesario para contactarte para hacer cumplir nuestro Acuerdo de usuario, las leyes nacionales aplicables y cualquier acuerdo que podamos tener contigo. A estos efectos, podemos comunicarnos contigo por correo electrónico, teléfono, mensajes de texto y correo postal.
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• ¿Cómo pueden los visitantes retirar su consentimiento?</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Si no deseas que procesemos tus datos, contáctanos a lasonrisadedeva@gmail.com
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">• Actualizaciones de política de privacidad</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, por lo tanto, revísala con frecuencia. Los cambios y aclaraciones tendrán efecto inmediatamente después de su publicación en la página web. Si realizamos cambios sustanciales a esta política, te notificaremos que se ha actualizado, para que sepas qué información recopilamos, cómo la usamos y en qué circunstancias, si corresponde, usamos o divulgamos la información.
                </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;