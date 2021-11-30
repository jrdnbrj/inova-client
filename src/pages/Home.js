import logo2 from '../assets/images/logo2.svg';


const Home = ({ Navbar }) => {
    return (
        <div>
            <div className="home-header">
                <Navbar />
                <div className="row" id="row-correction">
                    <section className="col">
                        <img src={logo2} className="logo mobile-hidden" alt="logo" />
                    </section>
                    <section className="col">
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
                    </section>
                </div>
                <section className="socials">
                    <i class="bi bi-facebook" />
                    <i class="bi bi-whatsapp" />
                    <i class="bi bi-instagram" />
                </section>
            </div>
        </div>
    )
}

export default Home
