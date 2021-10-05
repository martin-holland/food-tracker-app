'use strict';

const fetch = require('node-fetch')

class FetchWrapper {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    get(endpoint) {
      return fetch(this.baseURL + endpoint).then((response) => response.json());
    }
  
    put(endpoint, body) {
      return this._send("put", endpoint, body);
    }
  
    post(endpoint, body) {
      return this._send("post", endpoint, body);
    }
  
    patch(endpoint, body) {
      return this._send("patch", endpoint, body);
    }
  
    delete(endpoint, body) {
      return this._send("delete", endpoint, body);
    }
  
    _send(method, endpoint, body) {
      return fetch(this.baseURL + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((response) => response.json())
      .then(console.log("Response received:"));
    }
  }
  const foodCollection = require('./food.json')
  const API = new FetchWrapper("https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents")

  async function populateAPI() {
      fetch("https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/food-holland", {

            method: 'put',
            body: JSON.stringify({
                "food": 'Pizza',
                "carbs": 20,
                "protein": 4,
                "fat": 4,
            }),
            headers: {
                "Content-Type": "application/json", charset:"UTF-8"
            }
            })
            .then(response => response.json())
            .then(json => console.log(json))
  }

  populateAPI();