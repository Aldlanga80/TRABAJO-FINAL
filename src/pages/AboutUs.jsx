import { Layout } from "../components/Layout"

const AboutUs = () => {
  return (
    <Layout>
      <div className="abouts-base">
        <h1 className="title-about">Sobre Nosotros</h1>
        <section className="Section-about">
          <h2>¿De que trata el proyecto?</h2>
          <p>En este proyecto simulamos un tienda online usando la FakeStoreApi para practicar con API y aprender el registo, manejo de autenticación y navegacion.</p>
          <h2>A quién está dirigido</h2>
          <p> Este dirigido a las personas que quieren aprender sobre desarrollo wed, creacion de aplicaciones, el manejo de formulario, autenticación, con el uso de APis externas o sumaladas.</p>
          <h2>Que tecnologías o enfoque usaron</h2>
          <ul>
            <li><b>React:</b>Biblioteca para construir interfaces dinámicas con componentes.</li>
            <li><b>React Router:</b> Manejo de navegación sin recarga entre páginas.</li>
            <li><b>Context:</b> Estado global para autenticación (login, logout, registro).</li>
            <li><b>Fetch:</b>Peticiones HTTP para consumir la FakeStoreAPI.</li>
            <li><b>FakeStoreApi:</b> API pública simulada con datos de productos y usuarios.</li>
            <li><b>Hooks de react:</b>useState, useContext, useEffect para manejar estado y efectos.</li>
            <li><b>Formulario controlados:</b>Inputs manejados con estado React para control total.</li>
            <li><b>Manejo de errores y validaciones:</b> Mensajes claros para usuario en cada paso.</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}


export { AboutUs }