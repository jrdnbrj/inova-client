import logo2 from '../assets/images/logo2.svg'
import building2 from '../assets/images/building2.png'
import building3 from '../assets/images/building3.png'
import building4 from '../assets/images/building4.png'
import building5 from '../assets/images/building5.png'
import building6 from '../assets/images/building6.png'
import building7 from '../assets/images/building7.png'
import building8 from '../assets/images/building8.png'
import building9 from '../assets/images/building9.png'
import kairos from '../assets/images/kairos.svg'
import logo3 from '../assets/images/logo3.svg'


const Home = () => {

    const sendForm = e => {
        e.preventDefault()
        console.log('form submitted')
    }

    const mision = 'Construimos la mejor alternativa de vivienda en términos de ubicación, calidad y precio, satisfaciendo plenamente a cada uno de nuestros clientes esto se ha logra con el desarrollo integralmente un equipo de trabajo exitoso.'
    const vision = 'Ser la empresa líder de construcción y ventas en la ciudad de Quito, manteniendo un standar de calidad y satisfacción que le brinde a cada cliente trnquilidad en su inversion.'

    return (
        <>
            <section className="home-header">
                <div className="row" id="row-correction">
                    <div className="col">
                        <img src={logo2} className="logo mobile-hidden" alt="logo" />
                    </div>
                    <div className="col">
                        <div className="home-contacts">
                            <span id="text-1">OTRA MANERA DE GUIAR</span>
                            <span id="text-2">¿Quiéres un nuevo concepto para tus fotos? Nosotros te damos las herramientas y visión de tu imagen</span>
                            <span id="numbers">0994922436 - 0995424465</span>
                            <button id="llamanos">
                                <span>LLÁMANOS</span>
                            </button>
                            <button id="departamentos">
                                <span>DEPARTAMENTOS</span>
                            </button>
                        </div>
                    </div>
                </div>
                <section className="socials">
                    <i className="bi bi-facebook" />
                    <i className="bi bi-whatsapp" />
                    <i className="bi bi-instagram" />
                </section>
            </section>
            <div className="row" id="row-correction">
                <div className="col-lg kairos-col">
                    <div className="kairos-col-item">
                        <div className="kairos-images">
                            <img src={building2} className="b-2" alt="building" />
                            <img src={building3} className="b-3" alt="building" />
                            <img src={building4} className="b-4" alt="building" />
                        </div>
                    </div>
                </div>
                <div className="col-lg kairos-col">
                    <div className="kairos-info">
                        <img src={kairos} className="kairos" alt="kairos" />
                        <p>Concebido para la vida ejecutiva de alto rendimiento en la zona de más alta demanda de la ciudad, KAIROS se destaca por su exclusividad, diseño y ubicación estratégica en la ciudad de Quito.</p>
                        <button id="contactanos">
                            <span>Contáctanos</span>
                        </button>
                        <button id="ver-mas">
                            <span>Ver más</span>
                        </button>
                    </div>
                </div>
            </div>     
            <section className="lights">
                <img src={logo3} className="logo" alt="logo" />
            </section>
            <section className="mision-vision">
                <h2>MISIÓN / VISIÓN ></h2>
                <div className="row" id="row-correction">
                    <div className="col-lg">
                        <span>M</span>
                        <p>{mision}</p>
                    </div>
                    <div className="col-lg">
                        <span>V</span>
                        <p>{vision}</p>
                    </div>
                </div>
            </section>
            <section className="home-proyectos">
                <h2>PROYECTOS</h2>
                <img src={building5} id="b-5" alt="building" />
                <img src={building6} id="b-6" alt="building" />
                <img src={building7} id="b-7" alt="building" />
                <img src={building8} id="b-8" className="mobile-hidden" alt="building" />
                <button>
                    <span>SIGUIENTE</span>
                </button>
            </section>
            <section className="home-form">
                <div className="row" id="row-correction">
                    <div className="col mobile-hidden">
                        <img src={building9} id="b-9" alt="building" />
                    </div>
                    <div className="col">
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
        </>
    )
}

export default Home
