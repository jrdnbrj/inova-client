import logo2 from '../assets/images/logo2.svg'
import building2 from '../assets/images/building2.png'
import building3 from '../assets/images/building3.png'
import building4 from '../assets/images/building4.png'
import kairos from '../assets/images/kairos.svg'
import logo3 from '../assets/images/logo3.svg'


const Home = ({ Navbar }) => {
    return (
        <>
            <section className="home-header">
                <Navbar />
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
            <section className="home-body">
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
            </section>
            <section className="lights">
                <img src={logo3} className="logo" alt="logo" />
            </section>
        </>
    )
}

export default Home
