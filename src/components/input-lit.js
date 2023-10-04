import { LitElement, html } from "lit";
import { inputStyles } from "../css/input-styles";

export class InputLit extends LitElement {
  static get styles() {
    return [inputStyles];
  }
  static properties = {
    plaseholder:{type:String},
    msg: { type: String },
    minLength: { type: String },
    maxLength: { type: String },
    msgError: { type: String },
    disable: { type: Boolean },
  };
  constructor() {
    super();
    this.plaseholder = '';
    this.msg = "El campo es obligatorio";
    this.maxLength = "El maximo son 8 caracteres";
    this.minLength = "El minimo son 3 caracteres";
    this.classAdd = "msgError";
    this.disable = true
  }
  render() {
    return html`
      <div>
        <div class="container">
          <input
            type="text"
            minlength="1"
            maxlength="8"
            placeholder="${this.plaseholder}"
            value=""
            @change="${this.handlerInput}"
          />
          <div id="error"></div>
        </div>
        <!-- <div class="container">
          <label class="require">Input General</label>
          <input
            type="text"
            minlength="3"
            maxlength="8"
            placeholder="Escribe un texto"
            value=""
            @change="${this.handlerInput}"
            ?disabled = "${this.disable}"
          />
          <div id="error"></div>
        </div> -->
      </div>
    `;
  }
  handlerInput(event) {
    const valueInput = event.target.value;
    const errorElement = this.shadowRoot.getElementById("error");

   if(valueInput === ""){
      errorElement.innerHTML = this.msg;
   }else if(valueInput.length > 8){
      errorElement.innerHTML = this.maxLength;
   }else{
    errorElement.innerHTML = "";
    this.dispatchEvent(new CustomEvent('value-input', {detail:valueInput}))
   }

   if(valueInput === "" || valueInput.length > 8){
    errorElement.classList.add(this.classAdd)
   }else{
    errorElement.classList.remove(this.classAdd)
   }
  }
}
customElements.define("input-lit", InputLit);
