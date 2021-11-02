export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  // метод обработки ответа сервера
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // получить список всех карточек в виде массива (GET)
  getListCard() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  // добавить карточку (POST)
  postCard(text) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(text),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }
  // удалить карточку (DELETE)
  deleteCard(id) {
    return fetch(this._url + "/cards/" + id, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return this._getResponseData(response);
    });
  }
  // получить данные пользователя (GET)
  getUserInfo() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  // заменить данные пользователя (PATCH)
  patchUserInfo(text) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(text),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }
  // заменить аватар (PATCH)
  patchAvatar(url) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(url),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  // “изменить” статус лайка (PUT/DELETE)
  changeLikeCardStatus(id, isLiked) {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return this._getResponseData(response);
    });
  }
}

const api = new Api({
  url: "https://api.mesto-frontend.tarstabor.nomoredomains.rocks",
});

export default api;
