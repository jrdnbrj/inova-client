import galeria9 from '../assets/images/galeria9.jpg'


const GaleryModal = ({ image }) => {
    
    return (
        <div className="modal">
            <div className="modal-body" onBlur={() => console.log('Blur')}>
                {/* <span class="modal-close">&times;</span> */}
                <img src={galeria9} alt="galeria" />
            </div>
        </div>
    );
}


export default GaleryModal
