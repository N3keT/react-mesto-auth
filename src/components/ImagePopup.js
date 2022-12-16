function ImagePopup(props) {
    return(
        <div id="openFoto" className={`popup popup_background ${props.card.isOpen ? 'popup_is-opened' : ''}`}>
            <div className="popup__content">
                <img className="popup__foto" src={props.card.link} alt={props.card.name} />
                <p className="popup__foto-name">{props.card.name}</p>
                <button type="button" className="popup__close" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;