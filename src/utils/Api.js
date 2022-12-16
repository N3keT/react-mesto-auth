class Api {
    constructor(options) {
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch('https://nomoreparties.co/v1/cohort-52/users/me', {
            method: "GET",
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    setUserInfo(data) {
        return fetch('https://nomoreparties.co/v1/cohort-52/users/me', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(this._checkResponse);
    }

    setAvatar(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/users/me/avatar', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/cards', {
            method: "GET",
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    addNewCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/cards', {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(this._checkResponse);
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-52/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    changeLikeCardStatus(cardId, likeCardStatus) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-52/cards/${cardId}/likes`, {
          method: (likeCardStatus ? "PUT": "DELETE"),
          headers: this._headers
        })
        .then(this._checkResponse);
      }
}

const api = new Api({
    headers: {
      authorization: '9314592c-bb81-4273-936f-54cff7461679',
      'Content-Type': 'application/json'
    }
  });

  export default api;