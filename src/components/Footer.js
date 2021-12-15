import { Link } from 'react-router-dom'

import logo2 from '../assets/images/logo2.svg'


const Footer = () => {

    return <>
        <section className="row footer" id="row-correction">
            <section className="col-lg col-12 col-sm-6">
                <img src={logo2} alt="logo" />
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>ACERCA DE NOSOTROS</h3>
                <Link className="rrd-link" to="/quienes-somos">Quiénes Somos</Link>
                <Link className="rrd-link" to="/proyectos">Proyectos</Link>
                <Link className="rrd-link" to="/contactos">Contactos</Link>
                <Link className="rrd-link" to="/galeria">Galería</Link>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CONTÁCTENOS</h3>
                <span>+593 99 8799 9739</span>
                <span>info@lacarvas.com</span>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CAPACITACIONES</h3>
                <i className="bi bi-whatsapp" />
                <i className="bi bi-facebook" />
                <i className="bi bi-instagram" />
            </section>
        </section>
    </>
}

export default Footer
