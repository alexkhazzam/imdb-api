export class ClearHandler {
  constructor() {
    this.userInput = document.querySelector("input");
    this.listItems = document.querySelector("li");
    this.clearBtn = document.querySelector("#clear-btn");
  }
  clearDOM() {
    this.userInput.value = "";
    this.listItems.textContent = "";
    this.clearBtn.style.display = "none";
  }
}
