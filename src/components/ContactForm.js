import building9 from '../assets/images/building9.png'


const ContactForm = ({ onHome }) => {

    const sendForm = e => {
        e.preventDefault()
        console.log('form submitted')
    }

    return (
        <section className="home-form">
            <div className="row" id="row-correction">
                {/* <div className="col-lg"> */}
                <div className={`col ${onHome ? 'mobile-hidden' : ''}`}>
                    <img src={building9} id="b-9" alt="building" />
                </div>
                <div className="col-lg">
                    <form onSubmit={sendForm}>
                        <h2>Invierte de una manera inteligente y estratégica</h2>
                        <p>No mas alquiler, compra tu departamento listo para estrenar. Kairos, la mejor opción para tí.</p>
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="Kairos" />
                            <label>Nombre</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="0987654321" />
                            <label>Teléfono</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            <label>Correo Electrónico</label>
                        </div>
                        <div className="form-floating">
                            <textarea type="text" className="form-control msg" placeholder="mensaje" />
                            <label>Mensaje</label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
