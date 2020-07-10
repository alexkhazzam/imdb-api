import { HttpHandler } from "./Components/HttpHandler.js";
import { DOMHelper } from "./App/DOMHelper.js";
import { ClearHandler } from "./App/ClearHandler.js";

class App {
  appendToSite() {
    const domHelper = new DOMHelper();
    this.configureHttp();
  }
  configureHttp() {
    const httpHandler = new HttpHandler();
    httpHandler.fetchMovies();
  }
  restartDOM() {
    const clearHandler = new ClearHandler();
    clearHandler.clearDOM();
  }
}

const searchBtn = document.querySelector("#movie-search");
searchBtn.addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    li.parentElement.removeChild(li);
  });
  const app = new App();
  app.appendToSite();
});

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", () => {
  const app = new App();
  app.restartDOM();
});

const inputs = document.querySelector("input");
inputs.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const app = new App();
    app.appendToSite();
  }
});
