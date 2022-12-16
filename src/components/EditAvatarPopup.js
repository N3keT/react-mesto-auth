import { useRef, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    //const avatarRef = useRef();
    const [link, setLink] = useState('');

    // useEffect(() => {
    //     avatarRef.current.value = '';
    //   }, [props.isOpen]);

    useEffect(() => {
        setLink('');
      }, [props.isOpen])

    function handleChange(e) {
        // setLink(avatarRef.current.value);
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: link,
        });
      }

    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='avatar'
            title='Обновить аватар'
            button='Сохранить'
            onSubmit={handleSubmit}
        >
            <input
                type="url"
                name="avatar"
                id="linkAvatar"
                className="popup__input popup__input_type_about"
                placeholder="Ссылка на картинку"
                required
                // ref={avatarRef}
                value={link || ''}
                onChange={handleChange}
            />
            <span className="popup__input-error popup__input-error_field_link"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;