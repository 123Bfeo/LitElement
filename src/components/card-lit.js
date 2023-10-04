import { LitElement, html, css } from "lit";
import generalStyles from "../css/general-styles";
import cardStyles from "../css/card-styles";

export class CardLit extends LitElement {
  static get styles() {
    return [cardStyles, generalStyles];
  }

  static properties = {
    title:{type:String},
    results:{type:Array}
}

  constructor(){
    super();
    this.title = 'Luis David';
    console.log('aqui en card',this.results)
  } 

  render() {
    return html`
     <div class="grid-column-4 card">
     ${this.results.map(element => html`
        <div class="card-album">
          <img src="${element.image}">
          <p class="title">${element.name}</p>
          <p>Status: ${element.status}</p>
          <p>Species: ${element.species}</p>
        </div>
      `)}
     </div>
    `;
  }
}
customElements.define("card-lit", CardLit);
