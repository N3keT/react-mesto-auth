import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <section className="sign">
            <div className="sign__container">
                <p className="sign__heading">Вход</p>
                <form className="sign__form">
                    <input 
                        type="email"
                        name="email"
                        className="sign__input"
                        placeholder="Email"
                        required
                        value={email || ''}
                        onChange={handleChangeEmail}
                    />
                    <span className="sign__input-error"></span>
                    <input
                        type="password"
                        name="password"
                        className="sign__input"
                        placeholder="Пароль"
                        required
                        value={password || ''}
                        onChange={handleChangePassword}
                    />
                    <span className="sign__input-error"></span>
                    <button className="sign__button">Войти</button>
                </form>
            </div>
        </section>
    )
}

export default Login;