import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, props.isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
          });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='profile'
            title='Редактировать профиль'
            button='Сохранить'
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="name"
                id="name"
                className="popup__input popup__input_type_name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
                value={name || ''}
                onChange={handleChangeName}
            />
            <span className="popup__input-error popup__input-error_field_name"></span>
            <input
                type="text"
                name="about"
                id="about"
                className="popup__input popup__input_type_about"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
                value={description || ''}
                onChange={handleChangeDescription}
            />
            <span className="popup__input-error popup__input-error_field_about"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;