import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        props.onSubmit(email, password);
    }

    return (
        <section className="sign">
            <div className="sign__container">
                <p className="sign__heading">Регистрация</p>
                <form 
                    className="sign__form"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="sign__input"
                        placeholder="Email"
                        required
                        value={email || ''}
                        onChange={handleChangeEmail}
                    />
                    <span className="sign__input-error"></span>
                    <input
                        className="sign__input"
                        placeholder="Пароль"
                        required
                        value={password || ''}
                        onChange={handleChangePassword}
                    />
                    <span className="sign__input-error"></span>
                    <button className="sign__button">Зарегистрироваться</button>
                </form>
                <p className="sign__question">Уже зарегистрированы? <Link to={'sign-in'} className="sign__question-button">Войти</Link></p>
            </div>
        </section>
    )
}

export default Register;