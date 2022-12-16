import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = props.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete-active' : ''}`
    );
    const isLiked = props.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_type_active' : ''}`
    );

    function handleOnCardClick() {
        props.onCardClick(props);
    }

    function handleLikeClick() {
        props.onCardLike(props);
    }

    function handleDeleteClick() {
        props.onCardDelete(props);
    }

    return (
        <li>
            <div className="element">
                <img className="element__foto" src={props.link} alt={props.name} onClick={handleOnCardClick} />
                <div className="element__place">
                    <h2 className="element__place-name">{props.name}</h2>
                    <div className="element__like-container">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <p className="element__amount-likes">{props.likes.length}</p>
                    </div>
                </div>
                <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            </div>
        </li>
    );
}

export default Card;