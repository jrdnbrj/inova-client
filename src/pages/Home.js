import { Link } from 'react-router-dom'

import logo2 from '../assets/images/logo2.svg'
import building2 from '../assets/images/building2.png'
import building3 from '../assets/images/building3.png'
import building4 from '../assets/images/building4.png'
import building5 from '../assets/images/building5.png'
import building6 from '../assets/images/building6.png'
import building7 from '../assets/images/building7.png'
import building8 from '../assets/images/building8.png'
import kairos from '../assets/images/kairos.svg'
import logo3 from '../assets/images/logo3.svg'

import MisionVision from '../components/MisionVision'
import ConctactForm from '../components/ContactForm'


const Home = () => {

    const kairosForm = 'Concebido para la vida ejecutiva de alto rendimiento en la zona de la mas alta plusvalia de ciudad. KAIROS se destaca por su exclusividad, diseño y ubicación estrategica. Su diseño permite aprovechar al maximo la luminosidad y disfrutar de una hermosa vista en cada uno de los departamentos.'

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
                            <span id="numbers">0998799739</span>
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
                        <p>{kairosForm}</p>
                        <Link to="/contactos">
                            <button id="contactanos">
                                <span>Contáctanos</span>
                            </button>
                        </Link>
                        <Link to="/kairos">
                            <button id="ver-mas">
                                <span>Ver más</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>     
            <section className="lights">
                <img src={logo3} className="logo" alt="logo" />
            </section>
            <MisionVision />
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
            <ConctactForm onHome />
        </>
    )
}

export default Home
