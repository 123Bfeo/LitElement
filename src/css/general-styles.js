import { css } from "lit";

const generalStyles = css`
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 20px;
  }
  .grid-column-12 {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto;
    column-gap: 15px;
  }
  .grid-column-8 {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto;
    column-gap: 15px;
  }
  .grid-column-6 {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    column-gap: 15px;
  }
  .grid-column-4 {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 15px;
  }
  .grid-column-2 {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 15px;
  }
  .grid-column-1 {
    display: grid;
    grid-template-columns: auto;
    column-gap: 15px;
  }
  .grid-rows-2 {
    display: grid;
    grid-template-rows: auto auto;
  }
  .card_g {
    display:flex;
    justify-content:center;
    width: 100%;
    padding:20px;
    margin: auto;
    max-width:80%;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .alert{
    font-size:16px;
    font-family:'Lucida Console','Courier New','monospace';
  }
`;

export default generalStyles;
