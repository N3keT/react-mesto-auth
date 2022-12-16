import PopupWithForm from "./PopupWithForm";

function DeletePlacePopup(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onDeletePlace(props.card);
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            title='Вы уверены?'
            name='deleteForm'
            button='Да'
            onSubmit={handleSubmit}
        />
    );
}

export default DeletePlacePopup;