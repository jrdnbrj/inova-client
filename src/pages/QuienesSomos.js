import MisionVision from '../components/MisionVision';
import logo3 from '../assets/images/logo3.svg'


const QuienesSomos = () => {
    return (
        <>
            <section className="us-header">
                <div></div>
            </section>
            <MisionVision />
            <section className="sand">
                <img src={logo3} className="logo" alt="logo" />
            </section>
        </>
    )
}

export default QuienesSomos
