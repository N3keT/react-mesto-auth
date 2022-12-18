import registerOk from '../images/register-ok.svg';
import registerError from '../images/register-error.svg';

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_is-opened' : ''}`}>
            <div className="popup__container popup__container-register">
                <img className="popup__image" src={props.src ? registerOk : registerError} alt={props.text} />
                <h3 className="popup__heading popup__heading-register">{props.text}</h3>
                <button type="button" className="popup__close" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default InfoTooltip;