import MisionVision from '../components/MisionVision';

import logo3 from '../assets/images/logo3.svg'
import somos1 from '../assets/images/somos1.png'
import somos2 from '../assets/images/somos2.png'
import somos3 from '../assets/images/somos3.png'
import somos4 from '../assets/images/somos4.png'


const QuienesSomos = () => {
    return (
        <>
            <section className="us-header" />
            <MisionVision />
            <section className="sand">
                <img src={logo3} className="logo" alt="logo" />
            </section>
            <section className="somos">
                <div className="row">
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos1} alt="somos1" />
                            <div className="somos-hover">
                                <h3>SOMOS</h3>
                                <p>Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto </p>
                            </div>
                        </div>
                        <h3>SOMOS</h3>
                        <p>Quieres un nuevo concepto?</p>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos2} alt="somos2" />
                            <div className="somos-hover">
                                <h3>SOMOS</h3>
                                <p>Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto </p>
                            </div>
                        </div>
                        <h3>SOMOS</h3>
                        <p>Quieres un nuevo concepto?</p>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos3} alt="somos3" />
                            <div className="somos-hover">
                                <h3>SOMOS</h3>
                                <p>Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto </p>
                            </div>
                        </div>
                        <h3>SOMOS</h3>
                        <p>Quieres un nuevo concepto?</p>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos4} alt="somos4" />
                            <div className="somos-hover">
                                <h3>SOMOS</h3>
                                <p>Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto, Quieres un nuevo concepto </p>
                            </div>
                        </div>
                        <h3>SOMOS</h3>
                        <p>Quieres un nuevo concepto?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuienesSomos
