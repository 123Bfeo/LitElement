import { LitElement, html, css } from "lit";
//importacion de estilos
import generalStyles from "../css/general-styles";
import buttoStyles from "../css/butto";
//importacion de listas
import { status_list, gender_list } from "../catalog/catalog";
//Importacion de componentes
import "./card-lit";
import "./input-lit";
import "./select-lit";
import "./button-lit";

export class SearchLit extends LitElement {
  //uso de estilos 
  static get styles() {
    return [generalStyles, buttoStyles];
  }
  //definicion de propiedades 
  static properties = {
    statusList: { type: Array },
    genderList: { type: Array },
    inputValue: { type: String },
    valueSelect: { type: String },
    params: { type: Object },
    results: { type: Array },
  };
  //inicializacion de prop
  constructor() {
    super();
    this.statusList = status_list;
    this.genderList = gender_list;
    this.inputValue = "";
    this.valueSelect = "";
    this.params = {
      name: "",
      status: "",
      species: "",
      title: "",
      gender: "",
      page: "",
    };
    this.results = [];
  }
  //captura de data propagada por hijos a traves de eventos
  dataInputName(event) {
    this.inputValue = event.detail;
    this.params.name = this.inputValue;
  }
  dataSelectStatu(event) {
    this.valueSelect = event.detail;
    this.params.status = this.valueSelect;
  }
  dataInputSpecies(event) {
    this.inputValue = event.detail;
    this.params.species = this.inputValue;
  }
  dataInputTitle(event) {
    this.inputValue = event.detail;
    this.params.title = this.inputValue;
  }
  dataSelectGender(event) {
    this.valueSelect = event.detail;
    this.params.gender = this.valueSelect;
  }
  dataInputPage(event) {
    this.inputValue = event.detail;
    this.params.page = this.inputValue;
  }
  dataResult(event) {
    this.results = event.detail;
  }
  clearField() {
    this.results = [];
    location.reload();
  }
  render() {
    return html`
      <div class="card_g grid-column-12">
        <div class="grid-rows-2">
          <div class="grid-column-4">
            <input-lit
              plaseholder="Nombre del personaje"
              @value-input="${this.dataInputName}"
            ></input-lit>
            <select-lit
              .arrayList="${this.statusList}"
              @value-select="${this.dataSelectStatu}"
            ></select-lit>
            <input-lit
              plaseholder="Ingrese una especie"
              @value-input="${this.dataInputSpecies}"
            ></input-lit>
            <input-lit
              plaseholder="Ingrese un tipo"
              @value-input="${this.dataInputTitle}"
            ></input-lit>
            <select-lit
              .arrayList="${this.genderList}"
              @value-select="${this.dataSelectGender}"
            ></select-lit>
            <input-lit
              plaseholder="Ingrese una página"
              @value-input="${this.dataInputPage}"
            ></input-lit>
            <button-lit
              .paramsUrl="${this.params}"
              @value-results="${this.dataResult}"
              >Buscar</button-lit
            >
            <div class="containerB">
              <button class="button-second" @click="${this.clearField}">
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--Uso de condicionales-->
      ${this.results.length === 0
        ? html`<div class="card_g" style="margin-top:20px">
            <div class="alerta">
              <p>No hay resultados de busqueda</p>
            </div>
          </div>`
        : html`
            <div class="card_g" style="margin-top:20px">
              <card-lit .results="${this.results}"></card-lit>
            </div>
          `}
    `;
  }
}
customElements.define("search-lit", SearchLit);
