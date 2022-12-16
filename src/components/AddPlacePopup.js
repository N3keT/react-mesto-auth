import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        setName('');
        setLink('');
      }, [props.isOpen]);
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({name: name, link: link});
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='add'
            title='Новое место'
            button='Создать'
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="name" 
                id="foto" 
                className="popup__input popup__input_type_name" 
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
                value={name || ''}
                onChange={handleChangeName}
            />
            <span className="popup__input-error popup__input-error_field_place"></span>
            <input
                type="url"
                name="link"
                id="link"
                className="popup__input popup__input_type_about"
                placeholder="Ссылка на картинку"
                required
                value={link || ''}
                onChange={handleChangeLink}
            />
            <span className="popup__input-error popup__input-error_field_link"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;