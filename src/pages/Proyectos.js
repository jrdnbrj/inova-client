import building10 from '../assets/images/building10.png'
import building11 from '../assets/images/building11.png'
import building12 from '../assets/images/building12.png'


const Proyectos = () => {
    return (
        <section className="proyectos">
            <h1 id="nuestros">NUESTROS</h1>
            <h1 id="proyectos">PROYECTOS</h1>
            <div className="row" id="row-correction">
                <div className="col-lg-6 col-sm-12 card">
                    <div className="card--image">
                        <img src={building10} alt="building10" />
                    </div>
                    <div className="card--info info--1">
                        <span className="info--text">Espacioso</span>
                        <div className="icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="info--image">
                            <img src={building10} alt="info" />
                        </div>
                    </div>
                    <div className="card--info info--2">
                        <span className="info--text">Moderno</span>
                        <div className="icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="info--image">
                            <img src={building10} alt="info" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2>KIARA</h2>
                    <p>Quieres un nuevo concepto para tus fotos? nosotros te damos las herramientas y visión de tu imagen quieres un nuevo concepto para tus fotos? nosotros te damos las herramientas y visión de tu imagen</p>
                </div>
            </div>
            <div className="row" id="row-correction">
                <div className="col-lg-6 col-sm-12 card">
                    <div className="card--image">
                        <img src={building11} alt="building11" />
                    </div>
                    <div className="card--info info--1">
                        <span className="info--text">Accesible</span>
                        <div className="icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="info--image">
                            <img src={building11} alt="info" />
                        </div>
                    </div>
                    {/* <div className="card--info info--2">
                        <span className="info--text">Moderno</span>
                        <div className="icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="info--image">
                            <img src={building11} alt="info" />
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2>VISTA GRANDE</h2>
                    <p>Quieres un nuevo concepto para tus fotos? nosotros te damos las herramientas y visión de tu imagen quieres un nuevo concepto para tus fotos? nosotros te damos las herramientas y visión de tu imagen</p>
                </div>
            </div>
            <div className="row" id="row-correction">
                <div className="col-lg-6 col-sm-12 card">
                    <div className="card--image">
                        <img src={building12} alt="building12" />
                    </div>
                    <div className="card--info info--1">
                        <span className="info--text">Elegante</span>
                        <div className="icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="info--image">
                            <img src={building12} alt="info" />
                        </div>
                    </div>
                    <div className="card--info info--2">
                        <span className="info--text">Innovador</span>
                        <div className="icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="info--image">
                            <img src={building12} alt="info" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2>CIARA</h2>
                    <p>Quieres un nuevo concepto para tus fotos? nosotros te damos las herramientas y visión de tu imagen quieres un nuevo concepto para tus fotos? nosotros te damos las herramientas y visión de tu imagen</p>
                </div>
            </div>
        </section>
    )
}

export default Proyectos
