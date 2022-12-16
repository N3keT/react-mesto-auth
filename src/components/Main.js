import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__container-avatar">
                    <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
                    <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__name">
                        <h1 className="profile__name-text">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {props.cards.map((card) => (
                    <Card
                        key={card._id}
                        _id={card._id}
                        link={card.link}
                        name={card.name}
                        likes={card.likes}
                        onCardClick={props.onCardClick}
                        owner={card.owner}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                    />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;