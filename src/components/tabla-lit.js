import { LitElement, html} from "lit";
import tablaStyles from "../css/tabla-styles";
import generalStyles from "../css/general-styles";


export class TablaLit extends LitElement {
  static get styles() {
    return [
        tablaStyles
    ]
  }
 static  properties = {
      header:{type:Array},
      body:{type:Array},
 }
 
 constructor(){
    super();
    this.header = [
        {title:"Company"},
        {title:"Contact"},
        {title:"Country"},
    ];
    this.body =[
        {company:"Alfreds Futterkiste",contact:"Maria Anders", country:"Germany"},
        {company:"Centro comercial Moctezuma",contact:"Francisco Chang", country:"Mexico"},
        {company:"Indra",contact:"Luis David", country:"Colombia"}
    ]
 }
  render() {
    return html`
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
      
      <table>
        <tr>
            ${this.header.map(item => html`
               <th>${item.title}</th>
            `)}
        </tr>
      </table>
    `;
  }
}
customElements.define("tabla-lit", TablaLit);
