import { DOMHelper } from "../App/DOMHelper.js";

export class HttpHandler {
  constructor() {
    this.movieTitle = document.querySelector("input");
    this.movieObjects = [];
    this.jsonObj;
  }
  sendHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.responseType = "json";

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          console.log(xhr.status);
          reject(new Error("Something went wrong!"));
        }
      };

      xhr.onerror = function () {
        console.log(xhr.response);
        reject(new Error("Failed to send request!"));
      };
      xhr.send();
    });
    return promise;
  }
  async fetchMovies() {
    if (this.movieTitle.value.trim() === "") {
      const body = document.querySelector("body");
      const listItems = document.querySelectorAll("li");
      if (listItems.length === 1) {
        return;
      }
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = "Please enter a valid movie/show title";
      li.append(p);
      body.append(li);
      return;
    }
    const responseData = await this.sendHttpRequest(
      "GET",
      `http://www.omdbapi.com/?&t=${this.movieTitle.value.trim()}&apikey=78628677`
    );
    const rd = responseData;
    this.title = rd.Title;

    this.jsonObj = {
      Year: rd.Year,
      Rated: rd.Rated,
      Released: rd.Released,
      Runtime: rd.Runtime,
      Actors: rd.Actors,
      Awards: rd.Awards,
      BoxOffice: rd.BoxOffice,
      Country: rd.Country,
      DVD: rd.DVD,
      Director: rd.Director,
      Genre: rd.Genre,
      Language: rd.Language,
      Metascore: rd.Metascore,
      plot: rd.Plot,
      production: rd.Production,
      Released: rd.Released,
      Runtime: rd.Runtime,
      Type: rd.Type,
      Writer: rd.Writer,
      Year: rd.Year,
      ImdbRating: rd.imdbRating,
      ImdbVotes: rd.imdbVotes,
    };
    const domHelper = new DOMHelper();
    domHelper.appendToDOM(this.jsonObj, this.title);
  }
}
