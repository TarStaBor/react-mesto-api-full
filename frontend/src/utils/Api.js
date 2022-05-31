export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  // Response processing
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getListCard() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  postCard(text) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  deleteCard(id) {
    return fetch(this._url + "/cards/" + id, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  patchUserInfo(text) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  patchAvatar(url) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return this._getResponseData(response);
    });
  }
}

const api = new Api({
  url: "https://api.mesto-frontend.tarstabor.nomoredomains.rocks",
});

export default api;
