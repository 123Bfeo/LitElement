import { LitElement, html } from "lit";
import generalStyles from "../css/general-styles";
import dividerStyles from "../css/divider-styles";

export class DividerLit extends LitElement {
  static get styles() {
    return [dividerStyles, generalStyles];
  }

  render() {
    return html`
      <div class="cont">
        <div class="grid-column-1">
          <div>
            <hr class="dashed" />
          </div>
        </div>
        <div class="grid-column-1">
          <div>
            <hr class="dotted" />
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("divider-lit", DividerLit);
