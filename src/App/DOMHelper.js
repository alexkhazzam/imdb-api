export class DOMHelper {
  constructor() {
    this.body = document.querySelector("body");
  }
  appendToDOM(jsonObject, title) {
    const li = document.querySelectorAll("li");
    if (li.length > 0) {
      li.forEach((li) => {
        li.textContent = "";
      });
    }
    const listItem = document.createElement("li");

    const p1 = document.createElement("h2");
    p1.textContent = `${title}`;
    p1.style.color = "#ffd103";
    p1.style.fontWeight = "bold";
    p1.style.fontSize = "35px";
    const p2 = document.createElement("p");
    p2.textContent = `YEAR - ${jsonObject.Year}`;
    const p3 = document.createElement("p");
    p3.textContent = `RATED - ${jsonObject.Rated}`;
    const p4 = document.createElement("p");
    p4.textContent = `RELEASED - ${jsonObject.Released}`;
    const p5 = document.createElement("p");
    p5.textContent = `RUNTIME - ${jsonObject.Runtime}`;
    const p6 = document.createElement("p");
    p6.textContent = `ACTORS - ${jsonObject.Actors}`;
    const p7 = document.createElement("p");
    p7.textContent = `AWARDS - ${jsonObject.Awards}`;
    const p8 = document.createElement("p");
    p8.textContent = `BOX OFFICE - ${jsonObject.BoxOffice}`;
    const p9 = document.createElement("p");
    p9.textContent = `COUNTRY - ${jsonObject.Country}`;
    const p10 = document.createElement("p");
    p10.textContent = `DVD - ${jsonObject.DVD}`;
    const p11 = document.createElement("p");
    p11.textContent = `DIRECTOR - ${jsonObject.Director}`;
    const p12 = document.createElement("p");
    p12.textContent = `GENRE - ${jsonObject.Genre}`;
    const p13 = document.createElement("p");
    p13.textContent = `LANGUAGE - ${jsonObject.Language}`;
    const p14 = document.createElement("p");
    p14.textContent = `METASCORE - ${jsonObject.Metascore}`;
    const p15 = document.createElement("p");
    p15.textContent = `PLOT - ${jsonObject.plot}`;

    const p16 = document.createElement("p");
    if (jsonObject.production === undefined) {
      p16.textContent = `PRODUCTION - no productions were found`;
    } else {
      p16.textContent = `PRODUCTION - ${jsonObject.production}`;
    }

    const p18 = document.createElement("p");
    p18.textContent = `RELEASED - ${jsonObject.Released}`;
    const p19 = document.createElement("p");
    p19.textContent = `RUNTIME - ${jsonObject.Runtime}`;
    const p20 = document.createElement("p");
    p20.textContent = `TYPE - ${jsonObject.Type}`;
    const p21 = document.createElement("p");
    p21.textContent = `WRITER - ${jsonObject.Writer}`;
    const p22 = document.createElement("p");
    p22.textContent = `YEAR - ${jsonObject.Year}`;

    const p23 = document.createElement("p");
    if (jsonObject.ImdbRating === undefined) {
      p23.textContent = `IMDB RATING - no ratings found`;
    } else {
      p23.textContent = `IMDB RATING - ${jsonObject.ImdbRating}`;
    }
    const p24 = document.createElement("p");
    if (jsonObject.ImdbVotes === undefined) {
      p24.textContent = `IMDB VOTES - no votes found`;
    } else {
      p24.textContent = `IMDB VOTES - ${jsonObject.ImdbVotes}`;
    }

    listItem.append(
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      p12,
      p13,
      p14,
      p15,
      p16,
      p18,
      p19,
      p20,
      p21,
      p22,
      p23,
      p24
    );
    this.body.append(listItem);
    const clearBtn = document.querySelector("#clear-btn");
    clearBtn.style.display = "inline-block";

    const inputs = document.querySelector("input");
    inputs.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const app = new App();
        app.appendToSite();
      }
    });
  }
}
