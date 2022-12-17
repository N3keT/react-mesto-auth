export const BASE_URL = 'https://auth.nomoreparties.co/';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
    })
    .then((res) => {
        return checkResponse(res);
    })
    .then((data) => {
        localStorage.setItem("token", data.token);
        return data;
    });
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
    })
    .then((res) => {
        return checkResponse(res);
    })
    .then((data) => {
        localStorage.setItem("token", data.token);
        return data;
    });
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
    })
    .then((res) => {
        return checkResponse(res);
    });
}

// class ApiAuth {
//     constructor(baseUrl) {
//         this._baseUrl = baseUrl;
//     }

//     _checkResponse(res) {
//         if (res.ok) {
//             return res.json();
//         }
//         return Promise.reject(`Ошибка: ${res.status}`);
//     }

//     register(email, password) {
//         return fetch(`${this._baseUrl}/signup`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 "password": password,
//                 "email": email
//             }),
//         })
//         .then(this._checkResponse);
//     }

//     login (data) {
//         return fetch(`${this._baseUrl}/signin`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 "password": data.password,
//                 "email": data.email
//             }),
//         })
//         .then(this._checkResponse)
//         .then((data) => {
//             localStorage.setItem("jwt", data.token);
//             return data;
//         });
//     }

//     checkToken(token) {
//         return fetch(`${this._baseUrl}/users/me`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization" : `Bearer ${token}`
//             },
//         })
//         .then(this._checkResponse);
//     }
// }

// const apiAuth = new ApiAuth('https://auth.nomoreparties.co/');

// export default apiAuth;