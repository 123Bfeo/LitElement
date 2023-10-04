import { LitElement, html, css } from 'lit';
import buttonStyles from '../css/button-styles';
import generalStyles from '../css/general-styles';


export class ButtonLit extends LitElement {
    static get styles (){
        return [
         buttonStyles,
         generalStyles
        ]
    };
    static properties = {
        disable:{type:Boolean},
        paramsUrl:{type:Object},
        name:{type:String},
        status:{type:String},
        species:{type:String},
        title:{type:String},
        gender:{type:String},
        page:{type:String},
        results: {type:Array}
    }
    constructor(){
        super();
        this.disable=false;
        this.paramsUrl={};
        this.results=[]
    }

    render() {
        return html`
        <div>
        <div class="container">
            <button class="button-tertiary" @click="${this.eventButton}" ?disabled="${this.disable}">Buscar</button> 
         </div>
        </div>
        
        `;
    }

    eventButton(){
        try {
            const pageNumber = parseInt(this.paramsUrl.page)
        const url =`https://rickandmortyapi.com/api/character/?name=${this.paramsUrl.name}&status=${this.paramsUrl.status}&species=${this.paramsUrl.species}&type=${this.paramsUrl.title}&gender=${this.paramsUrl.gender}&page=${pageNumber}`

        fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log('soy result',result)
            this.results=result.results;
            this.dispatchEvent(new CustomEvent('value-results', {detail:this.results}))
        })
        } catch (error) {
            console.warn(error)
        }
        
    } 
}
customElements.define('button-lit', ButtonLit);
