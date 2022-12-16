function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_is-opened' : ''}`}>
            <div className="popup__container">
                <h3 className="popup__heading">{props.title}</h3>
                <form className="popup__form" name={props.name} onSubmit={props.onSubmit} noValidate>
                    {props.children}
                    <button name="submit" type="submit" className="popup__submit-button">{props.button}</button>
                </form>
                <button type="button" className="popup__close" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;