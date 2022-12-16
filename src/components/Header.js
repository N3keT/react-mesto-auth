function Header(props) {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__container-button">
                <p className="header__email">{props.email}</p>
                <button className="header__button">{props.buttonText}</button>
            </div>
        </header>
    );
}

export default Header;