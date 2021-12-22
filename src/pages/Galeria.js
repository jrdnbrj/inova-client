import galeria1 from '../assets/images/galeria1.jpg'
import galeria2 from '../assets/images/galeria2.jpg'
import galeria3 from '../assets/images/galeria3.jpg'
import galeria4 from '../assets/images/galeria4.jpg'
import galeria5 from '../assets/images/galeria5.jpg'
import galeria6 from '../assets/images/galeria6.jpg'
import galeria7 from '../assets/images/galeria7.jpg'
import galeria8 from '../assets/images/galeria8.jpg'
import galeria9 from '../assets/images/galeria9.jpg'
import galeria10 from '../assets/images/galeria10.jpg'
import galeria11 from '../assets/images/galeria11.jpg'
import galeria12 from '../assets/images/galeria12.jpg'
import galeria13 from '../assets/images/galeria13.jpg'
import galeria14 from '../assets/images/galeria14.jpg'
import galeria15 from '../assets/images/galeria15.jpg'

import GaleryModal from '../components/GaleryModal'


const Galeria = () => {
    return <>
        <GaleryModal />
        <div className="galeria">
            <h1>GALERÍA</h1>
            <div className="galeria-container">
                <img src={galeria1} alt="galeria1" />
                <img src={galeria2} alt="galeria2" />
                <img src={galeria3} alt="galeria3" />
                <img src={galeria4} alt="galeria4" />
                <img src={galeria5} alt="galeria5" />
                <img src={galeria6} alt="galeria6" />
                <img src={galeria7} alt="galeria7" />
                <img src={galeria8} alt="galeria8" />
                <img src={galeria9} id="galeria9" alt="galeria9" />
                <img src={galeria10} alt="galeria10" />
                <img src={galeria11} id="galeria11" alt="galeria11" />
                <img src={galeria12} alt="galeria12" />
                <img src={galeria13} alt="galeria13" />
                <img src={galeria14} alt="galeria14" />
                <img src={galeria15} alt="galeria15" />
            </div>
        </div>
    </>
}

export default Galeria
