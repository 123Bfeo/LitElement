import { LitElement, html, css } from "lit";
import selectStyles from "../css/select-styles";

export class SelectLit extends LitElement {
  static get styles() {
    return [selectStyles];
  }
  static properties = {
    msgError: { type: String },
    addClass: { type: String },
    disable: { type: Boolean },
    arrayList: { type: Array },
  };
  constructor() {
    super();
    this.msgError = "Este campo es obligatorio!";
    this.addClass = "msgError";
    this.disable = true;

  }
  render() {
    return html`
        <div class="container">
          <select
            name="country"
            class="colorSelect"
            @input="${this.handrerSelect}"
          >
            ${this.arrayList.map(
              (item) => html`
                <option value="${item.value}">${item.text}</option>
              `
            )}
          </select>
          <div class="space" id="error"></div>
        </div>
      </div>
    `;
  }
  //Manejador de evento para la captura de opciones en un select y validacion

  handrerSelect(e) {
    const value = e.target.value;
    if (value === "option") {
      this.shadowRoot.getElementById("error").innerHTML = this.msgError;
      this.shadowRoot.getElementById("error").classList.add(this.addClass);
    } else {
      this.shadowRoot.getElementById("error").innerHTML = "";
      this.shadowRoot.getElementById("error").classList.remove(this.addClass);
      this.dispatchEvent(new CustomEvent('value-select', { detail: value }));
    }
  }
}
customElements.define("select-lit", SelectLit);
