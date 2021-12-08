import logo2 from '../assets/images/logo2.svg'



const Footer = () => {

    return <>
        <section className="row footer" id="row-correction">
            <section className="col-lg col-12 col-sm-6">
                <img src={logo2} alt="logo" />
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>ACERCA DE NOSOTROS</h3>
                <span>Quiénes Somos</span>
                <span>Inscripciones</span>
                <span>Inicio</span>
                <span>Calendario y Noticias</span>
                <span>Contáctenos</span>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CONTÁCTENOS</h3>
                <span>+506-8790-6062</span>
                <span>info@lacarvas.com</span>
                <span>www.lacarvas.com</span>
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
